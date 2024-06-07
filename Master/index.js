let bg = document.getElementById('bg');
let moon = document.getElementById('moon');
let mountain = document.getElementById('mountain');
let road = document.getElementById('road');
let moonlight = document.getElementById('moonlight');
window.addEventListener('scroll', function(){
    var value = window.scrollY;

    bg.style.top = value * 0.5 + 'px';
    moon.style.left = - value * 0.5 + 'px';
    mountain.style.top = - value * 0.15 + 'px';
    road.style.top = value * 0.15 + 'px';
    moonlight.style.top = value * 1 + 'px';
});