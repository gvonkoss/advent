const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const calendar = require('./lib/calendar');
const helpers = require('./lib/helpers');

const handlebars = exphbs.create({
	extname: '.html',
	defaultLayout: 'main',
  helpers: {
    json: helpers.json
  }
});

app.engine('html', handlebars.engine);
app.set('view engine', '.html');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('intro', {intro: calendar.intro})
});

app.get('/calendar', (req, res) => {
  res.render('home', calendar)
});

app.get('/calendar/:day', (req, res) => {
  let date = calendar.days[req.params.day - 1]
  date.opened = true;
  res.render('day', date);
});

app.listen(3000, () => console.log('list-ening'))
