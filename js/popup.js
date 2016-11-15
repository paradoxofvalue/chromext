"use strict";

// var button_clone = doc.getElementById("doit");
// button_clone.addEventListener("click", all_clone);

// function all_clone()

    // clear 
    function deleteTrash() {
        let elements = document.querySelectorAll('*');

        for (let i = elements.length - 1; i >= 0; i--) 
        {
            if (elements[i].hasAttribute('onclick')) 
            {
                elements[i].removeAttribute('onclick');
            }
            
            switch (elements[i].tagName) 
            {
                case "A":
                    elements[i].setAttribute('href', '#');
                    break;
                case "FORM":
                    if (elements[i].hasAttribute('action')) 
                    {
                        elements[i].removeAttribute('action');
                    }
                    break;
                case "META":
                    let isAllow = elements[i].hasAttribute('charset') || elements[i].getAttribute('name') == 'viewport' || elements[i].getAttribute('http-equiv') == 'content-type';
                    if (!isAllow) elements[i].remove();
                    break;
                case "LINK":
                    if (elements[i].hasAttribute('rel') != "stylesheet") 
                    {
                        elements[i].remove();
                    }
                    break;
                case "SCRIPT":
                case "NOSCRIPT":
                case "IFRAME":
                    elements[i].remove();
                    break;
                case "IMG":
                    elements[i].removeAttribute("srcset");
                    break;
                default:
                    break;
            }
        }
        
        setRobots();
    }

    // set no robots 
    function setRobots() 
    {
        let temp = document.head.innerHTML;
        document.head.innerHTML = '<meta name="robots" content="noindex,nofollow">' + temp;
    }

    // delete comments
    function getComments(d) 
    {
        if (!d)
        {
            return;
        }
            
        if (d.nodeType == 8) 
        {
            d.remove();
        }
        if (!d.childNodes)
        {
            return;
        }
            
        for (var i = 0; i < d.childNodes.length; i++)
        {
            getComments(d.childNodes[i]);
        }
    }


    getComments(document);

    deleteTrash();

    setRobots();