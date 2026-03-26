import { useState } from 'react';
import Eventcard from './Eventcard';
import { eventsData } from '../data/events';

function Events() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredEvents = eventsData.filter(event =>
    event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="events" className="events-section">
      <div className="events-container">
        <h2 className="section-title">Featured Events</h2>
        
        <div className="search-container">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            className="search-bar"
            placeholder="Search events by name, location, or description..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="events-grid">
          {filteredEvents.length > 0 ? (
            filteredEvents.map(event => (
              <Eventcard key={event.id} event={event} />
            ))
          ) : (
            <p className="no-results">No events found. Try a different search term.</p>
          )}
        </div>
      </div>
    </section>
  );
}

export default Events;
