import { currentlocale } from '../js/context/lang-context';
import translations from '../data/translations';

export default (id) => {
  const selectors = id.split('.');
  let string = translations;
  selectors.forEach((selector) => {
    string = string[selector];
  });

  return string[currentlocale()];
};
