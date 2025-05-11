import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('ui-menu')
export class Menu extends LitElement {
  static styles = css`
    ul {
      padding: 0;
      margin: 0;
      display: flex;
      gap: var(--size-7);
    }

    .menu {
      all: unset;
      color: inherit;
      cursor: pointer;

      svg {
        inline-size: var(--size-7);
      }
    }

    :host(.full) {
      ul {
        flex-direction: row;
      }

      .menu {
        display: none;
      }
    }

    :host(:not(.full)) {
      ul {
        flex-direction: column;
        gap: var(--size-5);
      }

      nav {
        position: fixed;
        inset-block: 0;
        inset-inline-end: 0;
        display: grid;
        align-content: start;
        padding: calc(var(--size-8) + var(--size-4)) var(--size-8);
        background-color: var(--color-surface);
        box-shadow: var(--shadow-2);
        translate: 0;

        button {
          position: fixed;
          inset-block-start: var(--size-4);
          inset-inline-end: var(--size-5);
          justify-self: end;
        }
      }
    }

    :host(:not(.full):not(.open)) nav {
      translate: 100%;
    }
  `;

  @property({ type: Number }) breakpoint = 0;

  constructor() {
    super();
    new ResizeObserver(() => {
      if (matchMedia(`(width >= ${this.breakpoint}px)`).matches) this.classList.add('full');
      else this.classList.remove('full');
    }).observe(document.body);

    addEventListener('click', ({ target }) => target !== this && this.closeMenu());
  }

  private readonly menuButton = html`
    <button class="menu" @click=${this.openMenu}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
        <path d="M5 6.5H19V8H5V6.5Z" fill="currentColor" />
        <path d="M5 16.5H19V18H5V16.5Z" fill="currentColor" />
        <path d="M5 11.5H19V13H5V11.5Z" fill="currentColor" />
      </svg>
    </button>
  `;

  private readonly closeMenuButton = html`
    <button class="menu" @click=${this.closeMenu}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
        <path d="M6 18L18 6M6 6L18 18" stroke="currentColor" stroke-width="2" />
      </svg>
    </button>
  `;

  protected render() {
    return html`
      ${this.menuButton}

      <nav>
        ${this.closeMenuButton}

        <ul>
          <slot></slot>
        </ul>
      </nav>
    `;
  }

  private openMenu() {
    this.classList.add('open');
  }

  private closeMenu() {
    this.classList.remove('open');
  }
}

@customElement('ui-menu-item')
export class MenuItem extends LitElement {
  static styles = css`
    a {
      color: inherit;
      text-decoration: none;
    }
  `;

  @property() href = '#';

  protected render() {
    return html`<a href="${this.href}"><slot></slot></a>`;
  }
}
