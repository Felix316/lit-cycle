"use client"

import React from 'react'
import { useContext } from 'react'
import { CartContext } from '@/lib/cart'
import { Book } from '@/types'

// Extend the Book type to include quantity
type BookWithQuantity = Book & { quantity: number };
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'


function BookCard({ book }: { book: Book }) {
  const cartContext = useContext(CartContext);

  if (!cartContext) {
    throw new Error("CartContext is not provided");
  }

  const { addToCart } = cartContext;

  return (
    <Card>
      <CardHeader>
        <Image 
          src={book.image} 
          alt={book.title} 
          width={500} 
          height={300} 
          className="w-full h-48 object-cover" 
        />
      </CardHeader>
      <CardContent className="space-y-2">
        <CardTitle>{book.title}</CardTitle>
        <p className="text-green-600">${book.price.toFixed(2)}</p>
        <Button onClick={() => addToCart({ ...book, quantity: 1 } as BookWithQuantity)} className="w-full">
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  )
}

export default BookCard