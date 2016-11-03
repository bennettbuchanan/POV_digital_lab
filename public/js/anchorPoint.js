var el = document.getElementById("wing_icons");
var mainTitle = document.getElementById("mainTitle");
el.style.opacity = 0;
mainTitle.style.opacity = 1;


var arrows = document.getElementById("arrows");
arrows.style.opacity = 0;

function fadeIn(el) {
    var tick = function() {
        el.style.opacity = +el.style.opacity + 0.01;
        if (+el.style.opacity < 1) {
            (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16)
        }
    };
    tick();
}

function fadeOut(el) {
    var tick = function() {
        el.style.opacity = + el.style.opacity - 0.01;
        if (+el.style.opacity < 1) {
            (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16)
        }
    };
    tick();
}

setTimeout(function () {
    fadeIn(el);
}, 3000);

setTimeout(function () {
    fadeOut(mainTitle);
}, 2000);

var leftIcon = document.getElementById("water_theme");
var landIcon = document.getElementById("land_theme");
var centerIcon = document.getElementById("adi_people");

leftIcon.addEventListener("click", function( event ) {
    window.location.href = "/water_theme";
});

landIcon.addEventListener("click", function( event ) {
    window.location.href = "/land_theme";
});

centerIcon.addEventListener("click", function( event ) {
    window.location.href = "/adi_people";
});
