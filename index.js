// Create a basic Express server that returns "Hello, world!" at /api/hello
const express = require('express');
const app = express();

app.get('/api/hello', (req, res) => {
  res.send('Hello, world!');
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

// Add a /api/time route that returns current server time
app.get('/api/time', (req, res) => {
  const currentTime = new Date().toISOString();
  res.send(`Current server time is: ${currentTime}`);
});

//Create a route that returns a random number
app.get('/api/random', (req, res) => {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  res.send(`Random number: ${randomNumber}`);
});

//Validate the request body for POST requests
app.post('/api/data', (req, res) => {
  const { name, age } = req.body;
  if (!name || !age) {
    return res.status(400).send('Invalid request');
  }
  res.send(`Received valid data: ${name}, ${age}`);
});
