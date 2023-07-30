'use strict'

{
    const main = document.getElementById('main');
    const thumbnails = document.querySelectorAll('.thumb-img');
    
    thumbnails.forEach(function(thumbnail) {
        thumbnail.addEventListener('click', function() {
            let src = thumbnail.getAttribute('src');
            main.src = src;
        });
    });
}