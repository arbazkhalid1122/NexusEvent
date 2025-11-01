import Navbar from '../components/Navbar';
import SiteFooter from '../components/SiteFooter';

export default function Page() {
  return (
    <div className="main-wrapper">
      <Navbar />
      {/* Back-to-top anchor for shared footer */}
      <div id="Section-Hero" style={{display:'none'}}></div>

      <section id="Hero-Events" className="global-hero-section">
        <div className="global-padding">
          <div className="cms-hedlines">
            <div className="section-heading">
              <h1 className="heading-1-style color-text-white">Our Primary Offerings Variants Events</h1>
            </div>
            <div className="section-copy-wrapper">
              <div>
                Welcome to Variants Events! We specialize in crafting unforgettable experiences for a variety of occasions, including corporate gatherings, private celebrations, and community events. With meticulous attention to detail and a commitment to excellence, we bring your vision to life, ensuring every aspect of your event is flawlessly executed. Whether you're planning a team-building retreat, a wedding reception, or a community festival, trust Variants Events to exceed your expectations and create lasting memories.<br />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="global-padding">
          <div className="w-dyn-list">
            <div role="list" className="cms-grid w-dyn-items">
              <div role="listitem" className="cms-wrapper w-dyn-item">
                <a href="/variants-events/camping" className="card-wrapper w-inline-block">
                  <div className="card-thumbnail">
                    <img
                      className="thumbnail-card"
                      src="/assets/cdn.prod.website-files.com/65f1f8f73e41e4620092820f/6618ffdf5384fa9bd527119a_Camping_.jpg"
                      width="650"
                      height="277"
                      alt=""
                      sizes="(max-width: 767px) 94vw, 46vw"
                      loading="lazy"
                      srcSet="https://cdn.prod.website-files.com/65f1f8f73e41e4620092820f/6618ffdf5384fa9bd527119a_Camping_-p-500.jpg 500w, https://cdn.prod.website-files.com/65f1f8f73e41e4620092820f/6618ffdf5384fa9bd527119a_Camping_-p-800.jpg 800w, https://cdn.prod.website-files.com/65f1f8f73e41e4620092820f/6618ffdf5384fa9bd527119a_Camping_-p-1080.jpg 1080w, https://cdn.prod.website-files.com/65f1f8f73e41e4620092820f/6618ffdf5384fa9bd527119a_Camping_.jpg 1920w"
                    />
                  </div>
                  <div className="card-content">
                    <h3>Camping Embrace Nature</h3>
                    <div className="text-medium color-text-grey">Nexus Events' camping excursions offer an immersive escape into the heart of nature, where adventure awaits at every turn.</div>
                  </div>
                  <div className="card-bottom">
                    <div className="active-icon-dynamic"><img src="/assets/icons/ui/65e715745d310bb76e888d31_Vectors-Wrapper.svg" loading="lazy" alt="" /></div>
                    <div className="divider-mask"><div className="line-dynamic color-line-green"></div></div>
                  </div>
                </a>
              </div>

              <div role="listitem" className="cms-wrapper w-dyn-item">
                <a href="/variants-events/trade-events" className="card-wrapper w-inline-block">
                  <div className="card-thumbnail">
                    <img
                      className="thumbnail-card"
                      src="/assets/cdn.prod.website-files.com/65f1f8f73e41e4620092820f/660c2265a355494f2329a7fe_expo.jpg"
                      width="650"
                      height="277"
                      alt=""
                      sizes="(max-width: 767px) 94vw, 46vw"
                      loading="lazy"
                      srcSet="https://cdn.prod.website-files.com/65f1f8f73e41e4620092820f/660c2265a355494f2329a7fe_expo-p-500.jpg 500w, https://cdn.prod.website-files.com/65f1f8f73e41e4620092820f/660c2265a355494f2329a7fe_expo-p-800.jpg 800w, https://cdn.prod.website-files.com/65f1f8f73e41e4620092820f/660c2265a355494f2329a7fe_expo-p-1080.jpg 1080w, https://cdn.prod.website-files.com/65f1f8f73e41e4620092820f/660c2265a355494f2329a7fe_expo.jpg 1920w"
                    />
                  </div>
                  <div className="card-content">
                    <h3>Trade Events</h3>
                    <div className="text-medium color-text-grey">Our trade events serve as pivotal platforms for industry growth, bringing together key players to explore trends and forge partnerships. With meticulous planning, we propel businesses towards success.</div>
                  </div>
                  <div className="card-bottom">
                    <div className="active-icon-dynamic"><img src="/assets/icons/ui/65e715745d310bb76e888d31_Vectors-Wrapper.svg" loading="lazy" alt="" /></div>
                    <div className="divider-mask"><div className="line-dynamic color-line-green"></div></div>
                  </div>
                </a>
              </div>

              <div role="listitem" className="cms-wrapper w-dyn-item">
                <a href="/variants-events/corporate-events" className="card-wrapper w-inline-block">
                  <div className="card-thumbnail">
                    <img
                      className="thumbnail-card"
                      src="/assets/cdn.prod.website-files.com/65f1f8f73e41e4620092820f/660c20ae9dec99a29b42c79b_Corporate.webp"
                      width="650"
                      height="277"
                      alt=""
                      sizes="(max-width: 767px) 94vw, 46vw"
                      loading="lazy"
                      srcSet="https://cdn.prod.website-files.com/65f1f8f73e41e4620092820f/660c20ae9dec99a29b42c79b_Corporate-p-500.webp 500w, https://cdn.prod.website-files.com/65f1f8f73e41e4620092820f/660c20ae9dec99a29b42c79b_Corporate-p-800.webp 800w, https://cdn.prod.website-files.com/65f1f8f73e41e4620092820f/660c20ae9dec99a29b42c79b_Corporate-p-1080.webp 1080w, https://cdn.prod.website-files.com/65f1f8f73e41e4620092820f/660c20ae9dec99a29b42c79b_Corporate-p-1600.webp 1600w, https://cdn.prod.website-files.com/65f1f8f73e41e4620092820f/660c20ae9dec99a29b42c79b_Corporate.webp 1920w"
                    />
                  </div>
                  <div className="card-content">
                    <h3>Corporate Events</h3>
                    <div className="text-medium color-text-grey">Specializing in corporate events, Nexus Events fosters connections and vibrant company cultures. With a focus on aligning with organizational goals and enhancing engagement, we ensure every gathering leaves a lasting impression.</div>
                  </div>
                  <div className="card-bottom">
                    <div className="active-icon-dynamic"><img src="/assets/icons/ui/65e715745d310bb76e888d31_Vectors-Wrapper.svg" loading="lazy" alt="" /></div>
                    <div className="divider-mask"><div className="line-dynamic color-line-green"></div></div>
                  </div>
                </a>
              </div>

              <div role="listitem" className="cms-wrapper w-dyn-item">
                <a href="/variants-events/catering-events" className="card-wrapper w-inline-block">
                  <div className="card-thumbnail">
                    <img
                      src="/assets/cdn.prod.website-files.com/65f1f8f73e41e4620092820f/660c217033253b148b5a0e30_Catering.jpg"
                      loading="lazy"
                      width="650"
                      height="277"
                      alt=""
                      className="thumbnail-card"
                    />
                  </div>
                  <div className="card-content">
                    <h3>Catering Events</h3>
                    <div className="text-medium color-text-grey">Nexus Events excels in catering events that tantalize taste buds and elevate hospitality. From intimate gatherings to grand celebrations, our events blend cuisine, presentation, and service seamlessly.</div>
                  </div>
                  <div className="card-bottom">
                    <div className="active-icon-dynamic"><img src="/assets/icons/ui/65e715745d310bb76e888d31_Vectors-Wrapper.svg" loading="lazy" alt="" /></div>
                    <div className="divider-mask"><div className="line-dynamic color-line-green"></div></div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}


