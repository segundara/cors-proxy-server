const express = require('express');
const axios = require('axios');

const productRouter = express.Router();

const targetUrl = process.env.API_URL

productRouter.get('/:category', async (req, res) => {
    const category = req.params.category;
    const url = `${targetUrl}/products/${category}`;
    try {
        const output = await axios.get(url);
        console.log(output.data)
        res.status(200).send(output.data);
    } catch (error) {
        console.log(error)
    }
});

module.exports = productRouter;