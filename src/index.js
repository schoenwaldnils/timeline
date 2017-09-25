import { forEach } from 'lodash';
import SweetScroll from 'sweet-scroll';

const headerLink = document.querySelector('.Header-link--persons');
const personsList = document.querySelector('.Header-subNav');
const submenuLinks = document.querySelectorAll('.Header-subLink');

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

  const sweetScrollOptions = {
    trigger: '[data-scroll]',       // Selector for trigger (must be a valid css selector)
    duration: 1000,                 // Specifies animation duration in integer
    verticalScroll: true,           // Enable the vertical scroll
    horizontalScroll: true,        // Enable the horizontal scroll
    outputLog: true,               // Specify level of output to log
    afterScroll: human.focus(),
  };

  SweetScroll(sweetScrollOptions, '#timeline');

  // human.focus();
};

forEach(submenuLinks, (link) => {
  link.setAttribute('href', `#${link.getAttribute('data-name')}`);
  link.addEventListener('click', (event) => {
    disableSubmenu(personsList);
    focusPerson(link, event);
  });
});
