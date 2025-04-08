'use client';

import React from 'react'
import { useContext } from 'react';
import { CartContext } from '@/lib/cart';
import { CartItem as CartItemType } from '@/types';
import { Button } from '@/components/ui/button';

function CartItem({ item }: { item: CartItemType }) {
    const cartContext = useContext(CartContext);

    if (!cartContext) {
        throw new Error('CartContext is not provided');
    }

    const { removeFromCart, updateQuantity } = cartContext;

  return (
    <div className="flex justify-between items-center border-b py-2">
      <div>
        <h3>{item.title}</h3>
        <p>${item.price} x {item.quantity}</p>
      </div>
      <div className="flex gap-2">
        <Button size="sm" onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</Button>
        <span>{item.quantity}</span>
        <Button size="sm" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</Button>
        <Button variant="destructive" size="sm" onClick={() => removeFromCart(item.id)}>
          Remove
        </Button>
      </div>
    </div>
  )
}

export default CartItem