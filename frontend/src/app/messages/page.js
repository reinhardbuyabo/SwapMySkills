// src/app/messages/Messages.js

'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Messages() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      setMessages([...messages, newMessage]);
      setNewMessage('');
    }
  };

  return (
    <div className="container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <Link href="/">SkillSwap</Link>
        </div>
        <ul className="nav-links">
          <li><Link href="/userpage">Home</Link></li>
          <li><Link href="/skills">Skills</Link></li>
          <li><Link href="/messages">Messages</Link></li>
          <li><Link href="/logout">Logout</Link></li>
        </ul>
      </nav>

      {/* Messages Section */}
      <section className="messages-section">
        <h2>Messages</h2>
        <div className="message-box">
          {messages.length > 0 ? (
            messages.map((msg, index) => (
              <div key={index} className="message">
                <p>{msg}</p>
              </div>
            ))
          ) : (
            <p className="no-messages">No messages yet.</p>
          )}
        </div>
        <div className="input-section">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your message here..."
          />
          <button onClick={handleSendMessage}>Send</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <p>&copy; 2024 SkillSwap | All Rights Reserved</p>
          <ul>
            <li><Link href="/privacy-policy">Privacy Policy</Link></li>
            <li><Link href="/terms-of-service">Terms of Service</Link></li>
          </ul>
        </div>
      </footer>

      <style jsx>{`
        .container {
          font-family: 'Roboto', sans-serif;
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
        }

        /* Navbar */
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 15px 20px;
          background-color: #2c3e50;
          color: white;
          border-radius: 12px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .logo {
          font-size: 2rem;
          font-weight: bold;
          color: #ecf0f1;
        }

        .nav-links {
          list-style: none;
          display: flex;
          gap: 20px;
        }

        .nav-links li a {
          color: #ecf0f1;
          font-size: 1.2rem;
          text-decoration: none;
          padding: 8px 15px;
          border-radius: 5px;
          transition: background-color 0.3s ease-in-out;
        }

        .nav-links li a:hover {
          background-color: #3498db;
        }

        /* Messages Section */
        .messages-section {
          padding: 40px 20px;
          margin-top: 40px;
          border-radius: 12px;
        }

        .messages-section h2 {
          font-size: 2.5rem;
          color: #2c3e50;
          margin-bottom: 20px;
          font-weight: 600;
        }

        .message-box {
          margin-bottom: 20px;
          border: 1px solid #ccc;
          border-radius: 8px;
          padding: 20px;
          background-color: #f8f9fa;
          max-height: 300px;
          overflow-y: auto;
        }

        .message {
          background-color: #3498db;
          color: white;
          padding: 12px;
          margin-bottom: 10px;
          border-radius: 5px;
          font-size: 1.2rem;
        }

        .no-messages {
          font-size: 1.2rem;
          color: #7f8c8d;
          text-align: center;
        }

        .input-section {
          display: flex;
          gap: 10px;
          align-items: center;
        }

        input {
          flex: 1;
          padding: 12px;
          border-radius: 5px;
          border: 1px solid #ccc;
          font-size: 1.2rem;
        }

        button {
          padding: 12px 18px;
          background-color: #2c3e50;
          color: white;
          border: none;
          border-radius: 5px;
          font-size: 1.1rem;
          cursor: pointer;
          transition: background-color 0.3s;
        }

        button:hover {
          background-color: #34495e;
        }

        /* Footer */
        .footer {
          background-color: #2c3e50;
          color: white;
          padding: 20px;
          margin-top: 60px;
          border-radius: 12px;
        }

        .footer-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
        }

        .footer-container ul {
          list-style: none;
          display: flex;
          gap: 20px;
        }

        .footer-container li a {
          color: white;
          text-decoration: none;
        }

        .footer-container li a:hover {
          text-decoration: underline;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .navbar {
            flex-direction: column;
            align-items: flex-start;
            gap: 15px;
          }

          .footer-container {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
}
