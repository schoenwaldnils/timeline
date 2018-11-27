export function formatVagueness(vagueness) {
  const [value] = vagueness.match(/[0-9]+/g);

  const valueInt = parseInt(value, 10);

  const result = {
    positiveValue: 0,
    negativeValue: 0,
  };

  if (vagueness.includes('+')) {
    result.positiveValue = valueInt;
  }

  if (vagueness.includes('-')) {
    result.negativeValue = valueInt;
  }

  return result;
}

export function calcPoints(type, year, vagueness) {
  if (!vagueness) {
    return year;
  }

  const { positiveValue, negativeValue } = formatVagueness(vagueness);
  let point;
  let certainPoint = year;

  if (type === 'start') {
    if (negativeValue) {
      point = year - negativeValue;
    }

    if (positiveValue) {
      certainPoint = year + positiveValue;
    }
  } else {
    if (negativeValue) {
      certainPoint = year - negativeValue;
    }

    if (positiveValue) {
      point = year + positiveValue;
    }
  }


  return { point, certainPoint };
}

function maxEnd(value) {
  if (value > 2200) {
    return 2200;
  }
  return value;
}

export function calcTimes({
  startYear,
  startVagueness,
  endYear,
  endVagueness,
  stillActive,
}) {
  let correctedEndYear = endYear;

  if (stillActive || !endYear) {
    correctedEndYear = new Date().getFullYear();
  }

  const points = {
    calcedStart: startYear,
    calcedEnd: correctedEndYear,
  };

  if (startVagueness) {
    const { point, certainPoint } = calcPoints('start', startYear, startVagueness);
    points.calcedStart = point;
    points.calcedStartCertain = certainPoint;
  }

  if (endVagueness) {
    const { point, certainPoint } = calcPoints('end', correctedEndYear, endVagueness);
    points.calcedEnd = maxEnd(point);
    points.calcedEndCertain = maxEnd(certainPoint);
  }

  return points;
}
