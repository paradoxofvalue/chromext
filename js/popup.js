"use strict";

function deleteTrash() {
    var elements = document.querySelectorAll('*');

    for (var i = elements.length - 1; i >= 0; i--) {
        switch (elements[i].tagName) {
            case "A":
                elements[i].setAttribute('href', '#');
                break;
            case "META":
                var isAllow = elements[i].hasAttribute('charset') || elements[i].getAttribute('name') == 'viewport' || elements[i].getAttribute('http-equiv') == 'content-type';
                if (!isAllow) elements[i].remove();
                break;
            case "SCRIPT":
            case "NOSCRIPT":
            case "IFRAME":
            case "LINK"  :
                elements[i].remove();
                break;
            default:
                elements[i].removeAttribute("onclick");
                elements[i].removeAttribute("srcset");
                break;
        }
    }
}
function setRobots() {
	var temp = document.head.innerHTML;
	document.head.innerHTML = '<meta name="robots" content="noindex,nofollow">' + temp;
}
function parseCSS() {

    var parsedCSS = '',
        links = document.getElementsByTagName('link');

    for (var i = 0; i < links.length; i++) {

        var linkHref = links[i].getAttribute('href'),
            name = linkHref.split('?', 1);

        if (name.slice(-4) == '.css') {

            var xhr = new XMLHttpRequest();

            xhr.open('GET', linkHref);

            xhr.onload = function() { parsedCSS += xhr.responseText };

            xhr.send();

        }
    }
}
deleteTrash();
setRobots();