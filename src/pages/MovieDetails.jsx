import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiArrowLeft, FiStar, FiClock, FiCalendar, FiFilm } from 'react-icons/fi'
import { mockMovies } from '../data/mockMovies'

const MovieDetails = ({ isFavorite, addToFavorites, removeFromFavorites }) => {
  const { id } = useParams()
  const navigate = useNavigate()
  const movie = mockMovies.find((m) => m.id === parseInt(id))

  if (!movie) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center"
        >
          <h1 className="text-3xl font-bold mb-4">Movie not found</h1>
          <button
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-primary text-dark font-bold rounded-lg hover:bg-primary/80 transition-colors"
          >
            Back to Home
          </button>
        </motion.div>
      </div>
    )
  }

  const handleFavoriteClick = () => {
    if (isFavorite(movie.id)) {
      removeFromFavorites(movie.id)
    } else {
      addToFavorites(movie)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-dark"
    >
      {/* Back Button */}
      <div className="fixed top-20 left-4 z-40">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/')}
          className="flex items-center gap-2 px-4 py-2 bg-primary/20 hover:bg-primary/40 rounded-lg transition-colors"
        >
          <FiArrowLeft size={20} />
          Back
        </motion.button>
      </div>

      {/* Backdrop */}
      <div className="relative h-80 md:h-96 overflow-hidden">
        <img
          src={movie.backdrop}
          alt={movie.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark/50 to-dark" />
      </div>

      {/* Content */}
      <div className="px-4 sm:px-6 lg:px-8 -mt-24 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Poster */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="flex-shrink-0"
            >
              <img
                src={movie.poster}
                alt={movie.title}
                className="w-48 md:w-64 rounded-lg shadow-2xl"
              />
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex-1 pt-4"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{movie.title}</h1>

              {/* Rating and Info */}
              <div className="flex flex-wrap gap-6 mb-6">
                <div className="flex items-center gap-2">
                  <FiStar className="text-accent-gold" size={24} />
                  <div>
                    <p className="text-gray-400 text-sm">Rating</p>
                    <p className="text-2xl font-bold">{movie.rating}/10</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <FiCalendar className="text-primary" size={24} />
                  <div>
                    <p className="text-gray-400 text-sm">Release Date</p>
                    <p className="text-lg font-bold">{movie.releaseDate}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <FiClock className="text-primary" size={24} />
                  <div>
                    <p className="text-gray-400 text-sm">Runtime</p>
                    <p className="text-lg font-bold">{movie.runtime}</p>
                  </div>
                </div>
              </div>

              {/* Genres */}
              <div className="mb-6">
                <p className="text-gray-400 text-sm mb-2">Genres</p>
                <div className="flex flex-wrap gap-2">
                  {movie.genres.map((genre) => (
                    <span key={genre} className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">
                      {genre}
                    </span>
                  ))}
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">{movie.description}</p>

              {/* Buttons */}
              <div className="flex gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-primary text-dark font-bold rounded-lg hover:bg-primary/80 transition-colors flex items-center gap-2"
                >
                  <FiFilm size={20} />
                  Watch Trailer
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleFavoriteClick}
                  className={`px-8 py-3 rounded-lg font-bold transition-colors ${
                    isFavorite(movie.id)
                      ? 'bg-primary text-dark hover:bg-primary/80'
                      : 'bg-primary/20 text-primary border border-primary hover:bg-primary hover:text-dark'
                  }`}
                >
                  {isFavorite(movie.id) ? '❤️ Favorite' : '🤍 Add to Favorites'}
                </motion.button>
              </div>
            </motion.div>
          </div>

          {/* Cast Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-12 mb-12"
          >
            <h2 className="text-3xl font-bold mb-6">Cast</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {movie.cast.map((actor, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-secondary/50 rounded-lg p-4 text-center"
                >
                  <p className="font-semibold">{actor}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Trailer Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-6">Trailer</h2>
            <div className="aspect-video rounded-lg overflow-hidden shadow-2xl">
              <iframe
                src={movie.trailerUrl}
                title={`${movie.title} Trailer`}
                className="w-full h-full"
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default MovieDetails
