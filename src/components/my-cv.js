import { html } from '@polymer/lit-element';
import { PageViewElement } from './page-view-element.js';

// These are the shared styles needed by this element.
import { SharedStyles } from './shared-styles.js';

class CV extends PageViewElement {
  render() {
    return html`
      ${SharedStyles}
      <section>
        <h2>CV</h2>
        <p></p>
      </section>
    `;
  }

  static get properties() { return {} }
}

window.customElements.define('my-cv', CV);
