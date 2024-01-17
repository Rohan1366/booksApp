import React, { useState } from 'react';
import api from '../../services/api';

const SignupForm = ({ onSignup }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    try {
      await api.post('/signup', { username, password });
      // Show success message or navigate to login
      alert('success')
      onSignup();
    } catch (error) {
      console.error(error);
      // Handle signup error
      alert('failed')
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <button onClick={handleSignup}>Signup</button>
    </div>
  );
};

export default SignupForm;
