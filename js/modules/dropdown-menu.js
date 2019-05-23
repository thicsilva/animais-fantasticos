import outsideClick from './outside-click.js';

export default class DropdownMenu {
  constructor(menu, events) {
    this.dropdownMenus = document.querySelectorAll(menu);
    // define click e touchstart como argumento padrão
    // de events caso usuário não defina
    if (events === undefined) {
      this.events = ['click', 'touchstart'];
    } else {
      this.events = events;
    }

    this.activeClass = 'ativo';
    // bind
    this.activeDropdownMenu = this.activeDropdownMenu.bind(this);
  }

  // ativa o dropdownmenu e adiciona
  // a função que observa o clique fora dele
  activeDropdownMenu(event) {
    event.preventDefault();
    const element = event.currentTarget;
    element.classList.add(this.activeClass);
    outsideClick(element, this.events, () => {
      element.classList.remove(this.activeClass);
    });
  }

  // adiciona os eventos ao dropdownmenu
  addDropdownMenuEvents() {
    this.dropdownMenus.forEach((menu) => {
      ['click', 'touchstart'].forEach((userEvent) => {
        menu.addEventListener(userEvent, this.activeDropdownMenu);
      });
    });
  }

  init() {
    if (this.dropdownMenus.length) {
      this.addDropdownMenuEvents();
    }
    return this;
  }
}
