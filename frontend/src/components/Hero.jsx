import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Heart, Users, Globe } from 'lucide-react';

const Hero = () => {
  const stats = [
    { icon: Users, value: '50K+', label: 'Lives Changed' },
    { icon: Globe, value: '25+', label: 'Countries' },
    { icon: Heart, value: '100+', label: 'Projects' },
  ];

  return (
    <section data-testid="hero-section" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-[#0056D2] decorative-blob" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-[#FF9F1C] decorative-blob" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#E91E63] decorative-blob opacity-5" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 bg-[#0056D2]/10 text-[#0056D2] rounded-full text-sm font-semibold mb-6"
            >
              Together We Make A Difference
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6"
            >
              Changing Lives{' '}
              <span className="text-gradient">Together</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-gray-600 mb-8 max-w-xl"
            >
              We Care Foundation empowers communities worldwide through education, healthcare, and sustainable development. Join us in creating a brighter future for everyone.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <Link
                to="/donate"
                data-testid="hero-donate-btn"
                className="btn-donate flex items-center gap-2"
              >
                <Heart className="w-5 h-5" fill="currentColor" />
                Donate Now
              </Link>
              <Link
                to="/about"
                data-testid="hero-learn-btn"
                className="btn-secondary flex items-center gap-2"
              >
                Learn More
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex gap-8 lg:gap-12"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-left">
                  <div className="flex items-center gap-2 mb-1">
                    <stat.icon className="w-5 h-5 text-[#FF9F1C]" />
                    <span className="text-2xl lg:text-3xl font-bold text-gray-900">{stat.value}</span>
                  </div>
                  <span className="text-sm text-gray-500">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="hero-image-container">
              <img
                src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&auto=format&fit=crop&q=80"
                alt="Volunteers helping community"
                className="w-full h-[500px] lg:h-[600px] object-cover rounded-3xl shadow-2xl"
              />
            </div>

            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl max-w-xs"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 bg-[#E91E63]/10 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-[#E91E63]" fill="currentColor" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">$2.5M+</p>
                  <p className="text-sm text-gray-500">Funds Raised</p>
                </div>
              </div>
              <p className="text-xs text-gray-400">Thanks to our generous donors worldwide</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
