const moonDark = document.getElementById('body');
const moonIcon = document.getElementById('moon');

moonIcon.addEventListener('click', ()=>{
    moonDark.classList.toggle('moon-dark')
});

//=========HAMBURGUER===============

const hamburguer = document.querySelector('.hamburguer');
const nav = document.querySelector('ul');

hamburguer.addEventListener('click', ()=>{
    nav.classList.toggle('show')
});
