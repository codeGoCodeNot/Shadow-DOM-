export class Burger extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  async connectedCallback() {
    const response = await fetch('burger.html');
    const html = await response.text();
    //
    const template = document.createElement('template');
    template.innerHTML = html;
    //
    this.shadowRoot.append(template.content.cloneNode(true));
    //
    const button = this.shadowRoot.querySelector('#burger-btn');
    const menu = this.shadowRoot.querySelector('#menu');
    //
    if (button && menu) {
      button.addEventListener('click', (event) => {
        event.stopPropagation();
        menu.classList.toggle('show');
      });
      document.addEventListener('click', (event) => {
        const path = event.composedPath();
        const clickedInside = path.includes(button) || path.includes(menu);
        if (!clickedInside) {
          menu.classList.remove('show');
        }
      });
    }
  }
}
