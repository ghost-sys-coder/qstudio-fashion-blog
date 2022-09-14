const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 4000;

app.set('view engine', 'ejs');
app.use(express.static('public'));
const heading = 'Welcome to the most Tech Blog Out there...'
app.get('/', (req, res) => {
    res.render('index.ejs', {
        documentTitle: 'Q.Studio Home Page',
        pageStyles: ''
    });
})



app.get('/blog', (req, res) => {
    res.render('blog.ejs', {
        documentTitle: 'Q.Studio - Blog page',
        pageStyles: '/css/pages.css',
        pageTitle: 'Blog',

    })
})

app.get('/podcasts', (req, res) => {
    res.render('podcasts.ejs', {
        documentTitle: 'Q.Studio - Podcasts',
        pageStyles: '/css/pages.css',
        pageTitle: 'Podcasts'
    })
})

app.get('/books', (req, res) => {
    res.render('books.ejs', {
        documentTitle: 'Q.Studio - Books Page',
        pageStyles: '/css/pages.css',
        pageTitle: 'Books',
    })
})

app.get('/about', (req, res) => {
    res.render('about.ejs', {
        documentTitle: 'Q.Studio - About Page',
        pageStyles: '/css/pages.css',
        pageTitle: 'About'
    })
})
app.listen(port, () => {
    console.log(`The Server is running on port : ${port}...`);
})