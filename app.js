const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const calendar = require('./lib/calendar');
const handlebars = exphbs.create({
	extname: '.html',
	defaultLayout: 'main'
});

app.engine('html', handlebars.engine);
app.set('view engine', '.html');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.redirect('/calendar');
});

app.get('/you-shall-not-pass', (req, res) => {
	res.render('not-day', calendar.nope);
})

app.get('/calendar', (req, res) => {
  res.render('home', calendar);
});

app.get('/calendar/:day', require('./src/js/check-date'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('list-ening'))
