import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Team', path: '/team' },
    { name: 'Volunteer', path: '/volunteer' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    if (location.pathname !== '/') {
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      data-testid="header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" data-testid="logo-link" className="flex items-center gap-3">
            <img
              src="https://customer-assets-staging.emergentagent.com/job_change-makers/artifacts/szfol7tw_image.png"
              alt="We Care Foundation"
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                data-testid={`nav-${link.name.toLowerCase()}`}
                className={`nav-link text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'text-[#0056D2]'
                    : 'text-gray-700 hover:text-[#0056D2]'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Donate Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              to="/donate"
              data-testid="donate-nav-btn"
              className="flex items-center gap-2 bg-[#E91E63] text-white px-6 py-3 rounded-full font-semibold text-sm hover:bg-[#d81b60] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <Heart className="w-4 h-4" fill="currentColor" />
              Donate Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            data-testid="mobile-menu-btn"
            className="lg:hidden p-2 text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t"
            >
              <div className="py-4 space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    data-testid={`mobile-nav-${link.name.toLowerCase()}`}
                    className={`block px-4 py-3 text-sm font-medium rounded-lg mx-2 transition-colors ${
                      location.pathname === link.path
                        ? 'bg-[#0056D2]/10 text-[#0056D2]'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="px-4 pt-4">
                  <Link
                    to="/donate"
                    data-testid="mobile-donate-btn"
                    className="flex items-center justify-center gap-2 bg-[#E91E63] text-white px-6 py-3 rounded-full font-semibold text-sm w-full"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Heart className="w-4 h-4" fill="currentColor" />
                    Donate Now
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;
