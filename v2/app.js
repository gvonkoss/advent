// express middleware lives here
const express = require('express')
const nunjucks = require('nunjucks');
const app = express();
const port = 8080;

nunjucks.configure('views', {
  autoescape: true,
  express: app
});

app.get('/', function (req, res) {
  res.render('index.html', {username: 'GABI'});
});

app.get('/days/:dayNumber', function (req, res) {
  const { dayNumber } = req.params;
  res.render('days.html', { dayNumber: dayNumber });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
