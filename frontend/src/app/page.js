// src/app/page.js
'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div className="container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <Link href="/">SkillSwap</Link>
        </div>
        <ul className="nav-links">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/signup">Sign Up</Link></li>
          <li><Link href="/login">Log In</Link></li>
          <li><Link href="/homeSkills">Skills</Link></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <div className="hero-content">
          <h1>Welcome to Skill Swap Community</h1>
          <p>Exchange your skills and learn from others in a vibrant community.</p>
          <div className="cta-buttons">
            <Link href="/signup"><button className="cta">Get Started</button></Link>
            <Link href="/login"><button className="cta">Log In</button></Link>
            <Link href="/skills"><button className="cta">Explore Skills</button></Link>
          </div>
        </div>
      </header>

      {/* How It Works Section */}
      <section className="overview">
        <div className="section-container">
          <h2>How it works</h2>
          <p>
            SkillSwap is an intuitive platform designed for individuals who wish to offer their skills and learn from others. Whether you are interested in coding, languages, or cooking, there's something for everyone.
          </p>
        </div>
      </section>

      {/* Popular Skills Section with Cards */}
      <section className="popular-skills">
        <div className="section-container">
          <h2>Popular Skills</h2>
          <div className="skills-grid">
            <div className="skill-card">
              <h3>Cooking</h3>
              <p>Learn to cook delicious meals from experienced chefs!</p>
              <Link href="/skills/cooking"><button className="cta">Explore</button></Link>
            </div>
            <div className="skill-card">
              <h3>Languages</h3>
              <p>Improve your fluency in various languages with native speakers.</p>
              <Link href="/skills/languages"><button className="cta">Explore</button></Link>
            </div>
            <div className="skill-card">
              <h3>Coding</h3>
              <p>Enhance your programming skills through hands-on experience.</p>
              <Link href="/skills/coding"><button className="cta">Explore</button></Link>
            </div>
            <div className="skill-card">
              <h3>Gardening</h3>
              <p>Get tips and guidance on how to grow your own garden.</p>
              <Link href="/skills/gardening"><button className="cta">Explore</button></Link>
            </div>
          </div>
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

        .cta-buttons button {
          background-color: #3498db;
          color: white;
          border: none;
          padding: 12px 25px;
          margin: 10px;
          cursor: pointer;
          border-radius: 5px;
          transition: background-color 0.3s ease;
        }

        .cta-buttons button:hover {
          background-color: #2980b9;
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

        /* Skills Grid Layout */
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 20px;
          margin-top: 20px;
        }

        .skill-card {
          background-color: white;
          padding: 20px;
          border-radius: 12px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          text-align: center;
          transition: box-shadow 0.3s ease-in-out;
        }

        .skill-card:hover {
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
        }

        .skill-card h3 {
          font-size: 1.8rem;
          color: #2c3e50;
          margin-bottom: 15px;
          font-weight: 600;
        }

        .skill-card p {
          color: #7f8c8d;
          font-size: 1.1rem;
          margin-bottom: 20px;
          line-height: 1.6;
        }

        .popular-skills a {
          text-decoration: none;
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

          .cta-buttons button {
            width: 100%;
            margin: 10px 0;
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
