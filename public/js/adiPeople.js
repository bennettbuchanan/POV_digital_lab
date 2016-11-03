var el = document.getElementById("wing_icons");
el.style.opacity = 0;

var title =  document.getElementById("mainTitle");
title.style.opacity = 0;

function fadeIn(el) {
    var tick = function() {
        el.style.opacity = +el.style.opacity + 0.01;
        if (+el.style.opacity < 1) {
            (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16)
        }
    };
    tick();
}

setTimeout(function () {
    fadeIn(title);
}, 18000);

title.addEventListener("click", function( event ) {
    window.location.href = "/final_boat";
});
