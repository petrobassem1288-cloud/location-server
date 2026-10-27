const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, '.')));

app.post('/save-location', (req, res) => {
    const { latitude, longitude } = req.body;
    console.log(`Received Location -> Latitude: ${latitude}, Longitude: ${longitude}`);
    res.status(200).json({ status: 'success' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
