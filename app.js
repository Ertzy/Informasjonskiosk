const express = require('express');
const app = express();
const mongoose = require('mongoose')
const mongodb = require('mongodb')
const path = require('path');
const mongo = "mongodb+srv://Ertzy:Henrik06@cluster0.e0jq60s.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(mongo)
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(__dirname + '/public'));


app.get('/', (req, res) =>{
    res.render('index'); // render index.ejs
})

app.get('/login', function(req, res) {
    res.render('login.ejs');
})

app.get('/index', function(req, res) {
    res.render('index.ejs');
})

app.get('/admin', function(req, res) {
    res.render('admin.ejs');
})

// redirect

app.get('/', (req, res) => {
    res.redirect('/index')
});

app.get('/login', (req, res) => {
   res.render('login', {title: 'Login'});
});

// 404 page
app.use((req, res) => {
    res.status(404).render('404', {title: '404'})
});

