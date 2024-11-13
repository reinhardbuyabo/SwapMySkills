const express = require('express');
const { urlencoded } = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const sequelize = require('./config/db');
const { errorHandler } = require('./middleware/errorMiddleware');

// Load env vars
dotenv.config();

// App Instance
const app = express();

const port = process.env.SERVER_PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors());
app.use(urlencoded({ extended: true }))

// DB Config
sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

// API Endpoints
app.get('/', (req, res) => {
    res.send('Hello World!\n');
});

app.use('/api/v1/users', require('./routes/users'));

// Error Handler
app.use(errorHandler)

// Server
const server = app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

module.exports = server