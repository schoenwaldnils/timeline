export default function timeperiod(startyear, endyear) {
  let calcedPeriod = endyear - startyear;
  if (startyear < 0 && endyear > 0) {
    calcedPeriod -= 1;
  }
  return calcedPeriod;
}

export function htmlEntities(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
