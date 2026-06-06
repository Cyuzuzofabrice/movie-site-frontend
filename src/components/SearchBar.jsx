import { motion } from 'framer-motion'
import { FiSearch } from 'react-icons/fi'

const SearchBar = ({ searchTerm, onSearchChange }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative mb-8"
    >
      <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-primary" size={20} />
      <input
        type="text"
        placeholder="Search movies by title..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="w-full bg-secondary/50 border border-primary/30 rounded-lg pl-12 pr-4 py-3 text-text-light placeholder-gray-400 focus:outline-none focus:border-primary transition-colors"
      />
    </motion.div>
  )
}

export default SearchBar
