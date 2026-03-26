import { motion } from 'framer-motion';

function Hero() {
  const scrollToEvents = () => {
    const element = document.getElementById('events');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-background">
        <img src="/event.webp" alt="Events Background" />
      </div>
      <div className="hero-content">
        <motion.h1 
          className="hero-heading"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Discover Events Near You
        </motion.h1>
        <motion.p 
          className="hero-subheading"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Find and join amazing events happening in your city. From tech conferences to music festivals, discover experiences that matter to you.
        </motion.p>
        <motion.button 
          className="cta-button" 
          onClick={scrollToEvents}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Explore Events
        </motion.button>
      </div>
    </section>
  );
}

export default Hero;
