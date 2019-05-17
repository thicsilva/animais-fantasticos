import outsideClick from './outside-click.js';
export default function initMenuMobile() {
    const menuButton = document.querySelector('[data-menu="button"]');
    const menuList = document.querySelector('[data-menu="list"]');
    const events = [ 'click', 'touchstart' ];

    function openMenu(event) {
        menuList.classList.add('ativo');
        menuButton.classList.add('ativo');
        outsideClick(menuList, events, () => {
            menuList.classList.remove('ativo');
            menuButton.classList.remove('ativo');
        });
    }
    events.forEach((userEvent) => {
        menuButton.addEventListener(userEvent, openMenu);
    });
}
