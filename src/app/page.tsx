
import Navbar from '@/components/Navbar'
import React from 'react'
import { Book } from '@/types'
import BookCard from '@/components/BookCard'
import books from '@/data/books.json'





function Home() {
  return (
    <div className='container mx-auto p-4'>
      <Navbar />
      <h1 className="text-3xl font-bold mb-6">Welcome to LitCycle</h1>
      <p className="mb-4">Find your next favorite used book!</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {(books as Book[]).slice(0, 3).map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
    
  )
}

export default Home