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

const middleware = (req, res, next) => {
    console.log(`This is middleware`);
    next();
}

app.get('/', (req, res) => {
    res.send(`Hello, Welcome to Home Page`);
});

app.get('/about',middleware, (req, res) => {
    res.send(`Hello, Welcome to About Page`);
});

app.get('/contact', (req, res) => {
    res.send(`Hello, Welcome to Contact Page`);
});

app.get('/signin', (req, res) => {
    res.send(`Hello, Welcome to Login Page`);
});

app.get('/signup', (req, res) => {
    res.send(`Hello, Welcome to Registration Page`);
});

app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
})