let search = document.querySelector('.search-box');

document.querySelector(' #search-icon').onclick = () =>{

    search.classList.toggle('active');
    navbar.classList.remove('active');

}

let header = document.querySelector('header');
window.addEventListener('scroll' , ()=>{


  header.classList.toggle('shadow', scrollY > 0 )
  search.classList.remove('active');
  navbar.classList.remove('active');
  menuIcon.classList.remove('fa-times')



})

let navbar = document.querySelector('.navbar');
let menuIcon = document.querySelector('#menu-icon');
document.querySelector('#menu-icon').onclick =()=>{


    navbar.classList.toggle('active');
    menuIcon.classList.toggle('fa-times')
    search.classList.remove('active');

}
