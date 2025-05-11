import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('ui-data-list')
export class DataList extends LitElement {
  static styles = css`
    dl {
      display: inline-grid;
      grid-template-columns: repeat(2, auto);
      row-gap: var(--size-1);
      column-gap: var(--size-4);
    }
  `;

  protected render() {
    return html`<dl><slot></slot></dl>`;
  }
}

@customElement('ui-data-list-item')
export class DataListItem extends LitElement {
  static styles = css`
    :host {
      display: contents;
    }

    * {
      color: inherit;
    }

    dt {
      font-weight: var(--font-weight-6);
    }

    dd {
      margin: 0;
    }
  `;

  @property() heading = '';

  protected render() {
    return html`
      <dt>${this.heading}</dt>

      <dd><slot></slot></dd>
    `;
  }
}
