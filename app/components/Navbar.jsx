"use client";

import { useEffect, useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === 'Escape') setIsMenuOpen(false);
    }
    if (isMenuOpen) {
      document.addEventListener('keydown', onKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  useEffect(() => {
    function onScroll() {
      setHasScrolled(window.scrollY > 10);
    }
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <div className="navbar-wrapper">
      <div className={`navbar-main ${hasScrolled ? 'scrolled' : ''}`} style={{ display: hasScrolled ? 'none' : undefined }}>
        <div className="divider-mask-bottom-navbar">
          <div className="line-static"></div>
        </div>
        <div className="navbar-content">
          <a href="/" aria-current="page" className="brand w-nav-brand w--current">
            <img
              src="/assets/brand/66080b3201e429b99c5ce63a_Vectors-Wrapper.svg"
              loading="eager"
              alt=""
              height="24"
              className="logo-ne"
            />
          </a>
          <a
            href="#"
            className="hamburger w-button"
            aria-label="Menu"
            aria-expanded={isMenuOpen}
            onClick={(e) => {
              e.preventDefault();
              setIsMenuOpen(true);
            }}
          ></a>
        </div>
      </div>
      <div className={`nav-menu ${isMenuOpen ? 'is-open' : ''}`}>
        <div className="menu-background">
          <div className="menu-padding">
            <div className="menu-grid">
              <div className="link-wrapper">
                <div className="menu-link-button">
                  <a href="/about-us" className="menu-link" onClick={() => setIsMenuOpen(false)}>About Us</a>
                </div>
                <div className="menu-link-button">
                  <a href="/cases" className="menu-link" onClick={() => setIsMenuOpen(false)}>Cases</a>
                </div>
                <div className="menu-link-button">
                  <a href="/variant-events" className="menu-link" onClick={() => setIsMenuOpen(false)}>Events</a>
                </div>
                <div className="menu-link-button">
                  <a href="/contact" className="menu-link" onClick={() => setIsMenuOpen(false)}>Contact</a>
                </div>
              </div>
              <div className="divider-mask">
                <div className="line-static"></div>
              </div>
              <div className="nav-bar-wrapper-footer">
                <div className="menu-social">
                  <div className="social-button">
                    <a href="https://www.whatsapp.com/" target="_blank" rel="noreferrer" className="link-social w-inline-block">
                      <img src="/assets/icons/social/660ae72bb1a46212e5f7c3ff_Vectors-Wrapper.svg" loading="lazy" width="24" height="24" alt="" className="social-icons" />
                    </a>
                  </div>
                  <div className="social-button">
                    <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="link-social w-inline-block">
                      <img src="/assets/icons/social/660ae72c1f23c4991a610133_Vectors-Wrapper.svg" loading="lazy" width="24" height="24" alt="" className="social-icons" />
                    </a>
                  </div>
                  <div className="social-button">
                    <a href="https://twitter.com/" target="_blank" rel="noreferrer" className="link-social w-inline-block">
                      <img src="/assets/icons/social/660ae72c69c5f591460d1f01_Vectors-Wrapper.svg" loading="lazy" width="24" height="24" alt="" className="social-icons" />
                    </a>
                  </div>
                </div>
                <div className="contacts-menu">
                  <div>+1-555-123-4567</div>
                  <a href="mailto:info@nexusevent.com" className="link-hover w-inline-block">
                    <div>info@nexusevent.com</div>
                  </a>
                </div>
                <div className="button-wrapper">
                  <a href="/contact" className="button w-button" onClick={() => setIsMenuOpen(false)}>creater event</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="navbar-main-copy">
          <div className="divider-mask-bottom-navbar">
            <div className="line-static"></div>
          </div>
          <div className="navbar-content">
            <a href="/" aria-current="page" className="brand-copy w-nav-brand w--current">
              <img src="/assets/brand/66080b3201e429b99c5ce63a_Vectors-Wrapper.svg" loading="lazy" width="210.7871551513672" height="24" alt="" className="logo-ne" />
            </a>
            <a
              href="#"
              className="hamburger-cross w-button"
              aria-label="Close menu"
              onClick={(e) => {
                e.preventDefault();
                setIsMenuOpen(false);
              }}
            ></a>
          </div>
        </div>
      </div>
    </div>
  );
}


