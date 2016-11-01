"use strict";

function deleteTrash() {
    let elements = document.querySelectorAll('*');

    for (let i = elements.length - 1; i >= 0; i--) {
        if (elements[i].hasAttribute('onclick')) {
            elem.removeAttribute('onclick');
        }
        switch (elements[i].tagName) {
            case "A":
                elements[i].setAttribute('href', '#');
                break;
            case "FORM": 
                if (elements[i].hasAttribute('action')) {
                    elements[i].removeAttribute('action');
                }
                break;                
            case "META":
                let isAllow = elements[i].hasAttribute('charset') || elements[i].getAttribute('name') == 'viewport' || elements[i].getAttribute('http-equiv') == 'content-type';
                if (!isAllow) elements[i].remove();
                break;
            case "SCRIPT":
            case "NOSCRIPT":
            case "IFRAME":
            case "LINK":
                if (!elements[i].hasAttribute('type') == "stylesheet") {
                    elements[i].remove();
                }
                break;
            case "IMG":
                elements[i].removeAttribute("srcset");
                break;
            default:
                break;
        }
    }
}


function setRobots() {
    let temp = document.head.innerHTML;
    document.head.innerHTML = '<meta name="robots" content="noindex,nofollow">' + temp;
}

function go() {
    var childNodes = document.html.childNodes;

    for (var i = 0; i < childNodes.length; i++) {
        childNodes[i]
    }
}

function getComments(d)
{
    if(!d)
        return;
    if(d.nodeType==8){
        d.remove();
        console.log("found a comment node " + d.data);
    }
    if(!d.childNodes)
        return;
    for(var i=0;i<d.childNodes.length;i++)
        getComments(d.childNodes[i]);
}


getComments(document);

deleteTrash();

setRobots();
