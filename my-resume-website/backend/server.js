const express = require('express');
const cors = require('cors');
const cors = require('cors');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(bodyParser.json());



app.post('/api/subscribe', (req, res) => {
    const email = req.body.email;
    // For demonstration, we'll log the email to the console
        console.log('Received email:', email);

    res.status(200).send({ message: 'Subscription successful' });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
