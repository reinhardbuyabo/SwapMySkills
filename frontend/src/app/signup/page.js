// src/app/signup/page.js
'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function SignUpPage() {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
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
      console.log('Form data:', formData);
      const response = await fetch('/api/v1/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        console.log('response:', response);
        throw new Error('Failed to sign up');
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
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
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
        <button type="submit">Sign Up</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>Sign up successful!</p>}
      <p>
        Already have an account? <Link href="/login">Log In</Link>
      </p>

      <style jsx>{`
        .container {
          max-width: 400px;
          margin: auto;
          padding: 20px;
          text-align: center;
        }

        form {
          display: flex;
          flex-direction: column;
        }

        input {
          margin-bottom: 10px;
          padding: 10px;
          border-radius: 8px;
          border: 1px solid #ccc;
        }

        button {
          background-color: #0070f3;
          color: white;
          padding: 10px;
          border: none;
          border-radius: 8px;
          cursor: pointer;
        }

        button:hover {
          background-color: #005bb5;
        }
      `}</style>
    </div>
  );
}
