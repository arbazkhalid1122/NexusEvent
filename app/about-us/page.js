import Navbar from '../components/Navbar';
import Quote from '../components/Quote';
import CTA from '../components/CTA';
import Testimonials from '../components/Testimonials';
import SiteFooter from '../components/SiteFooter';

export default function Page() {
  return (
    <div className="main-wrapper">
      <Navbar />
      {/* Back-to-top anchor used by footer */}
      <div id="Section-Hero" style={{display:'none'}}></div>

      <section id="Hero-AboutUs" className="global-hero-section">
        <div className="global-padding">
          <div className="section-heading">
            <h1 className="heading-1-style color-text-white">About Nexus EVENT</h1>
          </div>
          <div className="section-copy-wrapper">
            <p className="color-text-white">
              NexusEvent has been synonymous with exceptional event management. From humble beginnings to industry leader, our passion for creating unforgettable experiences remains unwavering
            </p>
            <p className="color-text-white">
              At NexusEvent, we specialize in turning ideas into extraordinary events. From corporate conferences to luxurious weddings, our meticulous planning and attention to detail ensure seamless execution every time. We pride ourselves on our ability to bring visions to life, surpassing expectations and leaving a lasting impression. With a reputation for excellence and a track record of success, NexusEvent is your partner in crafting moments that matter
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="global-padding">
          <div className="section-heading"><h2 className="heading-2-style">Introducing Our Dream Team</h2></div>
          <div className="collection-list-wrapper w-dyn-list">
            <div role="list" className="team-grid w-dyn-items">
              <div role="listitem" className="team-item w-dyn-item">
                <div className="thumbnail-wrapper">
                  <img src="/assets/images/testimonials/660c1db881a0536ccc4a9f92_Thumb%20Photo-3.png" loading="lazy" width="428" height="277" alt="" className="team-thumbnail" />
                </div>
                <div className="team-content-wrapper">
                  <div className="team-content">
                    <h3>Bethany Abshire Jr.</h3>
                    <div className="text-normal color-grey">CEO, InnovateTech Inc</div>
                  </div>
                  <div className="team-social">
                    <a href="https://linkedin.com/" className="team-linkedin w-inline-block">
                      <div className="divider-mask"><div className="line-dynamic"></div></div>
                      <div className="social-team-card-wrapper"><div className="text-small">LINKEDIN</div></div>
                      <div className="divider-mask"><div className="line-dynamic"></div></div>
                    </a>
                    <a href="https://www.facebook.com/" className="team-facebook w-inline-block">
                      <div className="social-team-card-wrapper"><div className="text-small">FACEBOOK</div></div>
                      <div className="divider-mask"><div className="line-dynamic"></div></div>
                    </a>
                  </div>
                </div>
              </div>

              <div role="listitem" className="team-item w-dyn-item">
                <div className="thumbnail-wrapper">
                  <img src="/assets/images/testimonials/660c1db83c79a4ee56e484b0_Thumb%20Photo-1.png" loading="lazy" width="428" height="277" alt="" className="team-thumbnail" />
                </div>
                <div className="team-content-wrapper">
                  <div className="team-content">
                    <h3>Brenda Dicki</h3>
                    <div className="text-normal color-grey">Co-Founder &amp; CFO</div>
                  </div>
                  <div className="team-social">
                    <a href="https://linkedin.com/" className="team-linkedin w-inline-block">
                      <div className="divider-mask"><div className="line-dynamic"></div></div>
                      <div className="social-team-card-wrapper"><div className="text-small">LINKEDIN</div></div>
                      <div className="divider-mask"><div className="line-dynamic"></div></div>
                    </a>
                    <a href="https://www.facebook.com/" className="team-facebook w-inline-block">
                      <div className="social-team-card-wrapper"><div className="text-small">FACEBOOK</div></div>
                      <div className="divider-mask"><div className="line-dynamic"></div></div>
                    </a>
                  </div>
                </div>
              </div>

              <div role="listitem" className="team-item w-dyn-item">
                <div className="thumbnail-wrapper">
                  <img src="/assets/images/testimonials/660c1db806348c58b1430372_Thumb%20Photo.png" loading="lazy" width="428" height="277" alt="" className="team-thumbnail" />
                </div>
                <div className="team-content-wrapper">
                  <div className="team-content">
                    <h3>Russell Erdman</h3>
                    <div className="text-normal color-grey">Co-Founder, Head Capital</div>
                  </div>
                  <div className="team-social">
                    <a href="https://linkedin.com/" className="team-linkedin w-inline-block">
                      <div className="divider-mask"><div className="line-dynamic"></div></div>
                      <div className="social-team-card-wrapper"><div className="text-small">LINKEDIN</div></div>
                      <div className="divider-mask"><div className="line-dynamic"></div></div>
                    </a>
                    <a href="https://www.facebook.com/" className="team-facebook w-inline-block">
                      <div className="social-team-card-wrapper"><div className="text-small">FACEBOOK</div></div>
                      <div className="divider-mask"><div className="line-dynamic"></div></div>
                    </a>
                  </div>
                </div>
              </div>

              <div role="listitem" className="team-item w-dyn-item">
                <div className="thumbnail-wrapper">
                  <img src="/assets/images/testimonials/660c1db86397c0b11c12f7af_Thumb%20Photo-2.png" loading="lazy" width="428" height="277" alt="" className="team-thumbnail" />
                </div>
                <div className="team-content-wrapper">
                  <div className="team-content">
                    <h3>Eunice Konopelski</h3>
                    <div className="text-normal color-grey">President &amp; COO</div>
                  </div>
                  <div className="team-social">
                    <a href="https://linkedin.com/" className="team-linkedin w-inline-block">
                      <div className="divider-mask"><div className="line-dynamic"></div></div>
                      <div className="social-team-card-wrapper"><div className="text-small">LINKEDIN</div></div>
                      <div className="divider-mask"><div className="line-dynamic"></div></div>
                    </a>
                    <a href="#" className="team-facebook w-inline-block w-condition-invisible">
                      <div className="social-team-card-wrapper"><div className="text-small">FACEBOOK</div></div>
                      <div className="divider-mask"><div className="line-dynamic"></div></div>
                    </a>
                  </div>
                </div>
              </div>

              <div role="listitem" className="team-item w-dyn-item">
                <div className="thumbnail-wrapper">
                  <img src="/assets/images/testimonials/660c1db881a0536ccc4a9f92_Thumb%20Photo-3.png" loading="lazy" width="428" height="277" alt="" className="team-thumbnail" />
                </div>
                <div className="team-content-wrapper">
                  <div className="team-content">
                    <h3>Rachel Feeney</h3>
                    <div className="text-normal color-grey">CTO</div>
                  </div>
                  <div className="team-social">
                    <a href="https://linkedin.com/" className="team-linkedin w-inline-block">
                      <div className="divider-mask"><div className="line-dynamic"></div></div>
                      <div className="social-team-card-wrapper"><div className="text-small">LINKEDIN</div></div>
                      <div className="divider-mask"><div className="line-dynamic"></div></div>
                    </a>
                    <a href="https://www.facebook.com/" className="team-facebook w-inline-block">
                      <div className="social-team-card-wrapper"><div className="text-small">FACEBOOK</div></div>
                      <div className="divider-mask"><div className="line-dynamic"></div></div>
                    </a>
                  </div>
                </div>
              </div>

              <div role="listitem" className="team-item w-dyn-item">
                <div className="thumbnail-wrapper">
                  <img src="/assets/images/testimonials/660c1db83c79a4ee56e484b0_Thumb%20Photo-1.png" loading="lazy" width="428" height="277" alt="" className="team-thumbnail" />
                </div>
                <div className="team-content-wrapper">
                  <div className="team-content">
                    <h3>Ryan Bauch</h3>
                    <div className="text-normal color-grey">CCO</div>
                  </div>
                  <div className="team-social">
                    <a href="https://linkedin.com/" className="team-linkedin w-inline-block">
                      <div className="divider-mask"><div className="line-dynamic"></div></div>
                      <div className="social-team-card-wrapper"><div className="text-small">LINKEDIN</div></div>
                      <div className="divider-mask"><div className="line-dynamic"></div></div>
                    </a>
                    <a href="https://www.facebook.com/" className="team-facebook w-inline-block">
                      <div className="social-team-card-wrapper"><div className="text-small">FACEBOOK</div></div>
                      <div className="divider-mask"><div className="line-dynamic"></div></div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="global-padding">
          <div className="section-heading"><h2 className="heading-2-style">About us in figures</h2></div>
          <div className="benefit-grid">
            <div className="benefit-wrapper">
              <div className="divider-mask-top"><div className="line-dynamic color-line-green"></div></div>
              <div className="benefit-container">
                <div className="benefit-title"><h2 className="heading-1-style">95%</h2></div>
                <div className="benefit-subtitle"><h3>Client Satisfaction Rate</h3></div>
                <div className="advantage-copy"><p className="text-paragraph-medium">We take pride in achieving a 95% client satisfaction rate, ensuring top-notch service quality and meeting our clients' needs</p></div>
              </div>
              <div className="divider-mask-bottom"><div className="line-dynamic color-line-green"></div></div>
            </div>

            <div className="benefit-wrapper">
              <div className="divider-mask-top"><div className="line-dynamic color-line-green"></div></div>
              <div className="benefit-container">
                <div className="benefit-title"><h2 className="heading-1-style">300+</h2></div>
                <div className="benefit-subtitle"><h3>Successful Events Organized:</h3></div>
                <div className="advantage-copy"><p className="text-paragraph-medium">With over 300 successfully organized events of various scales and formats, our experience and expertise guarantee flawless event execution</p></div>
              </div>
              <div className="divider-mask-bottom"><div className="line-dynamic color-line-green"></div></div>
            </div>

            <div className="benefit-wrapper">
              <div className="divider-mask-top"><div className="line-dynamic color-line-green"></div></div>
              <div className="benefit-container">
                <div className="benefit-title"><h2 className="heading-1-style">20+</h2></div>
                <div className="benefit-subtitle"><h3>Years of Industry Experience</h3></div>
                <div className="advantage-copy"><p className="text-paragraph-medium">With over two decades of industry experience, we've built valuable connections, honed our skills, and adapted to diverse client needs</p></div>
              </div>
              <div className="divider-mask-bottom"><div className="line-dynamic color-line-green"></div></div>
            </div>
          </div>
        </div>
      </section>

      <Quote />
      <CTA />
      <Testimonials />
      <SiteFooter />
    </div>
  );
}


