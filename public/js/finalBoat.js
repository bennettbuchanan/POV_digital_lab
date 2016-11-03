var el = document.getElementById("wing_icons");
var centerIcon = document.getElementById("single_man");
var mainTitle = document.getElementById("mainTitle");
el.style.opacity = 1;
mainTitle.style.opacity = 0;

centerIcon.addEventListener("click", function( event ) {
    window.location.href = "/final_man";
});
