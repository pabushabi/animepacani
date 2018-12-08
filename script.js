'use strict';

let pathDrawing = anime({
    targets: '#lineDrawing .paths polyline',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 3000,
    delay: function (el, i) {
        return i * 250
    },
    direction: 'alternate',
    loop: true
});
let poly = anime({
    targets: '#lineDrawing .paths path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 3000,
    delay: function (el, i) {
        return i * 250
    },
    direction: 'alternate',
    loop: true
});
let ellipse = anime({
    targets: '#lineDrawing .paths ellipse',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 3000,
    delay: function (el, i) {
        return i * 250
    },
    direction: 'alternate',
    loop: true
});

let line = anime({
    targets: '#lineDrawing .paths line',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 3000,
    delay: function (el, i) {
        return i * 250
    },
    direction: 'alternate',
    loop: true
});
