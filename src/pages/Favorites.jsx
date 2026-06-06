import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiTrash2, FiSortDesc } from 'react-icons/fi'
import MovieCard from '../components/MovieCard'
import { Link } from 'react-router-dom'

const Favorites = ({ favorites, removeFromFavorites }) => {
  const [sortBy, setSortBy] = useState('rating')

  const sortedFavorites = [...favorites].sort((a, b) => {
    if (sortBy === 'rating') return b.rating - a.rating
    if (sortBy === 'year') return b.releaseYear - a.releaseYear
    if (sortBy === 'title') return a.title.localeCompare(b.title)
    return 0
  })

  const isFavorite = (movieId) => favorites.some(m => m.id === movieId)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-dark px-4 sm:px-6 lg:px-8 py-12"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">❤️ My Favorites</h1>
          <p className="text-gray-400 text-lg">
            {favorites.length} movie{favorites.length !== 1 ? 's' : ''} saved
          </p>
        </motion.div>

        {favorites.length > 0 ? (
          <>
            {/* Sort Options */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-4 mb-8 bg-secondary/50 rounded-lg p-4 backdrop-blur-sm"
            >
              <FiSortDesc className="text-primary" size={20} />
              <span className="text-gray-400">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-dark/50 border border-primary/30 rounded-lg px-4 py-2 text-text-light focus:outline-none focus:border-primary transition-colors"
              >
                <option value="rating">Rating (High to Low)</option>
                <option value="year">Year (Newest First)</option>
                <option value="title">Title (A-Z)</option>
              </select>
            </motion.div>

            {/* Movie Grid */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ staggerChildren: 0.05 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12"
            >
              {sortedFavorites.map((movie) => (
                <motion.div
                  key={movie.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="relative"
                >
                  <MovieCard
                    movie={movie}
                    isFavorite={isFavorite}
                    onAddFavorite={() => {}}
                    onRemoveFavorite={removeFromFavorites}
                  />
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => removeFromFavorites(movie.id)}
                    className="absolute top-2 right-2 p-2 bg-danger rounded-lg hover:bg-red-700 transition-colors z-10"
                    title="Remove from favorites"
                  >
                    <FiTrash2 size={18} />
                  </motion.button>
                </motion.div>
              ))}
            </motion.div>
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16"
          >
            <p className="text-gray-400 text-xl mb-6">You haven't added any favorites yet.</p>
            <Link
              to="/"
              className="inline-block px-8 py-3 bg-primary text-dark font-bold rounded-lg hover:bg-primary/80 transition-colors"
            >
              Browse Movies
            </Link>
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}

export default Favorites
