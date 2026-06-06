import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import MovieDetails from './pages/MovieDetails'
import Favorites from './pages/Favorites'

function App() {
  const [favorites, setFavorites] = useState([])

  // Load favorites from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('favorites')
    if (saved) setFavorites(JSON.parse(saved))
  }, [])

  // Save favorites to localStorage
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites))
  }, [favorites])

  const addToFavorites = (movie) => {
    if (!favorites.find(m => m.id === movie.id)) {
      setFavorites([...favorites, movie])
    }
  }

  const removeFromFavorites = (movieId) => {
    setFavorites(favorites.filter(m => m.id !== movieId))
  }

  const isFavorite = (movieId) => {
    return favorites.some(m => m.id === movieId)
  }

  return (
    <Router>
      <div className="min-h-screen bg-dark flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home isFavorite={isFavorite} addToFavorites={addToFavorites} removeFromFavorites={removeFromFavorites} />} />
            <Route path="/movie/:id" element={<MovieDetails isFavorite={isFavorite} addToFavorites={addToFavorites} removeFromFavorites={removeFromFavorites} />} />
            <Route path="/favorites" element={<Favorites favorites={favorites} removeFromFavorites={removeFromFavorites} />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
