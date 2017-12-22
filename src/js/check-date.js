const calendarDay = require('../../lib/calendar').days;
const stringifyDate = (date) => {
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
};

module.exports = (req, res) => {
  let date = calendarDay[req.params.day - 1]

  let day = `12/${req.params.day}/2017`;
  let adventDay = new Date(day);
  let today = new Date();

  // if (stringifyDate(adventDay) === stringifyDate(today) ||
  //   today.getDate() > adventDay.getDate() || date.opened) {
  //   date.opened = true;
    res.render('day', date);
  // } else {
  //   res.redirect('/you-shall-not-pass');
  // }
};
