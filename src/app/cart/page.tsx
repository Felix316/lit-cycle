
'use client';

import React from 'react'
import { useContext } from 'react';
import { CartContext } from '@/lib/cart';
import CartItemComponent from '@/components/CartItem';
import { CartItem } from '@/types';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

function Cart() {
    const context = useContext(CartContext);

    if (!context) {
        throw new Error('CartContext must be used within a CartProvider');
    }

    const { cart, clearCart } = context;

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item: CartItem) => (
            <CartItemComponent key={item.id} item={item} />
          ))}
          <p className="text-xl mt-4">Total: ${total.toFixed(2)}</p>
          <div className="mt-4 flex gap-2">
            <Link href="/checkout">
              <Button>Proceed to Checkout</Button>
            </Link>
            <Button variant="destructive" onClick={clearCart}>
              Clear Cart
            </Button>
          </div>
        </>
      )}
    </div>
  )
}

export default Cart