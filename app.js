const menu = [
    {   id:1,
        name: "pancake",
        category: "breakfast",
        img:"images/review.jpg",
        price: "$15",
        text:
        "I am a junior developer working with Fintech Indutry Company. The services offered here are top class and necessary for one's future growth in tech industry."
    },
]    

var img =document.getElementById('img');
var price =document.getElementById('price');
var title =document.getElementById('title');


var links = document.querySelector('.section1');
var btn = document.getElementById('btn-menu');
var dynamic = document.querySelector('.section2')

let current = 0;

btn.addEventListener('click', function(){
    var hid=links.classList;
    hid.toggle('hidden')
});


window.addEventListener('DOMContentLoaded', function(){
    let item = menu[current]
    img.src = item.img
    title.textContent = item.name
    price.textContent = item.price
    });
    

