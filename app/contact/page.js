import Navbar from '../components/Navbar';
import SiteFooter from '../components/SiteFooter';

export default function Page() {
  return (
    <div className="main-wrapper">
      <Navbar />
      {/* Anchor for footer back-to-top (keeps shared footer behavior) */}
      <div id="Section-Hero" style={{display:'none'}}></div>

      <section id="Section-Hero-Contacts" className="global-hero-section">
        <div className="global-padding">
          <div className="section-heading">
            <h1 className="heading-1-style color-text-white">Contact Main Office</h1>
          </div>
          <div className="contact-info">
            <div>+1-555-123-4567</div>
            <div className="footer-link-wrapper">
              <a href="#" className="link-hover">info@nexusevent.com</a>
            </div>
            <div className="contacts-icon-social">
              <div className="social-button">
                <a href="https://www.whatsapp.com/" target="_blank" className="link-social w-inline-block">
                  <img src="/assets/icons/social/660ae72bb1a46212e5f7c3ff_Vectors-Wrapper.svg" loading="lazy" width="32" height="32" alt="WhatsApp" className="social-icons" />
                </a>
              </div>
              <div className="social-button">
                <a href="https://www.facebook.com/" target="_blank" className="link-social w-inline-block">
                  <img src="/assets/icons/social/660ae72c1f23c4991a610133_Vectors-Wrapper.svg" loading="lazy" width="32" height="32" alt="Facebook" className="social-icons" />
                </a>
              </div>
              <div className="social-button">
                <a href="https://twitter.com/" target="_blank" className="link-social w-inline-block">
                  <img src="/assets/icons/social/660ae72c69c5f591460d1f01_Vectors-Wrapper.svg" loading="lazy" width="32" height="32" alt="Twitter" className="social-icons" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section">
        <div className="global-padding">
          <div className="form-headlines">
            <div className="section-heading">
              <h2 className="heading-2-style">Have More Questions?</h2>
            </div>
            <div className="section-copy-wrapper">
              <div>
                If you have any further inquiries or would like more information about TechFusion Summit,
                please fill out the form below. Our team will get back to you shortly.
              </div>
            </div>
          </div>

          <div className="form-wrapper w-form">
            <form id="webflow-form" name="webflow-form" method="get" className="form-wrapper" aria-label="Webflow Form">
              <div className="form-grid">
                <div className="input-wrapper">
                  <label htmlFor="name" className="form-block-label">Name</label>
                  <input className="form-text-input w-input" maxLength={256} name="name" placeholder="Your full name" type="text" id="name" />
                </div>
                <div className="input-wrapper">
                  <label htmlFor="Email" className="form-block-label">Email</label>
                  <input className="form-text-input w-input" maxLength={256} name="Email" placeholder="me@company.com" type="email" id="Email" />
                </div>
                <div className="input-wrapper">
                  <label htmlFor="field" className="form-block-label">Message</label>
                  <textarea placeholder="Your message..." maxLength={5000} id="field" name="field" className="form-text-input w-input"></textarea>
                </div>
                <input type="submit" className="button-primary w-button" value="SEND MESSAGE" />
              </div>
            </form>
            <div className="success-message w-form-done" tabIndex={-1} role="region" aria-label="Webflow Form success">
              <div className="text-medium">Thank you! Your submission has been received!</div>
            </div>
            <div className="error-message w-form-fail" tabIndex={-1} role="region" aria-label="Webflow Form failure">
              <div className="text-medium">Oops! Something went wrong while submitting the form.</div>
            </div>
          </div>
        </div>
      </div>

      <SiteFooter />
    </div>
  );
}


