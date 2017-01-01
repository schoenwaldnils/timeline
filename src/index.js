import { forEach } from 'lodash';

const headerLink = document.querySelector('.Header-link--persons');
const personsList = document.querySelector('.Header-subNav');
const personsLinks = document.querySelectorAll('.Header-subLink');

headerLink.addEventListener('click', (event) => {
  event.preventDefault();
  personsList.classList.toggle('is-active');
});

const disableSubmenu = (menu) => {
  menu.classList.remove('is-active');
};

const focusPerson = (link, event) => {
  event.preventDefault();
  const name = link.getAttribute('data-name');
  const human = document.querySelector(`.Human--${name}`);
  human.focus();
};

forEach(personsLinks, (personsLink) => {
  personsLink.addEventListener('click', (event) => {
    disableSubmenu(personsList);
    focusPerson(personsLink, event);
  });
});
