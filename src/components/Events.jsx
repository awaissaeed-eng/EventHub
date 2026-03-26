import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Eventcard from './Eventcard';
import { fetchEvents } from '../data/events';

function Events() {
  // State management
  const [events, setEvents] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Simulate fetching data from an API using useEffect
  useEffect(() => {
    const loadEvents = async () => {
      try {
        setIsLoading(true);
        setError(null);
        // Simulate API call with fetchEvents function
        const data = await fetchEvents();
        setEvents(data);
      } catch (err) {
        setError('Failed to load events. Please try again later.');
        console.error('Error loading events:', err);
      } finally {
        setIsLoading(false);
      }
    };

    loadEvents();
  }, []); // Empty dependency array means this runs once on component mount

  // Filter events based on search term (real-time filtering)
  const filteredEvents = events.filter(event =>
    event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Clear search
  const clearSearch = () => {
    setSearchTerm('');
  };

  // Animation variants for container (parent)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Delay between each card animation
      }
    }
  };

  // Animation variants for individual cards (children)
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50 // Start 50px below
    },
    visible: { 
      opacity: 1, 
      y: 0, // Move to original position
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="events" className="events-section">
      <div className="events-container">
        {/* Title with fade-in animation */}
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Featured Events
        </motion.h2>
        
        {/* Search Bar with fade-in animation */}
        <motion.div 
          className="search-container"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="search-icon">🔍</span>
          <input
            type="text"
            className="search-bar"
            placeholder="Search events by name, location, category, or description..."
            value={searchTerm}
            onChange={handleSearchChange}
            disabled={isLoading}
          />
          {searchTerm && (
            <button className="clear-search" onClick={clearSearch} aria-label="Clear search">
              ✕
            </button>
          )}
        </motion.div>

        {/* Search Results Info */}
        {searchTerm && !isLoading && (
          <motion.p 
            className="search-info"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            Found {filteredEvents.length} event{filteredEvents.length !== 1 ? 's' : ''} matching "{searchTerm}"
          </motion.p>
        )}

        {/* Loading State */}
        {isLoading && (
          <motion.div 
            className="loading-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="spinner"></div>
            <p>Loading events...</p>
          </motion.div>
        )}

        {/* Error State */}
        {error && !isLoading && (
          <motion.div 
            className="error-container"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            <p className="error-message">{error}</p>
          </motion.div>
        )}

        {/* Events Grid with stagger animation */}
        {!isLoading && !error && (
          <motion.div 
            className="events-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {filteredEvents.length > 0 ? (
              filteredEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  variants={cardVariants}
                  custom={index}
                >
                  <Eventcard event={event} />
                </motion.div>
              ))
            ) : (
              <motion.div 
                className="no-results"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <p>No events found matching your search.</p>
                <button onClick={clearSearch} className="reset-button">
                  Clear Search
                </button>
              </motion.div>
            )}
          </motion.div>
        )}
      </div>
    </section>
  );
}

export default Events;
