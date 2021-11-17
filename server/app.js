const express = require('express');
const app = express();

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

app.listen(3000, () => {
    console.log(`Server is running`);
})