'use client';

import React, { useContext } from 'react'
import { CartContext } from '@/lib/cart';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

function Checkout() {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('CartContext is undefined. Make sure you are using the provider.');
    }
    const { cart, clearCart } = context;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch('/api/checkout', { method: 'POST', body: JSON.stringify(cart) });
    clearCart();
    alert('Order placed successfully!');
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      <form onSubmit={handleSubmit} className="max-w-md space-y-4">
        <Input type="text" placeholder="Name" className="w-full" />
        <Input type="text" placeholder="Address" className="w-full" />
        <Button type="submit" className="w-full">
          Place Order
        </Button>
      </form>
    </div>
  )
}

export default Checkout