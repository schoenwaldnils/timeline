export default function timeperiod(startyear, endyear) {
  console.log({ startyear, endyear });
  let calcedPeriod = endyear - startyear;
  if (startyear < 0 && endyear > 0) {
    calcedPeriod -= 1;
  }
  console.log(calcedPeriod);
  return calcedPeriod;
}
