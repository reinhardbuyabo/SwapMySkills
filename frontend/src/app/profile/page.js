'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Profile() {
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    bio: '',
    skills: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic (save data, send to backend, etc.)
    console.log('User Details Updated:', userDetails);
  };

  return (
    <div className="container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <Link href="/">SkillSwap</Link>
        </div>
        <ul className="nav-links">
          <li><Link href="/userpage">User Page</Link></li>
          <li><Link href="/skills">Skills</Link></li>
        </ul>
      </nav>

      {/* Profile Section */}
      <section className="profile">
        <div className="section-container">
          <h2>Profile</h2>
          <form onSubmit={handleSubmit} className="profile-form">
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={userDetails.name}
                onChange={handleChange}
                placeholder="Enter your full name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={userDetails.email}
                onChange={handleChange}
                placeholder="Enter your email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="bio">Bio</label>
              <textarea
                id="bio"
                name="bio"
                value={userDetails.bio}
                onChange={handleChange}
                placeholder="Write a short bio"
              />
            </div>
            <div className="form-group">
              <label htmlFor="skills">Skills</label>
              <input
                type="text"
                id="skills"
                name="skills"
                value={userDetails.skills}
                onChange={handleChange}
                placeholder="Enter your skills"
              />
            </div>
            <button type="submit" className="cta">Save Changes</button>
          </form>
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

        /* Navbar Styles */
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px 20px;
          background-color: #2c3e50;
          color: white;
          border-radius: 12px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .logo {
          font-size: 1.8rem;
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
          text-decoration: none;
          padding: 8px 15px;
          border-radius: 5px;
          transition: background-color 0.3s ease-in-out;
        }

        .nav-links li a:hover {
          background-color: #3498db;
        }

        /* Profile Section */
        .profile {
          background: #f4f4f4;
          padding: 40px 20px;
          border-radius: 12px;
          margin-top: 40px;
          box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
        }

        .profile h2 {
          font-size: 2.5rem;
          color: #2c3e50;
          margin-bottom: 20px;
          font-weight: 600;
        }

        .profile-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
        }

        .form-group label {
          font-size: 1.2rem;
          margin-bottom: 5px;
          color: #2c3e50;
        }

        .form-group input,
        .form-group textarea {
          padding: 10px;
          font-size: 1rem;
          border: 1px solid #ccc;
          border-radius: 5px;
        }

        .form-group textarea {
          resize: vertical;
          min-height: 100px;
        }

        .cta {
          background-color: #3498db;
          color: white;
          padding: 12px 25px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .cta:hover {
          background-color: #2980b9;
        }

        /* Footer Styles */
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

        /* Responsive Styles */
        @media (max-width: 768px) {
          .navbar {
            flex-direction: column;
            align-items: flex-start;
            gap: 15px;
          }

          .profile h2 {
            font-size: 2rem;
          }

          .cta {
            width: 100%;
            margin: 10px 0;
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
