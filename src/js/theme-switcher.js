
const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

const bodyRef = document.querySelector('body');

const switchToggleRef = document.querySelector('.theme-switch__toggle');
console.log(switchToggleRef);
switchToggleRef.addEventListener('change', event =>{
    if (bodyRef.classList.contains(Theme.LIGHT)){
        bodyRef.classList.remove(Theme.LIGHT);
        bodyRef.classList.add(Theme.DARK);
        localStorage.setItem('theme', Theme.DARK)
    }
    else if (bodyRef.classList.contains(Theme.DARK)){
        bodyRef.classList.remove(Theme.DARK);
        bodyRef.classList.add(Theme.LIGHT)
        localStorage.setItem('theme', Theme.LIGHT)
    }    
})

function reloadPageThemeCheaker () {
    if (localStorage.getItem('theme') === Theme.DARK){        
        bodyRef.classList.toggle(Theme.DARK);
        switchToggleRef.checked = true;
        // localStorage.setItem('theme', Theme.LIGHT);
    }else {
        bodyRef.classList.toggle(Theme.LIGHT)
        localStorage.setItem('theme', Theme.LIGHT)
        switchToggleRef.checked = false
    }
} 
reloadPageThemeCheaker ()
