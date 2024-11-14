'use client';

import Link from 'next/link';

export default function Profile() {
  return (
    <div className="container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <Link href="/">SkillSwap</Link>
        </div>
        <ul className="nav-links">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/profile">Profile</Link></li>
          <li><Link href="/skills">Skills</Link></li>
          <li><Link href="/messages">Messages</Link></li>
          <li><Link href="/logout">Log Out</Link></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <div className="hero-content">
          <h1>Welcome to Your Profile</h1>
          <p>Manage your skills, connections, and preferences here.</p>
        </div>
      </header>

      {/* User Info Section */}
      <section className="user-info">
        <div className="section-container">
          <h2>Your Information</h2>
          <p>
            Here you can update your personal details, view your skill swaps, and more.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills-section">
        <div className="section-container">
          <h2>Your Skills</h2>
          <p>Manage the skills you are offering and the skills you're looking to learn.</p>
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

        /* Hero Section */
        .hero {
          background: url('/hero-bg.jpg') no-repeat center center/cover;
          color: white;
          padding: 60px 20px;
          border-radius: 12px;
          margin-bottom: 40px;
          text-align: center;
          box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);
        }

        .hero-content {
          max-width: 800px;
          margin: 0 auto;
        }

        .hero h1 {
          font-size: 3rem;
          margin-bottom: 20px;
          font-weight: 700;
        }

        .hero p {
          font-size: 1.2rem;
          margin-bottom: 20px;
          line-height: 1.6;
        }

        /* Section Container */
        .section-container {
          background-color: rgba(255, 255, 255, 0.5);
          padding: 40px;
          border-radius: 12px;
          margin-bottom: 40px;
          box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
          text-align: center;
        }

        .section-container h2 {
          font-size: 2.5rem;
          color: #2c3e50;
          margin-bottom: 20px;
          font-weight: 600;
        }

        .overview p {
          font-size: 1.1rem;
          color: #7f8c8d;
          line-height: 1.7;
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

          .hero h1 {
            font-size: 2rem;
          }

          .skills-grid {
            grid-template-columns: 1fr;
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
