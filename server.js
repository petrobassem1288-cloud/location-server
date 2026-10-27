const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());

// ده اللي بيخلي الصفحة بتاعتك تظهر لما تفتح الرابط
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/save-location', (req, res) => {
    const { latitude, longitude } = req.body;
    console.log(`Received Location -> Latitude: ${latitude}, Longitude: ${longitude}`);
    res.status(200).json({ status: 'success' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
