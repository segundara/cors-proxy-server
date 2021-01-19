const express = require('express');
const request = require('request');

const availabilityRouter = express.Router();

const targetUrl = process.env.API_URL

availabilityRouter.get('/:manufacturer', (req, res) => {
    const manufacturer = req.params.manufacturer;
    request(
        { url: `${targetUrl}/availability/${manufacturer}` },
        (error, response, body) => {
            if (error || response.statusCode !== 200) {
                return res.status(500).json({ type: 'error', message: err.message });
            }
            res.json(JSON.parse(body));
        }
    )
});

module.exports = availabilityRouter;