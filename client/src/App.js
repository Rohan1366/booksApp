import React, { useState } from 'react';
import { BrowserRouter as Router, Route,  Link, Navigate, Routes } from 'react-router-dom';
import LoginForm from './components/Auth/LoginForm';
import SignupForm from './components/Auth/SignupForm';
import BookList from './components/Books/BookList';

const App = () => {
  const [token, setToken] = useState(null);

  const handleLogin = (newToken) => {
    setToken(newToken);
  };

  const handleSignup = () => {
    // Show success message or navigate to login
    // For simplicity, let's just clear the form
    Navigate('/books')
  };

  return (
    <>
    <div className='app'>
    <Routes>
      <Route>
      <div >
        <nav>
          {token && (
            <ul>
              <li>
                <Link to="/books">Book List</Link>
              </li>
              {/* Add more navigation links as needed */}
            </ul>
          )}
        </nav>
        
          <Route path="/books">
            {token ? <BookList token={token} /> : <p>Please log in to view books.</p>}
          </Route>
          <Route path="/login">
            {token ? <p>You are already logged in.</p> : <LoginForm onLogin={handleLogin} />}
          </Route>
          <Route path="/signup">
            {token ? <p>You are already logged in.</p> : <SignupForm onSignup={handleSignup} />}
          </Route>
          <Route path="/">
            {token ? (
              <div>
                <h1>Welcome!</h1>
                {/* Your authenticated content goes here */}
              </div>
            ) : (
              <div>
                <h1>Welcome to the Library App!</h1>
                <p>Please log in or sign up.</p>
              </div>
            )}
          </Route>
        
      </div>
    </Route>
    </Routes>
    </div>
    </>
  );
};

export default App;
