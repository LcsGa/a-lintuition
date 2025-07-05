import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('app-footer')
export class Footer extends LitElement {
  static styles = css`
    footer {
      display: grid;
      justify-items: center;
      background-color: var(--color-text);
      color: var(--color-surface-variant);
      padding: var(--size-6);

      h1 {
        margin: 0;
        color: var(--color-surface);
        font-family: var(--font-display);
        font-size: var(--font-size-6);
      }

      a {
        color: inherit;
        cursor: pointer;

        &:has(h1) {
          text-decoration: inherit;
        }
      }

      ::slotted(ul) {
        display: grid;
        justify-items: center;
        gap: var(--size-1);
      }

      small {
        margin-block-end: var(--size-2);

        &:first-of-type {
          margin-block-start: var(--size-4);
        }

        + small {
          opacity: 0.7;
        }
      }
    }
  `;

  private readonly currentYear = new Date().getFullYear();

  protected render() {
    return html`
      <footer>
        <a href="#landing">
          <h1>À l'intuition</h1>
        </a>

        <slot name="links"></slot>

        <small>&copy; ${this.currentYear} À l'intuition - Tous droits réservés</small>

        <small>Conception Web par <a href="https://www.linkedin.com/in/lcsga/">Lucas Garcia</a></small>
      </footer>
    `;
  }
}
