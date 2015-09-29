function createElementToAnim() {
    var place = document.getElementById('place');
    var title = document.createElement('h1');
    place.appendChild(title);
    title.innerHTML = 'Test...';
    title.id = 'anim';
}

function setup() {
    createElementToAnim();
    var elem = document.getElementById('anim');
    // running|paused|initial|inherit
    elem.addEventListener('animationstart', listener, false);
    elem.addEventListener('animationend', listener, false);
    elem.addEventListener('animationiteration', listener, false);
}

function listener(e) {
    var elem = document.getElementById('anim');
    var list = document.getElementById('output');
    var l = document.createElement('li');
    switch (e.type) {
        case 'animationstart':
            l.innerHTML = 'Started: elapsed time is ' + e.elapsedTime;
            elem.className = 'animation-start';
            elem.firstChild.nodeValue = 'Start';
            break;
        case 'animationend':
            l.innerHTML = 'Ended: elapsed time is ' + e.elapsedTime;
            elem.className = 'animation-end';
            elem.firstChild.nodeValue = 'End';
            break;
        case 'animationiteration':
            l.innerHTML = 'New loop started at time ' + e.elapsedTime;
            elem.className = 'animation-iteration';
            elem.firstChild.nodeValue = 'Iteration';
            break;
    }
    list.insertBefore(l, list.childNodes[0]);
}

function load() {
    var btnStart = document.getElementById('start');
    btnStart.addEventListener('click', setup, false);
}

function pause() {
    var elem = document.getElementById('anim');
    elem.style.animationPlayState = (elem.style.animationPlayState === 'paused') ? 'running' : 'paused';
}

function pauseResume() {
    var btnPause = document.getElementById('pause');
    btnPause.addEventListener('click', pause, false);
}

document.addEventListener('DOMContentLoaded', function (e) {
    load();
    pauseResume();
});
