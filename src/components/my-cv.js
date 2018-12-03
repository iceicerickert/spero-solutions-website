import { html } from '@polymer/lit-element';
import { PageViewElement } from './page-view-element.js';

// These are the shared styles needed by this element.
import { SharedStyles } from './shared-styles.js';

class CV extends PageViewElement {
  render() {
    return html`
      ${SharedStyles}
      <style>
        div.LI-profile-badge {
          width: 330px;
        }
        @media (max-width: 475px) {
          div.LI-profile-badge {
            width: 280px;
          }
        }
      </style>
      <section>
        <h2>CV</h2>
        <p>My curriculum vitae can be requested via e-mail <a href="mailto:info@spero.solutions">info@spero.solutions</a>. Otherwise you can view my LinkedIn profile by clicking below.</p>
      </section>
      <section>
        <div class="LI-profile-badge" data-iscreate="true" data-version="v1" data-size="large" data-locale="en_US" data-type="horizontal" data-theme="light" data-vanity="rickdehoop" data-rendered="true" data-uid="315632"><a class="LI-simple-link" href="https://nl.linkedin.com/in/rickdehoop?trk=profile-badge" target="_blank">Rick de Hoop</a><div><script type="text/javascript" src="https://static.licdn.com/sc/h/3qk7aqkysw7gz575y2ma1e5ky"></script><code id="__pageContext__" style="display: none;"><!--{"baseScdsUrl":"https://static.licdn.com/scds","contextPath":"/","pageInstance":"urn:li:page:profile-badge-view;8LV4nbLGTAu/8izkQMyIYQ==","isProd":true,"brotliBaseSparkUrlForHashes":"https://static.licdn.com/sc/h/br","linkedInDustJsUrl":"https://static.licdn.com/sc/h/3qk7aqkysw7gz575y2ma1e5ky","baseSparkUrlForHashes":"https://static.licdn.com/sc/h","isCsUser":false,"appName":"badger-frontend","fizzyJsUrl":"https://static.licdn.com/scds/common/u/lib/fizzy/fz-1.3.3-min.js","mpName":"badger-frontend","scHashesUrl":"https://static.licdn.com/sc/p/com.linkedin.badger-frontend%3Abadger-frontend-static-content%2B0.1.83/f/%2Fbadger-frontend%2Fsc-hashes%2Fsc-hashes_en_US.js","dustDebug":"control","baseMediaUrl":"https://media.licdn.com/media","isBrotliEnabled":false,"useCdn":true,"locale":"en_US","version":"0.1.83","useScHashesJs":true,"cdnUrl":"https://static.licdn.com","baseMprUrl":"https://media.licdn.com/mpr/mpr","playUtilsUrl":"https://static.licdn.com/sc/h/v0un52v653evxg2c5l1ap5la","useNativeXmsg":false,"hashesDisabledByQueryParam":false,"baseAssetsUrl":"https://static.licdn.com/sc/p/com.linkedin.badger-frontend%3Abadger-frontend-static-content%2B0.1.83/f","csrfToken":null,"intlPolyfillUrl":"https://static.licdn.com/sc/h/1fw1ey0jfgqapy4dndtgrr7y1","serveT8WithDust":false,"disableDynamicConcat":false,"baseSparkUrlForFiles":"https://static.licdn.com/sc/p/com.linkedin.badger-frontend%3Abadger-frontend-static-content%2B0.1.83/f","dustUtilsUrl":"https://static.licdn.com/sc/h/19dd5wwuyhbk7uttxpuelttdg","linkedInDustI18nJsUrl":"https://static.licdn.com/sc/h/epy983tzfexddbwygtwyxyavv","baseMediaProxyUrl":"https://media.licdn.com/media-proxy"}--></code><script src="https://static.licdn.com/sc/p/com.linkedin.badger-frontend%3Abadger-frontend-static-content%2B0.1.83/f/%2Fbadger-frontend%2Fsc-hashes%2Fsc-hashes_en_US.js"></script><script src="https://static.licdn.com/sc/h/19dd5wwuyhbk7uttxpuelttdg"></script><link rel="stylesheet" href="https://static.licdn.com/sc/h/bi3v1f73ewvqbszoipmrd935p"><div dir="ltr" class="LI-badge-container-horizontal-light LI-badge-container horizontal light large" style="display: none"> <div class="LI-profile-badge-header LI-name-container LI-row"><div class="LI-col"><div class="LI-profile-pic-container"><img src="https://media.licdn.com/dms/image/C4D03AQEH_Uf4mSAHww/profile-displayphoto-shrink_200_200/0?e=1549497600&amp;v=beta&amp;t=ZRqjvGBX83NGvkMfsG4kn4mWB9xu4zY-1gzEZtCBiE4" class="LI-profile-pic" alt="Rick de Hoop"></div></div><div class="LI-col LI-header"><div class="LI-name"><a href="https://nl.linkedin.com/in/rickdehoop?trk=profile-badge-name" target="_blank">Rick de Hoop</a></div><div class="LI-title">Software Engineer</div></div></div><ul class="LI-more-info"><li class="LI-field"><img src="images/manifest/icon-24x24.png" class="LI-field-icon" alt="spero solutions"><a href="https://www.linkedin.com/company/sperosolutions/" target="_blank">Spero Solutions</a></li><li class="LI-field"><img src="https://static.licdn.com/scds/common/u/images/themes/katy/ghosts/school/ghost_school_80x80_v1.png" class="LI-field-icon" alt="Haagse Hogeschool (Zoetermeer)">Haagse Hogeschool (Zoetermeer)</li></ul><div class="LI-footer LI-row"><a href="https://nl.linkedin.com/in/rickdehoop?trk=profile-badge-cta" target="_blank" class="LI-view-profile">View profile</a><span class="LI-logo"><img src="https://static.licdn.com/scds/common/u/images/logos/linkedin/logo_linkedin_93x21_v2.png" alt="LinkedIn" class="LI-icon"></span></div></div></div></div>
      </section>
    `;
  }

  static get properties() { return {} }
}

window.customElements.define('my-cv', CV);
