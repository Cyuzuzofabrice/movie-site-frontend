import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import Hero from '../components/Hero'
import MovieCard from '../components/MovieCard'
import SearchBar from '../components/SearchBar'
import Filters from '../components/Filters'
import Pagination from '../components/Pagination'
import { mockMovies } from '../data/mockMovies'

const Home = ({ isFavorite, addToFavorites, removeFromFavorites }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedGenre, setSelectedGenre] = useState('All')
  const [selectedYear, setSelectedYear] = useState('All')
  const [selectedRating, setSelectedRating] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 12

  // Filter movies
  const filteredMovies = useMemo(() => {
    return mockMovies.filter((movie) => {
      const matchesSearch = movie.title.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesGenre = selectedGenre === 'All' || movie.genres.includes(selectedGenre)
      const matchesYear = selectedYear === 'All' || movie.releaseYear === parseInt(selectedYear)
      const matchesRating = movie.rating >= selectedRating

      return matchesSearch && matchesGenre && matchesYear && matchesRating
    })
  }, [searchTerm, selectedGenre, selectedYear, selectedRating])

  // Pagination
  const totalPages = Math.ceil(filteredMovies.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedMovies = filteredMovies.slice(startIndex, startIndex + itemsPerPage)

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-secondary to-dark pt-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Hero movie={mockMovies[0]} />
        </div>
      </section>

      {/* Main Content */}
      <section className="px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Search */}
          <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />

          {/* Filters */}
          <Filters
            selectedGenre={selectedGenre}
            selectedYear={selectedYear}
            selectedRating={selectedRating}
            onGenreChange={setSelectedGenre}
            onYearChange={setSelectedYear}
            onRatingChange={setSelectedRating}
          />

          {/* Results Count */}
          <div className="mb-6">
            <p className="text-gray-400">
              Showing {startIndex + 1}-{Math.min(startIndex + itemsPerPage, filteredMovies.length)} of {filteredMovies.length} movies
            </p>
          </div>

          {/* Movie Grid */}
          {paginatedMovies.length > 0 ? (
            <>
              <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              >
                {paginatedMovies.map((movie) => (
                  <motion.div key={movie.id} variants={item}>
                    <MovieCard
                      movie={movie}
                      isFavorite={isFavorite}
                      onAddFavorite={addToFavorites}
                      onRemoveFavorite={removeFromFavorites}
                    />
                  </motion.div>
                ))}
              </motion.div>

              {/* Pagination */}
              {totalPages > 1 && (
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={setCurrentPage}
                />
              )}
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-12"
            >
              <p className="text-gray-400 text-lg">No movies found matching your criteria.</p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  )
}

export default Home
