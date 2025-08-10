export class Burger extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  async connectedCallback() {
    const response = await fetch('burger.html');
    const html = await response.text();
    const template = document.createElement('template');
    template.innerHTML = html;
    this.shadowRoot.append(template.content.cloneNode(true));

    const profile = this.shadowRoot.querySelector('.profile');
    if (profile) {
      profile.style.cursor = 'pointer';
      profile.addEventListener('click', (e) => {
        e.stopPropagation();
        console.log('click');
        this.dispatchEvent(
          new CustomEvent('show-profile', { bubbles: true, composed: true })
        );
      });
    }

    const button = this.shadowRoot.querySelector('#burger-btn');
    const menu = this.shadowRoot.querySelector('#menu');

    if (button && menu) {
      button.addEventListener('click', (e) => {
        e.stopPropagation();
        menu.classList.toggle('show');
      });

      document.addEventListener('click', (e) => {
        const path = e.composedPath();
        if (!path.includes(button) && !path.includes(menu)) {
          menu.classList.remove('show');
        }
      });
    }
  }

  static get observedAttributes() {
    return ['theme'];
  }

  attributeChangedCallback(name, newVal) {
    if (name === 'theme') {
      this.updateTheme(newVal);
    }
  }

  updateTheme(theme) {
    if (theme === 'dark') {
      this.shadowRoot.host.setAttribute('theme', 'dark');
    } else {
      this.shadowRoot.host.removeAttribute('theme');
    }
  }
}
