// This simulates an API response with event data
export const eventsData = [
  {
    id: 1,
    name: "Summer Music Festival 2026",
    date: "June 5, 2026",
    time: "5:00 PM",
    location: "Central Park, New York",
    description: "Experience an unforgettable evening with live performances from top artists across multiple genres. Live music, food trucks, and more!",
    image: "/music.webp",
    category: "Music",
    capacity: 5000
  },
  {
    id: 2,
    name: "Tech Innovation Summit",
    date: "April 22, 2026",
    time: "9:00 AM",
    location: "San Francisco Convention Center",
    description: "Join industry leaders and innovators for a day of cutting-edge technology discussions, networking, and workshops. Discover the future of tech.",
    image: "/tech innovation.jpg",
    category: "Technology",
    capacity: 1000
  },
  {
    id: 3,
    name: "Yoga & Wellness Retreat",
    date: "May 8, 2026",
    time: "7:00 AM",
    location: "Bali, Indonesia",
    description: "Reconnect with yourself through yoga, meditation, and wellness activities. Enjoy a peaceful retreat in a serene natural setting.",
    image: "/yoga.jpeg",
    category: "Wellness",
    capacity: 50
  },
  {
    id: 4,
    name: "Food & Wine Festival",
    date: "July 15, 2026",
    time: "12:00 PM",
    location: "Napa Valley, California",
    description: "Indulge in gourmet food and fine wine from world-class chefs and wineries. A celebration of food and culture.",
    image: "/Food.jpg",
    category: "Food & Drink",
    capacity: 2000
  },
  {
    id: 5,
    name: "Contemporary Art Exhibition",
    date: "Aug 10, 2026",
    time: "10:00 AM",
    location: "Museum of Modern Art",
    description: "Explore cutting-edge artworks from contemporary artists from around the world. An immersive gallery experience.",
    image: "/contemporary art.jpg",
    category: "Art",
    capacity: 500
  },
  {
    id: 6,
    name: "Digital Marketing Masterclass",
    date: "April 30, 2026",
    time: "2:00 PM",
    location: "Online Event",
    description: "Learn the latest digital marketing strategies from industry experts. Perfect for entrepreneurs and marketing professionals.",
    image: "/Digital marketing.webp",
    category: "Business",
    capacity: 300
  },
  {
    id: 7,
    name: "Startup Pitch Competition",
    date: "May 20, 2026",
    time: "6:00 PM",
    location: "Silicon Valley Hub",
    description: "Watch innovative startups pitch their ideas to top investors. Network with entrepreneurs and venture capitalists.",
    image: "/Start up pitch.webp",
    category: "Business",
    capacity: 200
  }
];

// Simulates an API call with a delay
export const fetchEvents = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(eventsData);
    }, 1000); // 1 second delay to simulate network request
  });
};
