import { motion } from 'framer-motion'
import { FiFacebook, FiTwitter, FiInstagram, FiYoutube } from 'react-icons/fi'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary border-t border-primary/20 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-gradient mb-3">🎬 MovieDB</h3>
            <p className="text-gray-400 text-sm">Discover, watch, and share your favorite movies with the world.</p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Movies</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">TV Shows</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Favorites</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Feedback</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              {[
                { icon: FiFacebook, label: 'Facebook' },
                { icon: FiTwitter, label: 'Twitter' },
                { icon: FiInstagram, label: 'Instagram' },
                { icon: FiYoutube, label: 'YouTube' },
              ].map(({ icon: Icon, label }) => (
                <motion.a
                  key={label}
                  href="#"
                  whileHover={{ scale: 1.2, color: '#E50914' }}
                  className="text-gray-400 hover:text-primary transition-colors"
                  title={label}
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p>&copy; {currentYear} MovieDB. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-colors">Cookie Settings</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
