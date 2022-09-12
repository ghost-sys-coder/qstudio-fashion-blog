const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 4000;

app.set('view engine', 'ejs');
app.use(express.static('public'));
const heading = 'Welcome to the most Tech Blog Out there...'
app.get('/', (req, res) => {
    res.render('index.ejs', {heading: heading});
}).listen(port, () => {
    console.log(`The Server is running on port : ${port}...`);
})