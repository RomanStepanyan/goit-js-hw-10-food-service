import menuTemplate from '../templates/menu-item.hbs';
import menuJson from './menu.json';

const markup = menuTemplate(menuJson)

const ulJsMenuRef = document.querySelector('.js-menu')
ulJsMenuRef.insertAdjacentHTML('beforeend', markup)




