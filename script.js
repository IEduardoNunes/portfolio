document.querySelector('.eduardoTag').innerText = '<eduardo>';
document.querySelector('.final').innerText = '</eduardo>';
const imgMode = document.querySelector('#changeMode');
const changeMode = document.querySelector('.darkMode');
changeMode.addEventListener('click', darkMode);
const ul = document.querySelector('header nav ul');
const menu = document.querySelector('#menuIcon');
menu.addEventListener('click', openMenu);
function darkMode() {
  if (changeMode.style.flexDirection == 'row-reverse') {
    changeMode.style.flexDirection = 'row';
    changeMode.style.paddingLeft = '5px';
    changeMode.style.paddingRight = '0';
    imgMode.setAttribute('src', 'images/light-mode.png')
    changeMode.setAttribute('title', 'Alterar para modo noturno');
   }else {
    changeMode.style.flexDirection = 'row-reverse';
    changeMode.style.paddingLeft = '0';
    changeMode.style.paddingRight = '5px';
    imgMode.setAttribute('src', 'images/dark-mode.png')
    changeMode.setAttribute('title', 'Alterar para modo claro');
    imgMode.style.color = '#fff';
   }
  const body = document.querySelector('body');
   if(body.classList.contains('light')) {
     body.classList.replace('light', 'dark');
   }else {
     body.classList.replace('dark', 'light');
   }
}

const buttonAboutMe = document.querySelector('#buttonAboutMe');
const buttonProjects = document.querySelector('#buttonProjects');
const buttonContacts = document.querySelector('#buttonContacts');
const html = document.querySelector('html');

buttonAboutMe.addEventListener('click', scrollAboutMe);
buttonProjects.addEventListener('click', scrollProjects);
buttonContacts.addEventListener('click', scrollContacts);

function scrollAboutMe() {
  html.scrollTo({
    top: 623.3043212890625, 
    left:0,
    behavior:'smooth'
  });
  if (window.matchMedia("(min-width:319px) and (max-width:769px)").matches) {
    ul.style.display = 'none';
  }
}

function scrollProjects() {
  if (window.matchMedia("(min-width:770px)").matches) {
    html.scrollTo({
      top: 1257.04345703125, 
      left:0,
      behavior:'smooth'
    });
    ul.style.display = 'flex';
  } else if (window.matchMedia("(min-width:427px) and (max-width:769px)").matches) {
    html.scrollTo({
      top: 1131.8260498046875, 
      left:0,
      behavior:'smooth'
    });
    ul.style.display = 'none';
  }else if (window.matchMedia("(min-width:319px) and (max-width:426px)").matches) {
    html.scrollTo({
      top: 1380, 
      left:0,
      behavior:'smooth'
    });
    ul.style.display = 'none';
  }
}

function scrollContacts() {
  html.scrollTo({
    top: 3131.826171875, 
    left:0,
    behavior:'smooth'
  });
  if (window.matchMedia("(min-width:319px) and (max-width:769px)").matches) {
    ul.style.display = 'none';
  }
}
function openMenu() {
  if (ul.style.display == 'flex') {
    ul.style.animationName = 'menuMobileReturn';
    ul.style.animationDuration = '.60s';
    ul.style.display = 'none'
  }else {
    ul.style.display = 'flex';
    ul.style.animationName = 'menuMobile';
    ul.style.animationDuration = '.60s';
  };
}