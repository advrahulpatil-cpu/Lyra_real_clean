const express = require("express");
const axios = require("axios");
const app = express();
app.use(express.json());

app.post("/", async (req, res) => {
  try {
    const response = await axios.post("https://api.delta.exchange/v2/orders/webhook", req.body, {
      headers: {
        "api-key": "d7c6e4b1-9e4d-4b3d-8f2f-1a2c3e4f5b6a",
        "api-secret": "a9f8e7d6-c5b4-3a2f-1e0d-9c8b7a6f5e4d"
      }
    });
    res.status(200).send("Forwarded to Delta Exchange");
  } catch (error) {
    res.status(500).send("Error forwarding to Delta Exchange");
  }
});

app.listen(3000, () => {
  console.log("🚀 Relay server running on port 3000");
});
