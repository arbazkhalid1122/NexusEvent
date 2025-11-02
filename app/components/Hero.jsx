export default function Hero() {
  return (
    <section id="Section-Hero" className="hero">
      <div className="hero-image-wrapper">
        <img
          src="/assets/images/hero/hero.jpg"
          loading="lazy"
          sizes="100vw"
          alt="a silhouette of a person sitting on a stair case"
          className="image-hero"
        />
      </div>
      <div className="hero-grid">
        <div className="hero-heading-wrapper">
          <h1 className="global-hero-head">Transforming events redefining excellence</h1>
        </div>
        <div className="hero-copy">
          <h2 className="color-text-white">95%</h2>
          <div className="text-medium">Client Satisfaction Rate</div>
          <div className="text-normal">
            We take pride in achieving a 95% client satisfaction rate, ensuring top-notch service quality and meeting our clients' needs
          </div>
        </div>
        <div className="divider-mask">
          <div className="line-static"></div>
        </div>
      </div>
    </section>
  );
}


