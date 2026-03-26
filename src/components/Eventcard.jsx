import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

function Eventcard({ event }) {
  const handleRegister = () => {
    alert(`Registration for "${event.name}" - Coming soon!`);
  };

  return (
    <motion.div 
      className="event-card"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <div className="event-image">
        <img src={event.image} alt={event.name} />
        {event.category && (
          <span className="event-category">{event.category}</span>
        )}
      </div>
      <div className="event-content">
        <h3 className="event-name">{event.name}</h3>
        <div className="event-meta">
          <span className="event-date">📅 {event.date} · {event.time}</span>
          <span className="event-location">📍 {event.location}</span>
        </div>
        <p className="event-description">{event.description}</p>
        {event.capacity && (
          <p className="event-capacity">👥 Capacity: {event.capacity} attendees</p>
        )}
        <motion.button 
          className="register-button" 
          onClick={handleRegister}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Register Now
        </motion.button>
      </div>
    </motion.div>
  );
}

// PropTypes for type checking
Eventcard.propTypes = {
  event: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    category: PropTypes.string,
    capacity: PropTypes.number
  }).isRequired
};

export default Eventcard;
