const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({path: './config.env'});
require('./db/conn');
//const Registration = require('./model/userschema');

app.use(express.json());
app.use(require('./router/auth'));

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
})