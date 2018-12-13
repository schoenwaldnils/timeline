import { SCALE_YEARS_BEFORE_ZERO } from '../data/defaults';

export default (event) => {
  const {
    __typename,
    year,
  } = event;

  return {
    ...event,
    type: __typename.toLowerCase(),
    pixelYear: year + SCALE_YEARS_BEFORE_ZERO + 1, // +1px to make place for the red line
  };
};

