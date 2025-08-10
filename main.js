export class MyMain extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.renderDefault();
  }

  restartAnimation(el, animationName = "pixarBounceIn") {
    el.style.animation = "none"; // reset
    void el.offsetWidth; // trigger reflow
    el.style.animation = `${animationName} 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards`;
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
        @keyframes pixarBounceIn {
          0% {
            opacity: 0;
            transform: scale(0.8) translateY(20px);
          }
          50% {
            opacity: 1;
            transform: scale(1.05) translateY(-10px);
          }
          70% {
            transform: scale(0.95) translateY(5px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        .default-content {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
          color: var(--text-color, #555);
          background: var(--bg-color, #f9f9f9);
          border-radius: 12px;
          padding: 40px;
          box-sizing: border-box;
          text-align: center;
          /* animation set dynamically */
        }
        .default-content h2 {
          font-size: 2rem;
          margin-bottom: 16px;
        }
        .default-content p {
          font-size: 1.1rem;
          max-width: 600px;
          line-height: 1.4;
        }
      </style>
      <div class="default-content">
        <h2>Welcome to My Web</h2>
        <p>Select an option from the menu to get started.</p>
      </div>
    `;

    const content = this.shadowRoot.querySelector(".default-content");
    this.restartAnimation(content);
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
        @keyframes pixarBounceIn {
          0% {
            opacity: 0;
            transform: scale(0.8) translateY(20px);
          }
          50% {
            opacity: 1;
            transform: scale(1.05) translateY(-10px);
          }
          70% {
            transform: scale(0.95) translateY(5px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        .profile-card {
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 2px 6px var(--shadow-color);
          background: var(--bg-color);
          color: var(--text-color);
          text-align: center;
          width: 500px;
          /* animation set dynamically */
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

    const card = this.shadowRoot.querySelector(".profile-card");
    this.restartAnimation(card);
  }

  hideProfile() {
    this.renderDefault();
  }
}
