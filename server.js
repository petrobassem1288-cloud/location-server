const express = require('express');
const app = express();
app.use(express.json());

app.post('/save-location', (req, res) => {
    const { latitude, longitude } = req.body;
    console.log(`تم استلام الموقع! خط العرض: ${latitude}, خط الطول: ${longitude}`);
    res.status(200).send({ status: 'Success' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
