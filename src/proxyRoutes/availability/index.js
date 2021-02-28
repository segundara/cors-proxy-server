const express = require('express');
const axios = require('axios');

const availabilityRouter = express.Router();

const targetUrl = process.env.API_URL

availabilityRouter.get('/:manufacturer', async (req, res) => {
    const manufacturer = req.params.manufacturer;
    const url = `${targetUrl}/availability/${manufacturer}`;
    try {
        const output = await axios.get(url);
        console.log(output.data)
        res.status(200).send(output.data);
    } catch (error) {
        console.log(error)
    }
});

module.exports = availabilityRouter;