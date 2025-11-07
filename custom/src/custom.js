/**
 * Brutal HAXcms Theme
 * A brutalist design theme for HAXcms with raw, functional aesthetics
 */

import { html, css, LitElement } from 'lit';

class BrutalHaxTheme extends LitElement {
  static get tag() {
    return 'brutal-hax-theme';
  }

  static get properties() {
    return {
      manifest: { type: Object },
      activeItem: { type: Object },
    };
  }

  static get styles() {
    return css`
      :host {
        display: block;
        font-family: 'Courier New', 'Courier', monospace;
        background: #ffffff;
        color: #000000;
        min-height: 100vh;
        --brutal-border: 4px solid #000000;
        --brutal-spacing: 0;
        --brutal-bg: #ffffff;
        --brutal-fg: #000000;
        --brutal-accent: #000000;
      }

      * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }

      .brutal-container {
        display: grid;
        grid-template-columns: 300px 1fr;
        grid-template-rows: auto 1fr auto;
        min-height: 100vh;
        border: var(--brutal-border);
      }

      /* Header */
      .brutal-header {
        grid-column: 1 / -1;
        background: #000000;
        color: #ffffff;
        padding: 20px;
        border-bottom: var(--brutal-border);
        text-transform: uppercase;
        letter-spacing: 2px;
      }

      .brutal-header h1 {
        font-size: 32px;
        font-weight: 900;
        margin: 0;
        line-height: 1;
      }

      .brutal-header p {
        margin-top: 10px;
        font-size: 14px;
        opacity: 0.8;
      }

      /* Navigation Sidebar */
      .brutal-nav {
        background: #ffffff;
        border-right: var(--brutal-border);
        padding: 0;
        overflow-y: auto;
      }

      .brutal-nav-title {
        background: #000000;
        color: #ffffff;
        padding: 15px;
        font-size: 16px;
        font-weight: 900;
        text-transform: uppercase;
        letter-spacing: 1px;
        border-bottom: var(--brutal-border);
      }

      .brutal-nav-list {
        list-style: none;
        margin: 0;
        padding: 0;
      }

      .brutal-nav-item {
        border-bottom: 2px solid #000000;
        transition: none;
      }

      .brutal-nav-item:hover {
        background: #000000;
        color: #ffffff;
      }

      .brutal-nav-item.active {
        background: #000000;
        color: #ffffff;
        font-weight: 900;
      }

      .brutal-nav-link {
        display: block;
        padding: 15px 20px;
        color: inherit;
        text-decoration: none;
        font-size: 14px;
        text-transform: uppercase;
        letter-spacing: 1px;
        cursor: pointer;
      }

      .brutal-nav-link:hover {
        text-decoration: underline;
      }

      /* Main Content */
      .brutal-main {
        padding: 40px;
        background: #ffffff;
        overflow-y: auto;
      }

      .brutal-content {
        max-width: 800px;
      }

      .brutal-content h1,
      .brutal-content h2,
      .brutal-content h3,
      .brutal-content h4,
      .brutal-content h5,
      .brutal-content h6 {
        font-weight: 900;
        text-transform: uppercase;
        letter-spacing: 1px;
        margin: 30px 0 15px 0;
        padding: 10px;
        background: #000000;
        color: #ffffff;
        border: var(--brutal-border);
      }

      .brutal-content h1 {
        font-size: 36px;
        padding: 20px;
      }

      .brutal-content h2 {
        font-size: 28px;
      }

      .brutal-content h3 {
        font-size: 22px;
      }

      .brutal-content p {
        margin: 20px 0;
        line-height: 1.8;
        font-size: 16px;
      }

      .brutal-content a {
        color: #000000;
        text-decoration: underline;
        font-weight: 700;
        text-decoration-thickness: 2px;
      }

      .brutal-content a:hover {
        background: #000000;
        color: #ffffff;
        text-decoration: none;
      }

      .brutal-content ul,
      .brutal-content ol {
        margin: 20px 0;
        padding-left: 40px;
      }

      .brutal-content li {
        margin: 10px 0;
        line-height: 1.6;
      }

      .brutal-content blockquote {
        margin: 30px 0;
        padding: 20px;
        border: var(--brutal-border);
        background: #f0f0f0;
        font-style: normal;
      }

      .brutal-content code {
        background: #000000;
        color: #ffffff;
        padding: 2px 6px;
        font-family: 'Courier New', monospace;
        font-size: 14px;
      }

      .brutal-content pre {
        background: #000000;
        color: #ffffff;
        padding: 20px;
        margin: 20px 0;
        border: var(--brutal-border);
        overflow-x: auto;
      }

      .brutal-content pre code {
        background: transparent;
        padding: 0;
      }

      .brutal-content img {
        max-width: 100%;
        height: auto;
        border: var(--brutal-border);
        margin: 20px 0;
        display: block;
      }

      .brutal-content table {
        width: 100%;
        border-collapse: collapse;
        margin: 20px 0;
        border: var(--brutal-border);
      }

      .brutal-content th,
      .brutal-content td {
        border: 2px solid #000000;
        padding: 12px;
        text-align: left;
      }

      .brutal-content th {
        background: #000000;
        color: #ffffff;
        font-weight: 900;
        text-transform: uppercase;
      }

      /* Footer */
      .brutal-footer {
        grid-column: 1 / -1;
        background: #000000;
        color: #ffffff;
        padding: 20px;
        border-top: var(--brutal-border);
        text-align: center;
        font-size: 12px;
        text-transform: uppercase;
        letter-spacing: 1px;
      }

      /* Buttons */
      .brutal-button {
        background: #000000;
        color: #ffffff;
        border: var(--brutal-border);
        padding: 12px 24px;
        font-family: 'Courier New', monospace;
        font-size: 14px;
        font-weight: 900;
        text-transform: uppercase;
        letter-spacing: 1px;
        cursor: pointer;
        transition: none;
        margin: 5px;
      }

      .brutal-button:hover {
        background: #ffffff;
        color: #000000;
      }

      .brutal-button:active {
        transform: translate(2px, 2px);
      }

      /* Responsive Design */
      @media (max-width: 768px) {
        .brutal-container {
          grid-template-columns: 1fr;
          grid-template-rows: auto auto 1fr auto;
        }

        .brutal-nav {
          border-right: none;
          border-bottom: var(--brutal-border);
          max-height: 300px;
        }

        .brutal-main {
          padding: 20px;
        }

        .brutal-content h1 {
          font-size: 24px;
          padding: 15px;
        }
      }

      /* Utility Classes */
      .brutal-box {
        border: var(--brutal-border);
        padding: 20px;
        margin: 20px 0;
        background: #ffffff;
      }

      .brutal-box-inverse {
        border: var(--brutal-border);
        padding: 20px;
        margin: 20px 0;
        background: #000000;
        color: #ffffff;
      }

      .brutal-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 0;
        border: var(--brutal-border);
      }

      .brutal-grid-item {
        border: 2px solid #000000;
        padding: 20px;
      }

      /* Loading State */
      .brutal-loading {
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
        font-size: 24px;
        font-weight: 900;
        text-transform: uppercase;
        letter-spacing: 2px;
      }

      /* Animations - Minimal and Brutal */
      @keyframes brutal-pulse {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.5; }
      }

      .brutal-animate {
        animation: brutal-pulse 2s infinite;
      }
    `;
  }

  constructor() {
    super();
    this.manifest = {};
    this.activeItem = null;
  }

  render() {
    if (!this.manifest || !this.manifest.title) {
      return html`
        <div class="brutal-loading">
          <div class="brutal-animate">LOADING...</div>
        </div>
      `;
    }

    return html`
      <div class="brutal-container">
        <header class="brutal-header">
          <h1>${this.manifest.title || 'BRUTAL HAXCMS'}</h1>
          <p>${this.manifest.description || 'A BRUTALIST THEME FOR HAXCMS'}</p>
        </header>

        <nav class="brutal-nav">
          <div class="brutal-nav-title">NAVIGATION</div>
          <ul class="brutal-nav-list">
            ${this._renderNavItems(this.manifest.items || [])}
          </ul>
        </nav>

        <main class="brutal-main">
          <div class="brutal-content">
            <slot></slot>
          </div>
        </main>

        <footer class="brutal-footer">
          <p>POWERED BY HAXCMS × BRUTAL THEME × ${new Date().getFullYear()}</p>
        </footer>
      </div>
    `;
  }

  _renderNavItems(items) {
    return items.map(
      (item) => html`
        <li class="brutal-nav-item ${this._isActive(item) ? 'active' : ''}">
          <a
            class="brutal-nav-link"
            href="${item.location || '#'}"
            @click="${(e) => this._handleNavClick(e, item)}"
          >
            ${item.title || 'UNTITLED'}
          </a>
        </li>
      `
    );
  }

  _isActive(item) {
    return this.activeItem && this.activeItem.id === item.id;
  }

  _handleNavClick(e, item) {
    e.preventDefault();
    this.activeItem = item;
    this.dispatchEvent(
      new CustomEvent('active-item-changed', {
        detail: { value: item },
        bubbles: true,
        composed: true,
      })
    );
  }
}

customElements.define(BrutalHaxTheme.tag, BrutalHaxTheme);

// Export for use in other modules
export { BrutalHaxTheme };

// Apply global brutal styles to the document
const globalStyles = document.createElement('style');
globalStyles.textContent = `
  body {
    margin: 0;
    padding: 0;
    font-family: 'Courier New', 'Courier', monospace;
    background: #ffffff;
    color: #000000;
  }

  * {
    box-sizing: border-box;
  }

  /* Override HAXcms default styles with brutal aesthetics */
  :root {
    --haxcms-color: #000000;
    --haxcms-background-color: #ffffff;
    --haxcms-border-color: #000000;
    --haxcms-font-family: 'Courier New', 'Courier', monospace;
  }
`;
document.head.appendChild(globalStyles);
