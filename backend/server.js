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

// New endpoint to handle calculator logic
app.post('/api/calculate', (req, res) => {
    const { lifts } = req.body;
  
    // Perform your 5/3/1 Calculator logic here
    // For now, just return the received data
    res.json({ message: 'Calculation completed', lifts });
  });
  
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });