var express = require('express');
var router = express.Router();
fs = require('fs')
const spawn = require('child_process').spawn;

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('anchorPoint', {
        backgroundVideo: '../assets/videos/front_boat_stats.mp4',
        leftIconId: 'water_theme',
        rightIconId: 'land_theme',
        centerIconId: 'adi_people',
        anchorPointJS: 'js/anchorPoint.js',
    });
});

router.get('/adi_people', function(req, res, next) {
    res.render('anchorPoint', {
        backgroundVideo: '../assets/videos/adi_people.mp4',
        leftIconId: 'water_theme',
        rightIconId: 'land_theme',
        centerIconId: 'adi_people',
        anchorPointJS: 'js/adiPeople.js',
    });
});

router.get('/final_boat', function(req, res, next) {
    res.render('finalBoat', {
        backgroundVideo: '../assets/videos/anchor_two_stats.mp4',
        leftIconId: 'water_theme',
        rightIconId: 'land_theme',
        centerIconId: 'single_man',
        anchorPointJS: 'js/finalBoat.js',
    });
});

router.get('/final_man', function(req, res, next) {
    res.render('finalBoat', {
        backgroundVideo: '../assets/videos/single_man.mp4',
        leftIconId: 'water_theme',
        rightIconId: 'land_theme',
        centerIconId: 'single_man',
        anchorPointJS: 'js/singleMan.js',
    });
});

router.get('/water_theme', function(req, res, next) {
    fs.readFile('views/resourceObjects/imageObject.json', 'utf8',
        function (err, data) {
            if (err) {
                return console.log(err);
            }

            arr = [];

            json = JSON.parse(data);
            json = json.water_theme.images;

            Object.keys(json).forEach(function(key) {
                arr.push(json[key]);
            });

            res.render('water_theme', {
                backgroundVideo: '../assets/videos/boat_front.mp4',
                galleryMapVideo: '../assets/videos/water/map.mp4',
                galleryTitle: 'Water is our lifeline.',
                imageArr: arr,
                galleryJS: 'js/water_gallery.js',
            });
    });
});

router.get('/land_theme', function(req, res, next) {
    fs.readFile('views/resourceObjects/imageObject.json', 'utf8',
        function (err, data) {
            if (err) {
                return console.log(err);
            }

            arr = [];

            json = JSON.parse(data);
            json = json.land_theme.images;

            Object.keys(json).forEach(function(key) {
                arr.push(json[key]);
            });

            res.render('land_theme', {
                backgroundVideo: '../assets/videos/boat_front.mp4',
                galleryMapVideo: '../assets/videos/land/map.mp4',
                galleryTitle: 'Land is our heritage.',
                imageArr: arr,
                galleryJS: 'js/land_gallery.js',
            });
    });
});

module.exports = router;
