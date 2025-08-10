export class MyMain extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  renderProfile() {
    this.shadowRoot.innerHTML = `
  <style>
    :host {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      color: var(--menu-color, #ccc);
      font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
      
    }
    .profile-card {
      padding: 20px;
      background: var(--menu-bg, #f5f7fa);
      border-radius: 8px;
      box-shadow: 0 2px 6px rgba(0,0,0,0.1);
      text-align: center;
      color: #333;
    }
  </style>
  <div class="profile-card">
    <h2>Johnsen Berdin</h2>
    <p>I'm into web developing</p>
  </div>
`;
  }
}
