import React, { useState, useEffect } from 'react';
import api from '../../services/api';

const BookList = ({ token }) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await api.get('/books', {
          headers: { Authorization: token },
        });
        setBooks(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        // Handle error
        setLoading(false);
      }
    };

    fetchBooks();
  }, [token]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>Book List</h2>
      <ul>
        {books.map((book) => (
          <li key={book._id}>
            <strong>Title:</strong> {book.title}, <strong>Author:</strong> {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
