import outsideClick from './outside-click.js';
export default function initDropdownMenu() {}

const dropdownMenus = document.querySelectorAll('[data-dropdown]');

dropdownMenus.forEach((menu) => {
    [ 'click', 'touchstart' ].forEach((userEvent) => {
        menu.addEventListener(userEvent, handleClick);
    });
});

function handleClick(event) {
    event.preventDefault();
    this.classList.add('ativo');
    outsideClick(this, [ 'click', 'touchstart' ], () => {
        this.classList.remove('ativo');
    });
}
