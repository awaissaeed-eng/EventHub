function Hero() {
  const scrollToEvents = () => {
    const element = document.getElementById('events');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1 className="hero-heading">Discover Events Near You</h1>
        <p className="hero-subheading">
          Find and join amazing events happening in your city. From tech conferences to music festivals, discover experiences that matter to you.
        </p>
        <button className="cta-button" onClick={scrollToEvents}>
          Explore Events
        </button>
      </div>
      <div className="hero-decoration">
        <div className="decoration-circle circle-1"></div>
        <div className="decoration-circle circle-2"></div>
        <div className="decoration-circle circle-3"></div>
      </div>
    </section>
  );
}

export default Hero;
