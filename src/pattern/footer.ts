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

      article {
        margin-block: var(--size-4);
      }

      a {
        color: inherit;
        text-decoration: inherit;
        cursor: pointer;
      }

      small {
        margin-block-end: var(--size-2);

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

        <small>&copy; ${this.currentYear} À l'intuition - Tous droits réservés</small>

        <small>Conception Web par <a href="https://www.linkedin.com/in/lcsga/">Lucas Garcia</a></small>
      </footer>
    `;
  }
}
