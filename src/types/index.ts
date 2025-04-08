export interface Book {
    id: number;
    title: string;
    author: string;
    genre: string;
    price: number;
    condition: string;
    image: string;
  }
  
  export interface CartItem extends Book {
    quantity: number;
  }