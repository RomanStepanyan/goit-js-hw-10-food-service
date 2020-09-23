import menuTemplate from '../templates/menu-item.hbs';
import menuJson from './menu.json';
// console.log(menuTemplate);

const markup = menuTemplate(menuJson)
// console.log(markup);
const ulJsMenuRef = document.querySelector('.js-menu')
ulJsMenuRef.insertAdjacentHTML('beforeend', markup)



const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

const bodyRef = document.querySelector('body');
bodyRef.classList.add(Theme.LIGHT)

const switchToggleRef = document.querySelector('.theme-switch__toggle');
console.log(switchToggleRef);
switchToggleRef.addEventListener('change', event =>{
    console.log(event);
    localStorage.clear();
    if (bodyRef.classList.contains(Theme.LIGHT)){
        bodyRef.classList.remove(Theme.LIGHT);
        bodyRef.classList.add(Theme.DARK);

        localStorage.setItem('them', JSON.stringify(Theme.DARK))
    }
    else if (bodyRef.classList.contains(Theme.DARK)){
        bodyRef.classList.remove(Theme.DARK);
        bodyRef.classList.add(Theme.LIGHT)
        localStorage.setItem('them', JSON.stringify(Theme.LIGHT))
    }
    

})
