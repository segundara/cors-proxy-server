const express = require('express');
const listEndpoints = require("express-list-endpoints");

const productRouter = require("./proxyRoutes/products")
const availabilityRouter = require("./proxyRoutes/availability")

const dotenv = require("dotenv");
dotenv.config();

const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

app.use("/products", productRouter)
app.use("/availability", availabilityRouter)

console.log(listEndpoints(app));
const PORT = process.env.PORT || 3123;
app.listen(PORT, () => console.log(`App listening on port: ${PORT}`));