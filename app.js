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
  res.render('home', calendar)
});

app.get('/:day', (req, res) => {
  res.render('day', calendar.days[req.params.day - 1]);
})

app.listen(3000, () => console.log('list-ening'))
