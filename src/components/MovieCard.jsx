import { motion } from 'framer-motion'
import { FiStar, FiCalendar } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const MovieCard = ({ movie, isFavorite, onAddFavorite, onRemoveFavorite }) => {
  const handleFavoriteClick = (e) => {
    e.preventDefault()
    if (isFavorite(movie.id)) {
      onRemoveFavorite(movie.id)
    } else {
      onAddFavorite(movie)
    }
  }

  return (
    <Link to={`/movie/${movie.id}`}>
      <motion.div
        whileHover={{ y: -8 }}
        className="group relative rounded-lg overflow-hidden bg-secondary cursor-pointer card-hover h-full"
      >
        {/* Image */}
        <div className="relative h-96 overflow-hidden bg-gray-800">
          <motion.img
            whileHover={{ scale: 1.1 }}
            src={movie.poster}
            alt={movie.title}
            className="w-full h-full object-cover transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-dark opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
            <button
              onClick={handleFavoriteClick}
              className={`w-full py-2 rounded-lg font-semibold transition-colors ${
                isFavorite(movie.id)
                  ? 'bg-primary text-dark'
                  : 'bg-dark/50 text-primary border border-primary hover:bg-primary hover:text-dark'
              }`}
            >
              {isFavorite(movie.id) ? '❤️ Favorite' : '🤍 Add to Favorites'}
            </button>
          </div>
        </div>

        {/* Info */}
        <div className="p-4">
          <h3 className="font-bold text-lg line-clamp-2 group-hover:text-primary transition-colors">{movie.title}</h3>
          <div className="flex items-center gap-2 mt-2 text-sm text-gray-400">
            <FiCalendar size={14} />
            <span>{movie.releaseYear}</span>
          </div>
          <div className="flex items-center gap-2 mt-1">
            <FiStar size={14} className="text-accent-gold" />
            <span className="font-semibold">{movie.rating}</span>
          </div>
          <div className="flex flex-wrap gap-1 mt-3">
            {movie.genres.slice(0, 2).map((genre) => (
              <span key={genre} className="text-xs px-2 py-1 bg-primary/20 text-primary rounded">
                {genre}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </Link>
  )
}

export default MovieCard
