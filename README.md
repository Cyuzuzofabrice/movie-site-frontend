# MovieDB - Modern Movie Database Frontend

A beautiful, responsive movie database web application built with React.js, Tailwind CSS, and Vite. Discover, search, and manage your favorite movies with a Netflix-inspired dark mode design.

![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react)
![Vite](https://img.shields.io/badge/Vite-5.0.0-646CFF?logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.3.0-06B6D4?logo=tailwind-css)
![License](https://img.shields.io/badge/License-MIT-green)

##  Features

### Pages & Routes
-  **Home Page** - Hero banner with featured movie, movie grid, search & filters
-  **Movie Details** - Full movie information with cast, rating, trailer, and descriptions
-  **Favorites** - Save and manage your favorite movies with sorting options
-  **Search & Filter** - Find movies by title, genre, year, and rating

### Components
-  **Responsive Navbar** - Mobile-friendly navigation with logo and menu
-  **Hero Banner** - Featured movie showcase with CTA buttons
-  **Movie Cards** - Beautiful cards with poster, rating, genres, and hover effects
-  **Search Bar** - Real-time movie search with icon
-  **Filter Panel** - Filter by genre, year, and minimum rating
-  **Pagination** - Navigate through movie pages smoothly
-  **Footer** - Links, social media, and copyright information

### Design Features
-  **Dark Mode Theme** - Netflix-inspired dark UI with red accents
-  **Smooth Animations** - Framer Motion animations throughout
-  **Glassmorphism** - Modern glass effect on cards and panels
-  **Fully Responsive** - Optimized for mobile, tablet, and desktop
-  **Accessible** - Semantic HTML and ARIA labels
-  **Hover Effects** - Interactive card animations and transitions

##  Quick Start

### Prerequisites
- Node.js 16+
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/Cyuzuzofabrice/movie-site-frontend.git
cd movie-site-frontend
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```
The app will open at `http://localhost:5173`

4. **Build for production**
```bash
npm run build
```

##  Project Structure

```
src/
├── components/              # Reusable UI components
│   ├── Navbar.jsx          # Navigation bar
│   ├── Hero.jsx            # Hero banner
│   ├── MovieCard.jsx       # Movie card component
│   ├── SearchBar.jsx       # Search input
│   ├── Filters.jsx         # Filter controls
│   ├── Pagination.jsx      # Pagination component
│   └── Footer.jsx          # Footer section
├── pages/                  # Page components
│   ├── Home.jsx            # Home page with movies grid
│   ├── MovieDetails.jsx    # Movie details page
│   └── Favorites.jsx       # Favorites page
├── data/                   # Data files
│   └── mockMovies.js       # Mock movie data
├── App.jsx                 # Main app component with routing
├── main.jsx                # React entry point
└── index.css              # Global styles
```

## 🎨 Design System

### Colors
- **Primary**: `#E50914` (Netflix Red)
- **Secondary**: `#221F1F` (Dark Gray)
- **Dark**: `#0F0F0F` (Near Black)
- **Accent Gold**: `#FFD700` (Rating Stars)
- **Text Light**: `#E5E5E5` (Light Gray)

### Typography
- **Font Family**: Inter, system fonts
- **Headings**: Bold with varying sizes
- **Body**: Regular weight for readability

### Components Styling
- **Cards**: Rounded with glass effect and hover animations
- **Buttons**: Primary red with dark text or outlined styles
- **Inputs**: Dark background with red borders on focus
- **Backdrop**: Dark gradient overlays on images

##  Dependencies

### Core
- **react** (18.2.0) - UI library
- **react-dom** (18.2.0) - DOM rendering
- **react-router-dom** (6.20.0) - Client-side routing

### UI & Animation
- **framer-motion** (10.16.0) - Smooth animations
- **react-icons** (4.12.0) - Icon library
- **tailwindcss** (3.3.0) - Utility CSS framework

### Development
- **vite** (5.0.0) - Build tool and dev server
- **postcss** (8.4.31) - CSS processor
- **autoprefixer** (10.4.16) - Vendor prefix automation

##  Features in Detail

### Home Page
- Featured movie hero banner with large background image
- Movie grid displaying 12 movies per page
- Real-time search functionality
- Multi-filter system (genre, year, rating)
- Pagination with page navigation
- Movie card hover effects with favorite button

### Movie Details Page
- Large movie poster and backdrop images
- Complete movie information (rating, runtime, release date)
- Cast member display
- Embedded YouTube trailer
- Genre badges
- Add/remove from favorites button
- Back navigation button

### Favorites Page
- Display all saved favorite movies
- Sort by rating, year, or title
- Remove from favorites functionality
- Empty state with browse button
- Smooth animations on add/remove

### Navigation
- Sticky navbar with logo and menu items
- Mobile hamburger menu
- Search icon with search bar
- Active page indicator
- Responsive design

### Search & Filter
- Real-time title search
- Genre filter dropdown
- Year filter dropdown
- Rating minimum slider
- Results counter
- No results message

## 💾 Local Storage

The app uses browser's localStorage to persist favorites:
- Saves automatically when movies are added/removed
- Loads on app startup
- No backend required for demo

##  API Integration

To connect to a real API (like TMDB):

1. Create `src/services/api.js`:
```javascript
import axios from 'axios'

const API_KEY = process.env.VITE_TMDB_API_KEY
const BASE_URL = 'https://api.themoviedb.org/3'

export const fetchMovies = (page = 1) => {
  return axios.get(`${BASE_URL}/movie/popular`, {
    params: { api_key: API_KEY, page }
  })
}

export const searchMovies = (query) => {
  return axios.get(`${BASE_URL}/search/movie`, {
    params: { api_key: API_KEY, query }
  })
}
```

2. Replace mock data imports with API calls
3. Add `.env.local` with your API key

## 📱 Responsive Design

- **Mobile** (< 640px): Single column, hamburger menu
- **Tablet** (640px - 1024px): 2-3 columns, full navbar
- **Desktop** (> 1024px): 4 columns, full navigation

##  Keyboard Navigation

- `Tab` - Navigate through interactive elements
- `Enter` - Activate buttons and links
- `Escape` - Close mobile menu

##  Deployment

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
netlify deploy --prod --dir=dist
```

### GitHub Pages
```bash
npm run build
git add dist
git commit -m "Deploy"
git push
```

##  Environment Variables

Create `.env.local` for configuration:
```env
VITE_TMDB_API_KEY=your_api_key_here
VITE_API_URL=https://api.themoviedb.org/3
```

##  Troubleshooting

### Port already in use
```bash
npm run dev -- --port 5174
```

### Build errors
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Styling issues
```bash
# Rebuild Tailwind
npm run build
```

##  License

MIT License - feel free to use this project for personal and commercial purposes.

##  Contributing

Contributions are welcome! Please:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

##  Support

For issues or questions:
- Open a GitHub issue
- Email: fabricecyuzuzo2@gmaail.com

##  Acknowledgments

- React team for the powerful library
- Tailwind CSS for utility-first CSS framework
- Framer Motion for smooth animations
- React Router for client-side routing
- React Icons for beautiful icons
- Unsplash for movie images

##  Future Enhancements

- [ ] TMDB API integration
- [ ] User authentication
- [ ] Movie reviews and ratings
- [ ] Watchlist feature
- [ ] Social sharing
- [ ] Dark/Light mode toggle
- [ ] Advanced filters (director, actor)
- [ ] Trending movies section
- [ ] Movie recommendations
- [ ] Infinite scroll
- [ ] Toast notifications
- [ ] Progressive Web App (PWA)

---

**cyuzuzo fabrice**

 | [GitHub](https://github.com/Cyuzuzofabrice/movie-site-frontend)
