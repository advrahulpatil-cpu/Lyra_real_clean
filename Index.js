const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.post('/relay', async (req, res) => {
  try {
    const { targetUrl, payload } = req.body;

    if (!targetUrl || !payload) {
      return res.status(400).json({ error: 'Missing targetUrl or payload' });
    }

    const response = await axios.post(targetUrl, payload);
    res.status(200).json({ status: 'success', data: response.data });
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
});

app.get('/', (req, res) => {
  res.send('Lyra Relay is live');
});

app.listen(PORT, () => {
  console.log(`Relay server running on port ${PORT}`);
});
