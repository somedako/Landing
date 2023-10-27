document.addEventListener('DOMContentLoaded', function () {
    const buttonOpen = document.querySelector('.buttonPopup');
    const buttonClose = document.querySelector('.popup_close');
    const popup = document.querySelector('.popup');
    const burger = document.querySelector('.burger');
    const mobNav = document.querySelector('.header-nav-left-list');
    const close = document.querySelector('.close');

    buttonOpen.addEventListener('click', () => popup.classList.add('show'));
    buttonClose.addEventListener('click', () => popup.classList.remove('show'));
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            popup.classList.remove('show');
        }
    });

    popup.addEventListener('click', () => {
        document.querySelector('.popup.show').classList.remove('show');
        this.classList.remove('show');
    });

    burger.addEventListener('click', () => mobNav.classList.add('active'));
    close.addEventListener('click', () => mobNav.classList.remove('active'));
});
