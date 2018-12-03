import { html } from '@polymer/lit-element';
import { PageViewElement } from './page-view-element.js';

// These are the shared styles needed by this element.
import { SharedStyles } from './shared-styles.js';

class About extends PageViewElement {
  render() {
    return html`
      ${SharedStyles}
      <section>
        <h2>About me</h2>
        <p>This page will be extended in the near future.</p>
      </section>
    `;
  }
}

window.customElements.define('my-about', About);
