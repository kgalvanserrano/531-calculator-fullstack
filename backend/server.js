// backend/server.js
const express = require('express');
const cors = require('cors'); // to handle CORS issues

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// middleware
app.use(cors()); // enable CORS for all routes

// routes
app.get('/', (req, res) => {
  res.send('Hello from the 5/3/1 Calculator backend.');
});

// New endpoint to handle calculator logic
app.post('/api/calculate', (req, res) => {
  try {
    const { lifts } = req.body;
    if (!lifts) {
      throw new Error('No lifts data provided');
    }

    // Perform your 5/3/1 Calculator logic
    const calculatedData = calculate531(lifts);

    res.json({ message: 'Calculation completed', calculatedData }); // changed from res.json({ message: 'Calculation completed', lifts });
  } catch (error) {
    console.error('Error in /api/calculate:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

const calculate531 = lifts => {
  const results = {};

  // 5/3/1 Calculator Logic
  for (const lift in lifts) {
    if (lifts.hasOwnProperty(lift)) {
      const trainingMax = lifts[lift] * 0.9;
      const week1 = trainingMax * 0.65;
      const week2 = trainingMax * 0.75;
      const week3 = trainingMax * 0.85;

      results[lift] = {
        trainingMax,
        week1,
        week2,
        week3,
      };
    }
  }

  return results;
};

// Corrected the template literal
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
