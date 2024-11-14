// src/app/login/page.js
'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function LoginPage() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    try {
      const response = await fetch('/api/v1/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to log in');
      }

      const data = await response.json();
      console.log('User data:', data);
      setSuccess(true);
    } catch (err) {
      console.error('Error:', err);
      setError(err.message);
    }
  };

  return (
    <div className="container">
      <h2>Log In</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Log In</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>Login successful!</p>}
      <p>
        Don’t have an account? <Link href="/signup">Sign Up</Link>
      </p>

      <style jsx>{`
        .container {
          max-width: 400px;
          margin: 0 auto;
          padding: 1rem;
        }
        input {
          display: block;
          width: 100%;
          padding: 0.5rem;
          margin-bottom: 1rem;
        }
        button {
          width: 100%;
          padding: 0.5rem;
        }
      `}</style>
    </div>
  );
}
