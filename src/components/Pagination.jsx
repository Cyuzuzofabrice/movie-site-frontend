import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const getPageNumbers = () => {
    const pages = []
    const maxPages = 5
    const startPage = Math.max(1, currentPage - Math.floor(maxPages / 2))
    const endPage = Math.min(totalPages, startPage + maxPages - 1)

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i)
    }

    return pages
  }

  return (
    <div className="flex items-center justify-center gap-2 my-12">
      {/* Previous Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="p-2 rounded-lg bg-primary/20 hover:bg-primary/40 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        <FiChevronLeft size={20} />
      </motion.button>

      {/* Page Numbers */}
      {getPageNumbers().map((page) => (
        <motion.button
          key={page}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onPageChange(page)}
          className={`px-4 py-2 rounded-lg transition-colors ${
            page === currentPage
              ? 'bg-primary text-dark font-bold'
              : 'bg-primary/20 hover:bg-primary/40'
          }`}
        >
          {page}
        </motion.button>
      ))}

      {/* Next Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="p-2 rounded-lg bg-primary/20 hover:bg-primary/40 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        <FiChevronRight size={20} />
      </motion.button>
    </div>
  )
}

export default Pagination
