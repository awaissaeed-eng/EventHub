function Eventcard({ event }) {
  const handleRegister = () => {
    alert(`Registration for "${event.name}" - Coming soon!`);
  };

  return (
    <div className="event-card">
      <div className="event-image">
        <img src={event.image} alt={event.name} />
      </div>
      <div className="event-content">
        <h3 className="event-name">{event.name}</h3>
        <div className="event-meta">
          <span className="event-date">📅 {event.date} · {event.time}</span>
          <span className="event-location">📍 {event.location}</span>
        </div>
        <p className="event-description">{event.description}</p>
        <button className="register-button" onClick={handleRegister}>
          Register Now
        </button>
      </div>
    </div>
  );
}

export default Eventcard;
