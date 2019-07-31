function timeperiod(startyear, endyear) {
  let calcedPeriod = endyear - startyear;
  if (startyear < 0 && endyear > 0) {
    calcedPeriod -= 1;
  }
  return calcedPeriod;
}

function htmlEntities(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function ourTime(year) {
  if (year <= 0) {
    return year * -1;
  }
  return year;
}

module.exports = {
  timeperiod,
  htmlEntities,
  ourTime,
};
