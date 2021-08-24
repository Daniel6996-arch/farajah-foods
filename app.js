
var menu = document.getElementById('menu');
const menuList = menu.classList;
var dealsPage = document.querySelector('.art')
const art = dealsPage.classList;
var home = document.querySelector('.section2');
const homePage = home.classList;


var link = document.getElementById('our');
var deals = document.getElementById('dea');
var homeLink = document.getElementById('hom');

var links = document.querySelector('.section1');
var btn = document.getElementById('btn-menu');

let current = 0;

btn.addEventListener('click', function(){
    var hid = links.classList;
    hid.toggle('hidden')
});

link.addEventListener('click',function(){
    menuList.remove('hidden');
    art.add('hidden');
    homePage.add('hidden');
});
/*homeLink.addEventListener('click',function(){
   menuList.add('hidden');
    homePage.add('hidden');
    art.add('hidden');
});*/ 
deals.addEventListener('click', function(){
    menuList.add('hidden');
    homePage.add('hidden');
    art.remove('hidden');
});
window.addEventListener('DOMContentLoaded', function(){
    menuList.add('hidden');
    homePage.remove('hidden');
    art.add('hidden');
});



