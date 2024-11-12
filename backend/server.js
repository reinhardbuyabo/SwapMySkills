const express = require('express');

// App Instance
const app = express();

// App Config
// dotenv.config()
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());
// app.use(cors());
app.use(urlencoded({ extended: true }))

// DB Config

// API Endpoints
app.get('/', (req, res) => {
    res.send('Hello World!\n');
});

// Server
const server = app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

module.exports = server