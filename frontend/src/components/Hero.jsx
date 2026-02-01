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
    <section data-testid="hero-section" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
      {/* Subtle background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gray-50" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-left"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="inline-block px-3 py-1.5 bg-[#0056D2]/10 text-[#0056D2] rounded-md text-sm font-medium mb-6"
            >
              Together We Make A Difference
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6 tracking-tight"
            >
              Changing Lives{' '}
              <span className="text-[#0056D2]">Together</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed"
            >
              We Care Foundation empowers communities worldwide through education, healthcare, and sustainable development.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
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
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex gap-10"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-left">
                  <span className="text-3xl font-bold text-gray-900">{stat.value}</span>
                  <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&auto=format&fit=crop&q=80"
              alt="Volunteers helping community"
              className="w-full h-[480px] lg:h-[560px] object-cover rounded-2xl"
            />

            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="absolute -bottom-6 -left-6 bg-white p-5 rounded-xl shadow-lg border border-gray-100"
            >
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 bg-[#E91E63]/10 rounded-lg flex items-center justify-center">
                  <Heart className="w-5 h-5 text-[#E91E63]" fill="currentColor" />
                </div>
                <div>
                  <p className="text-xl font-bold text-gray-900">$2.5M+</p>
                  <p className="text-sm text-gray-500">Funds Raised</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
