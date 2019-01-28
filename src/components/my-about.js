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
        <p>Software Engineer specialised in Javascript. Both frontend oriented and backend oriented. Frontend: worked with webcomponents, PWA and the popular JS frameworks. Backend: NodeJS</p>
        <p>Test Engineer specialised in test automation setup. From checks in the code editor and pull request until tool selection, setup and implementation for unit and integration tests.</p>
        <p>Team Builder, Goal Oriented and Quality Focused.</p>
      </section>
    `;
  }
}

window.customElements.define('my-about', About);
