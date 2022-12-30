// $(document).ready(function(){

//     $('#menu-bar').click(function(){
//         $(this).toggleClass('fa-times');
//         $('.navbar').toggleClass('nav-toggle')
//     });
// });

const menuopen = document.querySelector('#open');
const menuclose = document.querySelector('#close');
const navbar = document.querySelector('.navbar');

menuopen.addEventListener('click', () => {
    navbar.style.display = "flex";
    menuclose.style.display = "inline-block";
    menuopen.style.display = "none";
})

menuclose.addEventListener('click', () => {
    navbar.style.display = "none";
    menuopen.style.display = "inline-block";
    menuclose.style.display = "none";
})


$('.menu .list .btn').click(function(){
    $(this).addClass('active').siblings().removeClass('active');

    let src = $(this).attr('data-src');

    $('#menu-img').attr('src', src);
})


// Theme toggle

const off = document.querySelector('#off');
const on = document.querySelector('#on');

off.addEventListener('click', () => {
    off.style.display = 'none';
    on.style.display = 'inline-block';
    document.body.classList.toggle('dark');
})

on.addEventListener('click', () => {
    on.style.display = 'none';
    off.style.display = 'inline-block';
    document.body.classList.remove('dark');
})