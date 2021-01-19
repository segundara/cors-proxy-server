const express = require('express');
const request = require('request');

const productRouter = express.Router();

const targetUrl = process.env.API_URL

productRouter.get('/:category', (req, res) => {
    const category = req.params.category;
    request(
        { url: `${targetUrl}/products/${category}` },
        (error, response, body) => {
            if (error || response.statusCode !== 200) {
                return res.status(500).json({ type: 'error', message: err.message });
            }
            res.json(JSON.parse(body));
        }
    )
});

module.exports = productRouter;