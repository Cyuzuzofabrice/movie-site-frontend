import { motion } from 'framer-motion'
import { FiFilter } from 'react-icons/fi'
import { genres, years } from '../data/mockMovies'

const Filters = ({ selectedGenre, selectedYear, selectedRating, onGenreChange, onYearChange, onRatingChange }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-secondary/50 backdrop-blur-sm rounded-lg p-6 mb-8 border border-primary/20"
    >
      <div className="flex items-center gap-2 mb-4">
        <FiFilter size={20} className="text-primary" />
        <h3 className="text-lg font-semibold">Filter Movies</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Genre Filter */}
        <div>
          <label className="block text-sm font-medium mb-2">Genre</label>
          <select
            value={selectedGenre}
            onChange={(e) => onGenreChange(e.target.value)}
            className="w-full bg-dark/50 border border-primary/30 rounded-lg px-4 py-2 text-text-light focus:outline-none focus:border-primary transition-colors"
          >
            {genres.map((genre) => (
              <option key={genre} value={genre}>
                {genre}
              </option>
            ))}
          </select>
        </div>

        {/* Year Filter */}
        <div>
          <label className="block text-sm font-medium mb-2">Year</label>
          <select
            value={selectedYear}
            onChange={(e) => onYearChange(e.target.value)}
            className="w-full bg-dark/50 border border-primary/30 rounded-lg px-4 py-2 text-text-light focus:outline-none focus:border-primary transition-colors"
          >
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>

        {/* Rating Filter */}
        <div>
          <label className="block text-sm font-medium mb-2">Minimum Rating</label>
          <input
            type="range"
            min="0"
            max="10"
            step="0.5"
            value={selectedRating}
            onChange={(e) => onRatingChange(parseFloat(e.target.value))}
            className="w-full accent-primary cursor-pointer"
          />
          <div className="text-sm text-gray-400 mt-1">{selectedRating}+</div>
        </div>
      </div>
    </motion.div>
  )
}

export default Filters
