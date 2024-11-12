// src/app/logout/logout.js

'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Logout() {
  const router = useRouter();

  useEffect(() => {
    // Clear user data (example: clearing tokens or session data from local storage)
    localStorage.removeItem('authToken'); // Adjust based on your auth key
    sessionStorage.removeItem('userSession'); // Adjust based on your session key

    // Redirect to homepage after logout
    router.replace('/');
  }, [router]);

  return (
    <div className="logout-page">
      <h2>Logging Out...</h2>
      <p>Please wait while we log you out.</p>

      <style jsx>{`
        .logout-page {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100vh;
          text-align: center;
          font-family: 'Roboto', sans-serif;
        }

        h2 {
          font-size: 2rem;
          color: #2c3e50;
        }

        p {
          font-size: 1.2rem;
          color: #7f8c8d;
        }
      `}</style>
    </div>
  );
}
