import { html, LitElement, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('app-service-card')
export class ServiceCard extends LitElement {
  static styles = css`
    :host {
      display: grid;
      align-content: start;
      row-gap: var(--size-3);
      padding: var(--size-3);
      background-color: var(--color-surface);
      border-radius: var(--radius-3);

      ::slotted([slot='heading']) {
        font-size: var(--font-size-2);
        color: var(--color-primary);
      }

      ::slotted([slot='description']) {
        font-style: italic;
        font-size: var(--font-size-1);
      }

      ::slotted([slot='price']) {
        font-size: var(--font-size-4);
        color: var(--color-primary);
      }

      ::slotted([slot='price'])::after {
        content: ' €';
      }
    }
  `;

  @property()
  heading = 'Massage';

  @property({ type: Number })
  price = 0;

  protected render() {
    return html`
      <slot name="heading"></slot>

      <slot name="description"></slot>

      <slot name="price"></slot>
    `;
  }
}
