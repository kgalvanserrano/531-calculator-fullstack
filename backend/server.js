// backend/server.js
const express =  require('express');
const cors = require('cors'); // to handle CORS issues

const app = express();
const PORT = process.env.Port || 5500; // using port 5000

// middleware
app.use(cors()); // enable CORS for all routes

// routes
app.get('/', (req, res) => {
    res.send('Hello from the 5/3/1 Calculator backend.');
});

// start server
app.listen(PORT, () => {
    console.log('Server is running on port ${PORT}');
});