const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Medium = require('./models/Medium');
const app = express();
const PORT = 3000;

mongoose.connect('mongodb://127.0.0.1:27017/medium')
.then(() => {console.log("DB Connected")})
.catch((err) => {console.log(err)});

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

app.listen(PORT, function() {
  console.log("Server is listening on port", PORT);
});

app.get('/', (req, res) => {
  Medium.find({})
  .then((data) => {
    res.render('index', {arr: data});
  })
  .catch((err) => console.log(err));
})

app.get('/articles/new', (req, res) => {
  res.render('add');
})

app.post(`/articles/new`, (req, res) => {
  const title = req.body.title;
  const article = new Medium({
    title: req.body.title,
    description: req.body.desc,
    markdown: req.body.markdown
  });

  article.save();
  res.redirect('/');
})

app.get('/articles/edit', (req, res) => {
  console.log(req.body);
  res.send("Edit Page");
})

app.delete('/', (req, res) => {
  let arTitle = document.querySelector('.title').innerText;
  Medium.deleteOne({title: arTitle});
});