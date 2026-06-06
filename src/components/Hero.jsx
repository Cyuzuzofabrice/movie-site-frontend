import { motion } from 'framer-motion'

const Hero = ({ movie }) => {
  if (!movie) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative h-96 md:h-[500px] overflow-hidden rounded-lg mb-12"
    >
      {/* Background Image */}
      <img
        src={movie.backdrop}
        alt={movie.title}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/50 to-transparent" />

      {/* Content */}
      <div className="relative h-full flex flex-col justify-center p-4 md:p-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-3xl md:text-5xl font-bold mb-4 max-w-2xl"
        >
          {movie.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-gray-300 text-lg max-w-2xl mb-6 line-clamp-3"
        >
          {movie.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex gap-4"
        >
          <button className="px-8 py-3 bg-primary text-dark font-bold rounded-lg hover:bg-primary/80 transition-colors flex items-center gap-2">
            ▶ Watch Now
          </button>
          <button className="px-8 py-3 bg-white/20 text-white font-bold rounded-lg hover:bg-white/30 transition-colors border border-white/30">
            ℹ More Info
          </button>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Hero
