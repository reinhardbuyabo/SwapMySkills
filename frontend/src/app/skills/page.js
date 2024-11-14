'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Skills() {
  const [skills, setSkills] = useState({
    currentSkills: ['JavaScript', 'React', 'CSS'],
    swappedSkills: ['Python', 'Machine Learning'],
    exploreMore: ['TypeScript', 'Node.js', 'Data Science', 'UI/UX Design'],
  });

  return (
    <div className="container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <Link href="/">SkillSwap</Link>
        </div>
        <ul className="nav-links">
          <li><Link href="/userpage">User Page</Link></li>
          <li><Link href="/profile">Profile</Link></li>
        </ul>
      </nav>

      {/* Skills Section */}
      <section className="skills">
        <h2>Skills</h2>

        {/* Current Skills Container */}
        <div className="skills-container">
          <h3>Current Skills</h3>
          <div className="skills-cards">
            {skills.currentSkills.map((skill, index) => (
              <div key={index} className="skill-card">
                <p>{skill}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Swapped Skills Container */}
        <div className="skills-container">
          <h3>Swapped Skills</h3>
          <div className="skills-cards">
            {skills.swappedSkills.map((skill, index) => (
              <div key={index} className="skill-card swapped">
                <p>{skill}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Explore More Skills Container */}
        <div className="skills-container">
          <h3>Explore More Skills</h3>
          <div className="skills-cards">
            {skills.exploreMore.map((skill, index) => (
              <div key={index} className="skill-card explore">
                <p>{skill}</p>
                <button className="cta">Add</button>
              </div>
            ))}
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

        /* Skills Section */
        .skills {
          padding: 40px 20px;
          margin-top: 40px;
          border-radius: 12px;
        }

        .skills h2 {
          font-size: 2.5rem;
          color: #2c3e50;
          margin-bottom: 20px;
          font-weight: 600;
        }

        .skills-container {
          background-color: #f4f4f4;
          padding: 20px;
          margin-top: 20px;
          border-radius: 12px;
          box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
        }

        .skills-container h3 {
          font-size: 1.8rem;
          color: #2c3e50;
          margin-bottom: 10px;
          font-weight: 500;
        }

        .skills-cards {
          display: flex;
          flex-wrap: wrap;
          gap: 15px;
        }

        .skill-card {
          background-color: #ecf0f1;
          padding: 15px;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          text-align: center;
          width: 150px;
          position: relative;
        }

        .skill-card p {
          font-size: 1.2rem;
          color: #34495e;
          margin-bottom: 5px;
        }

        .skill-card.swapped {
          background-color: #f39c12;
        }

        .skill-card.explore {
          background-color: #95a5a6;
        }

        .cta {
          background-color: #3498db;
          color: white;
          padding: 8px 15px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          font-size: 0.9rem;
          position: absolute;
          bottom: 10px;
          left: 50%;
          transform: translateX(-50%);
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

          .skills h2 {
            font-size: 2rem;
          }

          .skills-cards {
            justify-content: center;
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
