import { LitElement, html } from '@polymer/lit-element';

// This element is *not* connected to the Redux store.
class ShopItem extends LitElement {
  render() {
    return html`
      ${this.name}:
      <span ?hidden="${this.amount === 0}">${this.amount} * </span>
      $${this.price}
      </span>
    `;
  }

  static get properties() {
    return {
      name: { type: String },
      amount: { type: String },
      price: { type: String }
    }
  }
}

window.customElements.define('shop-item', ShopItem);
