'use strict'

let modalLogin = document.querySelector('.modal-login');
let userLink = document.querySelector('.user-link');
let modalCloseLogin = document.querySelector('.modal-close-login');
let modalIconLogin = document.querySelector('.modal-icon-login');
let modalIconPassword = document.querySelector('.modal-icon-password');
let userLogging = document.querySelector('.user-logging');
let modalMap = document.querySelector('.modal-map');
let openMap = document.querySelector('.open-map');
let modalCloseMap = document.querySelector('.modal-close-map');

openMap.addEventListener('click', function(evt) {
    evt.preventDefault();
    modalMap.classList.toggle('modal-show');
});

modalCloseMap.addEventListener('click', function(evt) {
    evt.preventDefault();
    modalMap.classList.toggle('modal-show');
});

userLink.addEventListener('click', function(evt) {
    evt.preventDefault();
    modalLogin.classList.toggle("modal-show");
    modalIconLogin.focus();
});

modalCloseLogin.addEventListener('click', function(evt) {
    evt.preventDefault();
    modalLogin.classList.remove("modal-show");
    modalLogin.classList.remove("modal-error");
});

userLogging.addEventListener('submit', function(evt) {
    if (!modalIconLogin.value  || !modalIconPassword.value) {
        evt.preventDefault();
        modalLogin.classList.add("modal-error");
    }
});

window.addEventListener('keydown', function(evt) {
    if (evt.keyCode === 27) {
        if (modalLogin.classList.contains('modal-show')) {
            evt.preventDefault();
            modalLogin.classList.remove('modal-show');
        }
        if (modalMap.classList.contains('modal-show')) {
            evt.preventDefault();
            modalMap.classList.remove('modal-show');
        }
    }
})