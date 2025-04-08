'use client';

import React, {
    createContext,
    useState,
    useEffect,
    useMemo,
    ReactNode,
} from 'react';
import { Book, CartItem } from '@/types';

interface CartContextValue {
    cart: CartItem[];
    addToCart: (book: Book) => void;
    removeFromCart: (id: number) => void;
    updateQuantity: (id: number, quantity: number) => void;
    clearCart: () => void;
}

export const CartContext = createContext<CartContextValue | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
    const [cart, setCart] = useState<CartItem[]>([]);
    const [isInitialized, setIsInitialized] = useState(false);

    useEffect(() => {
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            try {
                setCart(JSON.parse(savedCart));
            } catch (error) {
                console.error('Failed to parse cart from localStorage', error);
            }
        }
        setIsInitialized(true);
    }, []);

    useEffect(() => {
        if (isInitialized) {
            localStorage.setItem('cart', JSON.stringify(cart));
        }
    }, [cart, isInitialized]);

    const addToCart = (book: Book) => {
        setCart((prev) => {
            const existing = prev.find((item) => item.id === book.id);
            if (existing) {
                return prev.map((item) =>
                    item.id === book.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            return [...prev, { ...book, quantity: 1 }];
        });
    };

    const removeFromCart = React.useCallback((id: number) => {
        setCart((prev) => prev.filter((item) => item.id !== id));
    }, []);

    const updateQuantity = React.useCallback((id: number, quantity: number) => {
        if (quantity <= 0) return removeFromCart(id);
        setCart((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, quantity } : item
            )
        );
    }, [removeFromCart]);

    const clearCart = () => setCart([]);

    const value = useMemo(
        () => ({
            cart,
            addToCart,
            removeFromCart,
            updateQuantity,
            clearCart,
        }),
        [cart, updateQuantity, removeFromCart]
    );

    return (
        <CartContext.Provider value= { value } >
        { children }
        </CartContext.Provider>
  );
}

