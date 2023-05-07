let meny = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menubar.onclick = () =>{
    menubar.classlist.toggle('bx-x');
    navbar.classList.toggle('open');
}