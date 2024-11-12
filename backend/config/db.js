const { Pool } = require('pg');
const fs = require('fs');
require('dotenv').config();

// Function to create and return a pool connection
const createPool = () => {
    return new Pool({
        connectionString: process.env.DB_URL,  // Get connection string from .env
        ssl: {
            rejectUnauthorized: false,
            // ca: fs.readFileSync(process.env.CA_CERT_PATH).toString(),
        },
    });
};

// Function to test the database connection
const testConnection = async () => {
    const pool = createPool();
    try {
        const result = await pool.query('SELECT NOW()');
        console.log('Database connected:', result.rows);
    } catch (err) {
        console.error('Database connection error', err);
    } finally {
        pool.end();  // Close the pool after the query
    }
};

// Test the connection when the script is run
testConnection();

// Export the pool for use in other files
module.exports = createPool();