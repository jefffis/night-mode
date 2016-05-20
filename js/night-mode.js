var date = new Date(),
    currentHour = date.getHours(),
    body = document.getElementsByTagName('body')[0],
    nightModeButton = document.createElement('button'),
    nightModeEl = document.createElement('div'),
    nightModeStyle = document.createElement('style'),
    head = document.getElementsByTagName('head')[0];

    nightModeButton.innerHTML = 'Night Mode Off';
    nightModeButton.setAttribute('id', 'night-mode-toggle');
    nightModeButton.setAttribute('onclick', 'toggleNightMode()');
    nightModeEl.setAttribute('id', 'night-mode-overlay');

    nightModeStyle.type = 'text/css';
    nightModeStyle.innerHTML = '#night-mode-overlay { position:fixed;top:0;left:0;z-index:10000;height:100%;width:100%;background:rgba(0,0,0,0.65);pointer-events:none; }';
    head.appendChild(nightModeStyle);

    body.appendChild(nightModeButton);

// if ( currentHour > 20 ) {

// }

function toggleNightMode() {
    var nightMode = document.getElementById('night-mode-overlay'),
        nightModeOn = nightMode !== null ? true : false;

    if (nightModeOn) {
        nightMode.parentNode.removeChild(nightMode);
        nightModeButton.innerHTML = 'Night Mode Off';
    } else {
        body.appendChild(nightModeEl);
        nightModeButton.innerHTML = 'Night Mode On';
    }

}