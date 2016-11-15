"use strict";

function deleteTrash() 
{
    
    // get all elements
    let elements = document.querySelectorAll('*');

    // check each element
    for (let i = elements.length - 1; i >= 0; i--) 
    {
        
        // remove "onclick"
        if (elements[i].hasAttribute('onclick')) {
            elements[i].removeAttribute('onclick');
        }
        
        // check by tag name
        switch (elements[i].tagName) 
        {
            // link
            case "A":
                elements[i].setAttribute('href', '#');
                break;
            // form
            case "FORM":
                if (elements[i].hasAttribute('action')) 
                {
                    elements[i].removeAttribute('action');
                }
                break;
            // meta
            case "META":
                let isAllow = elements[i].hasAttribute('charset') || elements[i].getAttribute('name') == 'viewport' || elements[i].getAttribute('http-equiv') == 'content-type';
                if (!isAllow) elements[i].remove();
                break;
            // all links, except style
            case "LINK":
                if (elements[i].getAttribute('rel') != "stylesheet") 
                {
                    elements[i].remove();
                }
                break;
            // scripts and iframe
            case "SCRIPT":
            case "NOSCRIPT":
            case "IFRAME":
                elements[i].remove();
                break;
            // img
            case "IMG":
                elements[i].removeAttribute("srcset");
                break;
            default:
                break;
        }
    }
    
    setRobots();
}

// set robots
function setRobots() 
{
    let temp = document.head.innerHTML;
    document.head.innerHTML = '<meta name="robots" content="noindex,nofollow">' + temp;
}


function go() 
{
    var childNodes = document.html.childNodes;
    for (var i = 0; i < childNodes.length; i++) {
        childNodes[i]
    }
}

function getComments(d) 
{
    if (!d)
        return;
    if (d.nodeType == 8) {
        d.remove();
    }
    if (!d.childNodes)
        return;
    for (var i = 0; i < d.childNodes.length; i++)
        getComments(d.childNodes[i]);
}


getComments(document);

deleteTrash();