// src/app/login/page.js
'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function LoginPage() {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the login logic here, e.g., sending formData to your backend API
    console.log('Login data:', formData);
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
      <p>
        Don’t have an account? <Link href="/signup">Sign Up</Link>
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
