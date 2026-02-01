import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Heart, Users, ArrowRight } from 'lucide-react';

const ParallaxCTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section 
      ref={ref}
      data-testid="parallax-cta-section"
      className="relative h-[500px] lg:h-[600px] overflow-hidden"
    >
      {/* Parallax Background Image */}
      <div 
        className="absolute inset-0 bg-fixed bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1920&auto=format&fit=crop&q=80')`,
          backgroundAttachment: 'fixed',
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />
      
      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container-custom">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-6">
                <Users className="w-4 h-4" />
                Join 50,000+ supporters
              </span>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
                Together, We Can
                <br />
                Change the World
              </h2>
              
              <p className="text-lg text-white/80 mb-8 leading-relaxed">
                Every contribution, no matter how small, creates ripples of change 
                that transform lives and communities around the globe.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/donate"
                  data-testid="parallax-donate-btn"
                  className="inline-flex items-center gap-2 bg-[#E91E63] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#d81b60] transition-colors"
                >
                  <Heart className="w-5 h-5" fill="currentColor" />
                  Donate Now
                </Link>
                <Link
                  to="/volunteer"
                  data-testid="parallax-volunteer-btn"
                  className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-colors border border-white/20"
                >
                  Become a Volunteer
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParallaxCTA;
