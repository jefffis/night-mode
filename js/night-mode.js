/* sourced from http://stackoverflow.com/questions/4825683/how-do-i-create-and-read-a-value-from-cookie#answer-38184074 */
function getCookie(name) {
    name = name + "=";
    var cookies = document.cookie.split(';');
    for(var i = 0; i <cookies.length; i++) {
        var cookie = cookies[i];
        while (cookie.charAt(0)==' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(name) == 0) {
            return cookie.substring(name.length,cookie.length);
        }
    }
    return "";
}

function setCookie(name, value, expirydays) {
    document.cookie = name + "=" + value + ";";
}

function deleteCookie(name){
    setCookie(name,"",-1);
}

var date = new Date(),
    currentHour = date.getHours(),
    body = document.getElementsByTagName('body')[0],
    nightModeButton = document.createElement('button'),
    nightModeEl = document.createElement('div'),
    nightModeStyle = document.createElement('style'),
    head = document.getElementsByTagName('head')[0],
    nightModeApplicable = (currentHour >= 20 || currentHour < 7) ? true : false;

if ( nightModeApplicable ) {
    nightModeButton.innerHTML = 'Night Mode';
    nightModeButton.setAttribute('id', 'night-mode-toggle');
    nightModeButton.setAttribute('class', 'off');
    nightModeButton.setAttribute('onclick', 'toggleNightMode()');
    nightModeEl.setAttribute('id', 'night-mode-overlay');

    nightModeStyle.type = 'text/css';
    nightModeStyle.innerHTML = '#night-mode-overlay { position:fixed;top:0;left:0;z-index:10000;height:100%;width:100%;background:rgba(0,0,0,0.65);pointer-events:none; }';
    head.appendChild(nightModeStyle);

    body.appendChild(nightModeButton);
}

function toggleNightMode() {
    var nightMode = document.getElementById('night-mode-overlay'),
        nightModeOn = nightMode !== null ? true : false;

    if (nightModeOn) {
        if (!nightModeApplicable) return;
        nightMode.parentNode.removeChild(nightMode);
        nightModeButton.classList = 'off';
        deleteCookie('night-mode-on');
    } else {
        body.appendChild(nightModeEl);
        nightModeButton.classList = 'on';
        setCookie('night-mode-on', 1, 0);
    }

}

if(getCookie('night-mode-on')) {
    toggleNightMode();
}