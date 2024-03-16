'use strict';
function redirectToExternalSite(url) {
    if (!/^https?:\/\//i.test(url)) {
        url = 'http://' + url;
    }
    window.location.href = url;
};

const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');

button1.addEventListener('click', function() {
    redirectToExternalSite('https://www.example1.com');
});

button2.addEventListener('click', function() {
    redirectToExternalSite('https://www.example2.com');
});