import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('ui-data-list')
export class DataList extends LitElement {
  static styles = css`
    dl {
      display: inline-grid;
      row-gap: var(--size-1);
    }

    :host(:not(.column)) dl {
      grid-template-columns: repeat(2, auto);
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

    :host-context(.column) :host dd {
      margin-block-end: var(--size-2);
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
