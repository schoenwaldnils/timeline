import { forEach } from 'lodash';

const headerLink = document.querySelector('.Header-link--persons');
const personsList = document.querySelector('.Header-subNav');
// const personsLinks = document.querySelectorAll('.Header-subLink');

headerLink.addEventListener('click', (event) => {
  event.preventDefault();
  personsList.classList.toggle('is-active');
});

// forEach(personsLinks, function(personsLink, key) {
//   personsLink.addEventListener('click', (event) => {
//     event.preventDefault();
//     console.log('click');
//     const name = personsLink.getAttribute('data-name');
//     const human = document.querySelector(`.Human--${name}`);
//     // FIXME: remove class from all humans
//     // forEach(personsLinks, function(personsLink, key) {
//     //   console.log('remove');
//     // });
//     human.classList.add('is-active');
//   });
// });
