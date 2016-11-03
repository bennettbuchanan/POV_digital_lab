console.log("hello from land");

var thumbnails = [];
for (var i = 0; i < 5; ++i) {
    thumbnails[i] = document.getElementById("thumbnail" + i.toString());
}

thumbnails[0].addEventListener("click", function( event ) {
    var player = document.getElementById('galleryVideo');
    var mp4Vid = document.getElementById('galleryVideoSource');
    player.pause();
    mp4Vid.src = "../assets/videos/land/video1.mp4";
    player.load();
    player.play();
});

thumbnails[1].addEventListener("click", function( event ) {
    var player = document.getElementById('galleryVideo');
    var mp4Vid = document.getElementById('galleryVideoSource');
    player.pause();
    mp4Vid.src = "../assets/videos/land/video2.mp4";
    player.load();
    player.play();
});

thumbnails[2].addEventListener("click", function( event ) {
    var player = document.getElementById('galleryVideo');
    var mp4Vid = document.getElementById('galleryVideoSource');
    player.pause();
    mp4Vid.src = "../assets/videos/land/video3.mp4";
    player.load();
    player.play();
});

thumbnails[3].addEventListener("click", function( event ) {
    var player = document.getElementById('galleryVideo');
    var mp4Vid = document.getElementById('galleryVideoSource');
    player.pause();
    mp4Vid.src = "../assets/videos/land/video4.mp4";
    player.load();
    player.play();
});

thumbnails[4].addEventListener("click", function( event ) {
    var player = document.getElementById('galleryVideo');
    var mp4Vid = document.getElementById('galleryVideoSource');
    player.pause();
    mp4Vid.src = "../assets/videos/land/map.mp4";
    player.load();
    player.play();
});
