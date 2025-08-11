const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(cors());

app.get('/api/weather', async (req, res) => {
  try {
    const response = await axios.get('https://api.open-meteo.com/v1/forecast?latitude=40.0&longitude=-3.7&hourly=temperature_2m,relative_humidity_2m,precipitation,pressure_msl');
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching weather data' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
