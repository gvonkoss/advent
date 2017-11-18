const express = require('express');
const exphbs = require('express-handlebars');
const app = express();

const handlebars = exphbs.create({
	extname: '.html',
	defaultLayout: 'main'
});

app.engine('html', handlebars.engine);
app.set('view engine', '.html');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('home', require('./lib/calendar'))
});

app.listen(3000, () => console.log('list-ening'))
