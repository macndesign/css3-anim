function fireBox() {
    console.log('transitionend box' + name);
}

function fireDelay1() {
    console.log('transitionend delay1' + name);
}

function handlerTransitions() {
    var box = document.getElementById('box');
    box.addEventListener('transitionend', fireBox, false);

    var delay1 = document.getElementById('delay1');
    delay1.addEventListener('transitionend', fireDelay1, false);
}

function balls() {
    var ballWrapper = document.getElementById('ball-wrapper');
    var f = document.getElementById('foo');
    ballWrapper.addEventListener('mousemove', function(ev){
        f.style.transform = 'translateY(' + (ev.clientY-6) + 'px)';
        f.style.transform += 'translateX(' + (ev.clientX-33) + 'px)';
    }, false);
}

document.addEventListener('DOMContentLoaded', function(e){
    handlerTransitions();
    balls();
});
