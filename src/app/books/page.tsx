'use client';

import React from 'react'
import { useState } from 'react';
import BookCard from '@/components/BookCard';
import { Book } from '@/types';
import books from '@/data/books.json';
import { Input } from '@/components/ui/input';

function Books() {
const [search, setSearch] = useState('');

  const filteredBooks = (books as Book[]).filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase()) ||
    book.author.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Browse Books</h1>
      <Input
        type="text"
        placeholder="Search by title or author..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-4"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredBooks.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  )
}

export default Books