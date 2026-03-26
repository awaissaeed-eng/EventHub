import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Events from './components/Events';
import Contact from './components/Contact';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Events />
      <Contact />
      <footer className="footer">
        <p>&copy; 2026 EventHub. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
