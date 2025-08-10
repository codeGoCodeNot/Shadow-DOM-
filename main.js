export class MyMain extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.renderDefault();
  }

  renderDefault() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100%;
          font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
          --bg-color: #fff;
          --text-color: #333;
          --shadow-color: rgba(0, 0, 0, 0.1);
        }
        :host([theme="dark"]) {
          --bg-color: #23272a; 
          --text-color: #ccc;
        }
      </style>
      <div>
        <!-- Your main content here -->
        <p>Main content goes here</p>
      </div>
    `;
  }

  renderProfile() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100%;
          font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
          --bg-color: #fff;
          --text-color: #333;
          --shadow-color: rgba(0, 0, 0, 0.1);
        }
        :host([theme="dark"]) {
          --bg-color: #23272a; 
          --text-color: #ccc;
        }
        .profile-card {
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 2px 6px var(--shadow-color);
          background: var(--bg-color);
          color: var(--text-color);
          text-align: center;
          width: 500px;
        }
        .profession {
          font-weight: normal;
          font-size: 0.8em;
          color: var(--text-color);
          margin-left: 8px;
        }
        .quote {
          font-size: 16px;
          font-style: italic;
          margin-top: 12px;
          color: var(--text-color);
        }
      </style>
      <div class="profile-card">
        <h2>Johnsen Berdin
          <span class="profession">| Licensed Customs Broker</span>
        </h2>
        <p>I'm into web developing</p>
        <p class="quote">"Everyone should know how to program a computer, because it teaches you how to think!" - Steve Jobs</p>
      </div>
    `;
  }

  hideProfile() {
    this.renderDefault();
  }
}
