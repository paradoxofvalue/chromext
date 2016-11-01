'use strict';

function parseCSS() {
    var parsedCSS = '',
        links = document.getElementsByTagName('link');
    for (var i = 0; i < links.length; i++) {
        var linkHref = links[i].getAttribute('href');
        if (name.indexOf(".css")) {
            var xhr = new XMLHttpRequest();
            try {
                xhr.open('GET', name);
                xhr.onload = function() {
                    document.head.innerHTML += '<style class="'+name+'">' + xhr.responseText + '</style>';
                };
                xhr.send();
            } catch (err) {

            }
        }
    }
    let scripts = document.querySelectorAll('style');
    for (let i = 0; i < scripts.length; i++) {
        parsedCSS += scripts[i].innerHTML;
    }
}

function setStyles(string) {
    document.head.innerHTML += '<style class="myInsertStyles">' + string + '</style>';
}

parseCSS();
