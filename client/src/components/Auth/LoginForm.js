import React, { useState } from 'react';
import api from '../../services/api';

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await api.post('/login', { username, password });
      const { token } = response.data;
      // Save the token in state or localStorage
      
      onLogin(token);
      alert('done')
    } catch (error) {
      console.error(error);
      // Handle login error
      alert('not found')
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginForm;
