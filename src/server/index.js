
const express = require('express');
var bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());


// Routes
app.get('/api/hello', (req, res) => {
    res.send('Hello ksljhlahj!')
});

app.get('api/protected', (req, res) => {

});

app.post('/api/signup', (req, res) => {

});

app.post('/api/login',  (req, res) => {
    const username = req.body.username;
    res.send(username);
});

// Init
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})