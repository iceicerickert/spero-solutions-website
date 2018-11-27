import { html } from '@polymer/lit-element';
import { PageViewElement } from './page-view-element.js';

// These are the shared styles needed by this element.
import { SharedStyles } from './shared-styles.js';

class Website extends PageViewElement {
  render() {
    return html`
      ${SharedStyles}
      <section>
        <h2>Application</h2>
        <p><code>this</code> application is built with <a href="https://www.polymer-project.org" target="_blank">Polymer WebComponents</a>. The custom elements extend from Polymers <code>&lt;lit-element&gt;</code> which has some nifty functionality regarding rendering. There is a state manager to centralize and manipulate the data, this is done with Redux. You can debug the current state with <a href="http://extension.remotedev.io/" target="_blank">Redux DevTools</a> if interested.</p>
      </section>
      <section>
        <h3>Quality</h3>
        <p>The quality of this application is guaranteed, as far as possible, by automatic tests and performance audits.</p>
        <h4>Testing</h4>
        <p>For unit testing <a href="https://github.com/Polymer/tools/tree/master/packages/web-component-tester" target="_blank">WebComponentTester</a> (WCT) is used. WCT is a tool which enables you to run your tests in different browsers while still be able to use popular testing combinations like Mocha and Chai. <a href="https://github.com/Polymer/tools/tree/master/packages/web-component-tester#a11ysuitefixureid-ignoredtests-beforeeach" target="_blank">a11ySuite</a> is included for accessibility checks.</p>
        <p>The router, and some visuals, are tested with <a href="https://developers.google.com/web/tools/puppeteer/" target="_blank">Puppeteer</a>. This library gives you direct access to <a href="https://developers.google.com/web/updates/2017/04/headless-chrome" target="_blank">headless</a> Chrome. This tool enables you to interact with Chrome via NodeJS as if you are an end user.</p>
        <p>Those tests will run on every commit via <a href="https://travis-ci.com/iceicerickert/spero-solutions-website" target="_blank">Travis CI</a>.</p>
        <h4>Performance and standards</h4>
        <p><a href="https://www.webpagetest.org/easy" target="_blank">Webpagetest</a> does some performance testing on a real Moto G4 device on a slow 3G network. It gives you some insights on how <code>this</code> page performs.</p>
        <p><a href="https://www.webpagetest.org/result/181126_RR_e130ae40a2aa84613167d0b9d72e8c01/" target="_blank">Click here</a> to view the results of <code>this</code> page. You can click re-run to have give it another go! <a href="https://developers.google.com/web/tools/lighthouse/" target="_blank">Lighouse</a> audits are also done on production environment. They can be viewed from the same link or from <a href="https://www.webpagetest.org/lighthouse.php?test=181126_RR_e130ae40a2aa84613167d0b9d72e8c01&run=2" target="_blank">here</a>.</p>
        <p>Some other checks or audits of <code>this</code> page: <a href="https://hstspreload.org/?domain=spero.solutions" target="_blank">HSTS</a>, <a href="https://www.ssllabs.com/ssltest/analyze.html?d=spero.solutions&latest" target="_blank">SSL Labs</a>, <a href="https://webhint.io/#scanner-input" target="_blank">webhint</a>.</p>
      </section>
      <section>
        <h3>Deployment</h3>
        <p>The source code is managed by a GitHub repository, <a href="https://github.com/iceicerickert/spero-solutions-website" target="_blank">iceicerickert/spero-solutions-website</a>. A deployment is triggered on ervery commit to the master branch (IF the tests, audits and build are succeeding). Travis will then deploy the application to <a href="http://firebase.google.com" target=_blank">Firebase</a>. The application server (<a href="https://github.com/Polymer/prpl-server" target="_blank">prpl-server-node</a>) is deployed as a Firebase function. The static files are hosted by the hosting service of Firebase. This gives you the option to serve browser specific builds (ESM, ES5, ES6) for the best experience.</p>
        <p>Next to that, everything is served over HTTPS.</p>
      </section>
        <section>
        <h3>Some nice tricks..</h3>
        <ul>
          <li>Switch of your internet connection and see how you can still use <code>this</code> page because of the <a href="https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API" target="_blank">ServiceWorker API</a>.</li>
          <li>Check your network requests and see the number of roundtrips have been reduced due to <a href="https://developers.google.com/web/fundamentals/performance/http2/" target="_blank">HTTP/2</a>.</li>
          <li>Add this <a href="https://developers.google.com/web/progressive-web-apps/" target="_blank">Progressive Web App</a> (PWA) to your homescreen and it feels like a native app!</li>
        </ul>
      </section>
    `;
  }

  static get properties() { return {} }
}

window.customElements.define('my-website', Website);
