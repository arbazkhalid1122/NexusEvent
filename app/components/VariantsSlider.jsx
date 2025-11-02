"use client";

import { useState } from 'react';

export default function VariantsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideCount = 4;

  const goPrev = () => setCurrentIndex((i) => (i - 1 + slideCount) % slideCount);
  const goNext = () => setCurrentIndex((i) => (i + 1) % slideCount);
  return (
    <section className="section">
      <div className="global-padding">
        <div className="section-heading">
          <h2 className="heading-2-style">Our Variants Events</h2>
        </div>
        <div className="slider w-slider" role="region" aria-label="carousel">
          <div
            className="mask-slider w-slider-mask"
            id="w-slider-mask-0"
          >
            <div
              className="slides-track"
              style={{
                whiteSpace: 'nowrap',
                transform: `translateX(-${currentIndex * 100}%)`,
                transition: 'transform 0.4s ease',
              }}
            >
            <div className="slide w-slide" aria-label="1 of 4" role="group">
              <div className="cms-list-wrapper w-dyn-list">
                <div role="list" className="cms-list w-dyn-items">
                  <div role="listitem" className="cms-card w-dyn-item">
                    <a href="/variant-events" className="card-wrapper w-inline-block">
                      <div className="card-thumbnail">
                        <img
                          className="thumbnail-card"
                          src="/assets/cdn.prod.website-files.com/65f1f8f73e41e4620092820f/6618ffdf5384fa9bd527119a_Camping_.jpg"
                          width="650"
                          height="277"
                          alt=""
                          sizes="(max-width: 479px) 100vw, (max-width: 767px) 66vw, (max-width: 991px) 65vw, 640px"
                          loading="lazy"
                        />
                      </div>
                      <div className="card-content">
                        <h3>Camping Embrace Nature</h3>
                        <div className="text-medium color-text-grey">
                          Nexus Events' camping excursions offer an immersive escape into the heart of nature, where adventure awaits at every turn.
                        </div>
                      </div>
                      <div className="card-bottom">
                        <div className="active-icon-dynamic" style={{ height: '3.5rem', width: '56px' }}>
                          <img src="/assets/icons/ui/65e715745d310bb76e888d31_Vectors-Wrapper.svg" loading="lazy" alt="" className="active-arrow" />
                        </div>
                        <div className="divider-mask-bottom">
                          <div className="line-dynamic color-line-green"></div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="slide w-slide" aria-label="2 of 4" role="group">
              <div className="cms-list-wrapper w-dyn-list">
                <div role="list" className="cms-list w-dyn-items">
                  <div role="listitem" className="cms-card w-dyn-item">
                    <a href="/variant-events" className="card-wrapper w-inline-block">
                      <div className="card-thumbnail">
                        <img
                          className="thumbnail-card"
                          src="/assets/cdn.prod.website-files.com/65f1f8f73e41e4620092820f/660c2265a355494f2329a7fe_expo.jpg"
                          width="650"
                          height="277"
                          alt=""
                          loading="lazy"
                        />
                      </div>
                      <div className="card-content">
                        <h3>Trade Events</h3>
                        <div className="text-medium color-text-grey">
                          Our trade events serve as pivotal platforms for industry growth, bringing together key players to explore trends and forge partnerships.
                          With meticulous planning, we propel businesses towards success.
                        </div>
                      </div>
                      <div className="card-bottom">
                        <div className="active-icon-dynamic" style={{ height: '3.5rem', width: '56px' }}>
                          <img src="/assets/icons/ui/65e715745d310bb76e888d31_Vectors-Wrapper.svg" loading="lazy" alt="" className="active-arrow" />
                        </div>
                        <div className="divider-mask-bottom">
                          <div className="line-dynamic color-line-green"></div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="slide w-slide" aria-label="3 of 4" role="group">
              <div className="cms-list-wrapper w-dyn-list">
                <div role="list" className="cms-list w-dyn-items">
                  <div role="listitem" className="cms-card w-dyn-item">
                    <a href="/variant-events" className="card-wrapper w-inline-block">
                      <div className="card-thumbnail">
                        <img
                          className="thumbnail-card"
                          src="/assets/cdn.prod.website-files.com/65f1f8f73e41e4620092820f/660c20ae9dec99a29b42c79b_Corporate.webp"
                          width="650"
                          height="277"
                          alt=""
                          loading="lazy"
                        />
                      </div>
                      <div className="card-content">
                        <h3>Corporate Events</h3>
                        <div className="text-medium color-text-grey">
                          Specializing in corporate events, Nexus Events fosters connections and vibrant company cultures.
                          With a focus on aligning with organizational goals and enhancing engagement, we ensure every gathering leaves a lasting impression.
                        </div>
                      </div>
                      <div className="card-bottom">
                        <div className="active-icon-static">
                          <img src="/assets/icons/ui/65e715745d310bb76e888d31_Vectors-Wrapper.svg" loading="lazy" alt="" className="active-arrow" />
                        </div>
                        <div className="divider-mask-bottom">
                          <div className="line-static color-line-green"></div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="slide w-slide" aria-label="4 of 4" role="group">
              <div className="cms-list-wrapper w-dyn-list">
                <div role="list" className="cms-list w-dyn-items">
                  <div role="listitem" className="cms-card w-dyn-item">
                    <a href="/variant-events" className="card-wrapper w-inline-block">
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
                        <div className="text-medium color-text-grey">
                          Nexus Events excels in catering events that tantalize taste buds and elevate hospitality. From intimate gatherings to grand celebrations, our events blend cuisine, presentation, and service seamlessly.
                        </div>
                      </div>
                      <div className="card-bottom">
                        <div className="active-icon-static">
                          <img src="/assets/icons/ui/65e715745d310bb76e888d31_Vectors-Wrapper.svg" loading="lazy" alt="" className="active-arrow" />
                        </div>
                        <div className="divider-mask-bottom">
                          <div className="line-static color-line-green"></div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
          <div
            className="button-left-slider-cms w-slider-arrow-left"
            role="button"
            tabIndex={0}
            aria-controls="w-slider-mask-0"
            aria-label="previous slide"
            onClick={goPrev}
          >
            <img src="/assets/icons/ui/65e70fc7afb5cf8b041775ae_Vectors-Wrapper.svg" loading="lazy" alt="left arrow" className="button-arrow" />
          </div>
          <div
            className="button-right-slider-cms w-slider-arrow-right"
            role="button"
            tabIndex={0}
            aria-controls="w-slider-mask-0"
            aria-label="next slide"
            onClick={goNext}
          >
            <img src="/assets/icons/ui/65e7138e4943adcace18ea23_Vectors-Wrapper.svg" loading="lazy" alt="right arrow" className="button-arrow" />
          </div>
          <div className="slide-nav-2 w-slider-nav">
            {[0,1,2,3].map((i) => (
              <div
                key={i}
                className={`w-slider-dot ${currentIndex === i ? 'w-active' : ''}`}
                data-wf-ignore=""
                aria-label={`Show slide ${i+1} of 4`}
                aria-pressed={currentIndex === i}
                role="button"
                tabIndex={currentIndex === i ? 0 : -1}
                onClick={() => setCurrentIndex(i)}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


