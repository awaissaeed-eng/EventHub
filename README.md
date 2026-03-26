<<<<<<< HEAD
# 🎉 EventHub

A modern, dynamic event discovery platform built with React and Framer Motion. EventHub allows users to explore, search, and register for various events including music festivals, tech conferences, wellness retreats, and more.

![React](https://img.shields.io/badge/React-19.2.4-61DAFB?style=flat&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8.0.1-646CFF?style=flat&logo=vite&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.38.0-FF0055?style=flat&logo=framer&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green.svg)

---

## 📋 About

EventHub is a responsive single-page application (SPA) designed to help users discover and explore upcoming events. The platform features a clean, modern UI with smooth scroll animations, real-time search functionality, and dynamic data loading that simulates API interactions. Built with React and powered by Vite for lightning-fast development and optimized production builds.

---

## ✨ Features

### 🎯 Core Functionality

- **Dynamic Navigation Bar**
  - Sticky header with smooth scroll navigation
  - Responsive hamburger menu for mobile devices
  - Brand logo with interactive hover effects

- **Hero Section**
  - Full-width background image with blur effect
  - Gradient overlay for enhanced text readability
  - Animated content with sequential fade-in effects
  - Call-to-action button with smooth scroll to events

- **Featured Events Section**
  - Grid layout displaying event cards (7 events)
  - Each card includes:
    - Event image with category badge
    - Event name and description
    - Date, time, and location details
    - Capacity information
    - Interactive "Register Now" button

- **Real-Time Search & Filter**
  - Live search bar with instant filtering
  - Searches across event name, location, category, and description
  - Search result counter
  - Clear search button for quick reset
  - "No results" message with reset option

- **Contact Form**
  - Fully functional contact form with validation
  - Name, email, and message fields
  - Form submission with user feedback
  - Animated form elements

### 🎨 Design & Responsiveness

- **Fully Responsive Design**
  - Mobile-first approach
  - Optimized for phones (320px+), tablets (768px+), and desktops (1200px+)
  - Adaptive grid layouts that adjust to screen size
  - Touch-friendly interface elements

- **Modern UI/UX**
  - Clean, minimalist design with purple gradient theme
  - Custom CSS with Google Fonts (Poppins)
  - Consistent spacing and typography
  - Smooth transitions and hover effects
  - Professional color scheme with high contrast

- **Accessibility**
  - Semantic HTML structure
  - ARIA labels for interactive elements
  - Keyboard navigation support
  - Screen reader friendly

### 🚀 Advanced Features

- **Scroll Animations (Framer Motion)**
  - Fade-up animations for event cards
  - Stagger effect (150ms delay between cards)
  - Viewport detection - animations trigger once on scroll
  - Hero section sequential animations
  - Interactive hover and tap animations
  - Smooth page transitions

- **Dynamic Data Management**
  - Simulated API data fetching with `useEffect`
  - Loading states with animated spinner
  - Error handling with user-friendly messages
  - Async data loading with 1-second delay
  - State management with React hooks

- **Interactive Elements**
  - Event cards lift on hover (8px elevation)
  - Button scale animations (hover: 1.05x, tap: 0.95x)
  - Smooth scroll navigation
  - Form input focus states
  - Mobile menu toggle animation

- **Performance Optimizations**
  - Component-based architecture for reusability
  - PropTypes validation for type safety
  - Efficient re-rendering with React hooks
  - GPU-accelerated animations
  - Optimized image loading

---

## 🛠️ Technologies

### Frontend Framework
- **React 19.2.4** - Modern UI library with hooks
- **React DOM 19.2.4** - React rendering for web

### Build Tool
- **Vite 8.0.1** - Next-generation frontend tooling
- **@vitejs/plugin-react 6.0.1** - Official React plugin for Vite

### Animation Library
- **Framer Motion 12.38.0** - Production-ready animation library

### Development Tools
- **ESLint 9.39.4** - Code linting and quality
- **PropTypes 15.8.1** - Runtime type checking

### Styling
- **Custom CSS3** - Modern CSS with Flexbox and Grid
- **Google Fonts** - Poppins font family

### Language
- **JavaScript (ES6+)** - Modern JavaScript features
- **JSX** - React component syntax

---

## 🚀 How to Run

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/EventHub.git
   cd EventHub
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   Navigate to http://localhost:5173
   ```

### Build for Production

```bash
npm run build
```

The optimized production build will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

### Lint Code

```bash
npm run lint
```

---

## 📁 Project Structure

```
EventHub/
├── public/
│   ├── event.webp              # Hero background image
│   ├── music.webp              # Event images
│   ├── tech innovation.jpg
│   ├── yoga.jpeg
│   ├── Food.jpg
│   ├── contemporary art.jpg
│   ├── Digital marketing.webp
│   ├── Start up pitch.webp
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Navigation component
│   │   ├── Hero.jsx            # Hero section with background
│   │   ├── Events.jsx          # Events grid with search
│   │   ├── Eventcard.jsx       # Individual event card
│   │   └── Contact.jsx         # Contact form
│   ├── data/
│   │   └── events.js           # Event data and API simulation
│   ├── styles/
│   │   └── main.css            # Global styles
│   ├── App.jsx                 # Main app component
│   └── main.jsx                # App entry point
├── index.html                  # HTML template
├── vite.config.js              # Vite configuration
├── package.json                # Dependencies and scripts
└── README.md                   # Project documentation
```

---

## 📸 Screenshots

### Homepage - Hero Section
![Hero Section](screenshots/hero-section.png)
*Full-width hero with blurred background image and animated content*

### Featured Events Grid
![Events Grid](screenshots/events-grid.png)
*Responsive event cards with search functionality and scroll animations*

### Event Card Details
![Event Card](screenshots/event-card.png)
*Individual event card with category badge, details, and register button*

### Mobile Responsive View
![Mobile View](screenshots/mobile-view.png)
*Fully responsive design optimized for mobile devices*

### Search & Filter
![Search Feature](screenshots/search-filter.png)
*Real-time search with instant filtering and result counter*

---

## 🎯 Extra Features & Enhancements

### Animation System
- **Scroll-triggered animations** using Framer Motion's `whileInView`
- **Stagger effect** for sequential card appearances
- **Viewport detection** ensures animations play only once
- **Interactive animations** on hover and tap for better UX

### State Management
- **Loading states** with animated spinner during data fetch
- **Error handling** with user-friendly error messages
- **Search state** for real-time filtering
- **Form state** management for contact form

### User Experience
- **Smooth scroll navigation** between sections
- **Search result counter** showing filtered event count
- **Clear search button** for quick reset
- **No results message** with helpful reset action
- **Form validation** with instant feedback

### Code Quality
- **Component-based architecture** for maintainability
- **PropTypes validation** for type safety
- **Reusable components** following DRY principles
- **Clean code structure** with separation of concerns
- **ESLint configuration** for code quality

### Performance
- **Lazy loading** ready architecture
- **Optimized animations** using GPU acceleration
- **Efficient re-renders** with React hooks
- **Fast build times** with Vite
- **Production-ready** optimized bundle

---

## 🔮 Future Enhancements

- [ ] Backend API integration for real event data
- [ ] User authentication and registration system
- [ ] Event booking and payment integration
- [ ] User dashboard for managing registrations
- [ ] Event categories filter dropdown
- [ ] Date range filtering
- [ ] Sorting options (by date, popularity, capacity)
- [ ] Pagination for large event lists
- [ ] Favorite/bookmark events feature
- [ ] Social media sharing
- [ ] Event calendar view
- [ ] Email notifications
- [ ] Dark mode toggle

---

## 👨‍💻 Author

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- Event images from various sources
- Framer Motion for animation capabilities
- React community for excellent documentation
- Vite team for the amazing build tool

---

## 📞 Support

For support, email your.email@example.com or open an issue in the GitHub repository.

---

<div align="center">
  <p>Made with ❤️ and React</p>
  <p>⭐ Star this repo if you find it helpful!</p>
</div>
=======
🗓️ **EventHub** 
A modern, responsive single-page web application built with React and Framer Motion. EventHub allows users to seamlessly explore, search and discover upcoming local events with fluid animations and a mobile-first design.

🔗 Live Demo

🚀 **Features**
**Dynamic Navigation:** Smooth transitions between Home, Events, and Contact sections.
**Hero Section:** High-impact "Discover Events Near You" headline with motion effects.
**Event Discovery:**
  **Live Search:** Filter events by name or location in real-time.
  **Interactive Cards:** Detailed views for dates, times, and descriptions.
**Fully Responsive:** Optimized experience across mobile, tablet, and desktop.

🛠️ **Tech Stack**
**Frontend:** React.js, Vite
**Animations:** Framer Motion
**Styling:** CSS3 (Modern Flexbox/Grid)
**Language:** JavaScript (ES6+)

📸 **Screenshots**
**Homepage**

**HeroFeatured**

**EventsMobile View**

⚙️ **Installation & Setup**
Follow these steps to run the project locally:
1.  **Clone the repository**
     git clone https://github.com
     cd EventHub
2.  **Install dependencies**
     npm install
3.  **Start the development server**
     npm run dev
    
📍 Open http://localhost:5173 in your browser.

👤 **Author**
Awais Saeed
**GitHub:** @awaissaeed-eng
**LinkedIn:** Your Name

📄 **License**
This project is licensed under the MIT License.
>>>>>>> 81bd7ec6b6adb9a82db9f962be185e6e0086fe7b
