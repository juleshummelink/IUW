const openers = document.getElementsByClassName("open");

function redirect(url){
    openers[0].style.animation = "closeLeft 0.5s forwards";
    openers[1].style.animation = "closeRight 0.5s forwards";
    setTimeout(function(){
        window.location.href = window.location.host + url;
    }, 500);
}