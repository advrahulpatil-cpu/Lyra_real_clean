.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Lyra Relay is running!');
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
