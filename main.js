const openers = document.getElementsByClassName("open");

const mobileButton = document.getElementsByClassName("mobileButton")[0];
const mobileMenuObject = document.getElementsByClassName("mobileMenu")[0];

var menuIsOpen = false;

function redirect(url){
    openers[0].style.animation = "closeLeft 0.5s forwards";
    openers[1].style.animation = "closeRight 0.5s forwards";
    setTimeout(function(){
        window.location.replace(url);
    }, 500);
}

function mobileMenu(){
    if(!menuIsOpen){
        mobileButton.src = "img/close.svg";
        mobileMenuObject.style.display = "flex";
        setTimeout(function(){
            mobileMenuObject.style.maxHeight = "200px";
        },1);
        menuIsOpen = true;
    } else {
        mobileButton.src = "img/menu.svg";
        mobileMenuObject.style.maxHeight = "0px";
        setTimeout(function(){
            mobileMenuObject.style.display = "none";
        },500);
        menuIsOpen = false;
    }
}