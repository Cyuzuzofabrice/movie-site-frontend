import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { FiMenu, FiX, FiSearch, FiHeart } from 'react-icons/fi'
import { motion } from 'framer-motion'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Movies', path: '/' },
    { name: 'TV Shows', path: '/' },
    { name: 'Favorites', path: '/favorites' },
  ]

  return (
    <nav className="bg-secondary/80 backdrop-blur-md sticky top-0 z-50 border-b border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <motion.div whileHover={{ scale: 1.05 }} className="text-2xl font-bold text-gradient">
              🎬 MovieDB
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`transition-colors ${
                  isActive(item.path)
                    ? 'text-primary border-b-2 border-primary pb-1'
                    : 'text-text-light hover:text-primary'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            {/* Search */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 hover:bg-primary/20 rounded-lg transition-colors"
            >
              <FiSearch size={20} />
            </motion.button>

            {/* Favorites Link */}
            <Link to="/favorites" className="hidden sm:flex p-2 hover:bg-primary/20 rounded-lg transition-colors">
              <FiHeart size={20} />
            </Link>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 hover:bg-primary/20 rounded-lg transition-colors"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="pb-4"
          >
            <input
              type="text"
              placeholder="Search movies..."
              className="w-full bg-primary/20 border border-primary/30 rounded-lg px-4 py-2 text-text-light placeholder-gray-400 focus:outline-none focus:border-primary"
            />
          </motion.div>
        )}
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-dark/95 border-t border-primary/20"
        >
          <div className="px-4 pt-4 pb-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-lg transition-colors ${
                  isActive(item.path)
                    ? 'bg-primary text-dark font-semibold'
                    : 'text-text-light hover:bg-primary/20'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  )
}

export default Navbar
