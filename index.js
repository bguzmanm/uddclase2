const express = require("express");

const productRouter = require('./routes/productRouter');

require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;
const url_base = process.env.URL_BASE || '/api';

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(url_base + "/product", productRouter);
// app.use(url_base + "/client", clientRouter);
// app.use(url_base + "/employee", clientEmployee);

app.listen(port, () => {
  console.log(`Listen in port ${port}`);
});