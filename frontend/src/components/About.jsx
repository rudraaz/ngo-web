import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, Eye, Award, Users } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To empower underprivileged communities by providing access to education, healthcare, and sustainable livelihood opportunities.',
      color: '#0056D2',
    },
    {
      icon: Eye,
      title: 'Our Vision',
      description: 'A world where every individual has the opportunity to live a dignified life with access to basic necessities and growth opportunities.',
      color: '#FF9F1C',
    },
    {
      icon: Award,
      title: 'Our Values',
      description: 'Integrity, compassion, transparency, and commitment to sustainable impact guide everything we do at We Care Foundation.',
      color: '#E91E63',
    },
    {
      icon: Users,
      title: 'Our Approach',
      description: 'We work directly with communities, partnering with local organizations to ensure our programs create lasting, meaningful change.',
      color: '#0056D2',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section data-testid="about-section" ref={ref} className="section-padding bg-gray-50 relative">
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1.5 bg-[#0056D2]/10 text-[#0056D2] rounded-md text-sm font-medium mb-4">
            About Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Who We Are
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Founded in 2010, We Care Foundation has been at the forefront of humanitarian efforts, 
            touching lives across 25+ countries through our dedicated programs.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          {/* Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 gap-3"
          >
            <div className="space-y-3">
              <div className="img-zoom rounded-xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&auto=format&fit=crop&q=80"
                  alt="Children learning"
                  className="w-full h-44 object-cover"
                />
              </div>
              <div className="img-zoom rounded-xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=400&auto=format&fit=crop&q=80"
                  alt="Community support"
                  className="w-full h-56 object-cover"
                />
              </div>
            </div>
            <div className="space-y-3 pt-6">
              <div className="img-zoom rounded-xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=400&auto=format&fit=crop&q=80"
                  alt="Volunteers working"
                  className="w-full h-56 object-cover"
                />
              </div>
              <div className="img-zoom rounded-xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1593113598332-cd288d649433?w=400&auto=format&fit=crop&q=80"
                  alt="Healthcare support"
                  className="w-full h-44 object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-5 tracking-tight">
              Making a Real Difference
            </h3>
            <p className="text-gray-600 mb-5 leading-relaxed">
              At We Care Foundation, we believe everyone deserves a chance to thrive. Our programs 
              address the root causes of poverty, providing communities with tools and resources 
              they need.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Through partnerships with local organizations and dedicated volunteers, 
              we've reached millions of people in need across multiple domains.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-white rounded-lg border border-gray-100">
                <p className="text-2xl font-bold text-gray-900">15+</p>
                <p className="text-sm text-gray-500">Years of Service</p>
              </div>
              <div className="p-4 bg-white rounded-lg border border-gray-100">
                <p className="text-2xl font-bold text-gray-900">500+</p>
                <p className="text-sm text-gray-500">Team Members</p>
              </div>
              <div className="p-4 bg-white rounded-lg border border-gray-100">
                <p className="text-2xl font-bold text-gray-900">1M+</p>
                <p className="text-sm text-gray-500">People Helped</p>
              </div>
              <div className="p-4 bg-white rounded-lg border border-gray-100">
                <p className="text-2xl font-bold text-gray-900">98%</p>
                <p className="text-sm text-gray-500">Funds to Cause</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white p-5 rounded-xl border border-gray-100 hover:border-gray-200 transition-colors"
            >
              <div
                className="w-11 h-11 rounded-lg flex items-center justify-center mb-4"
                style={{ backgroundColor: `${value.color}10` }}
              >
                <value.icon className="w-5 h-5" style={{ color: value.color }} />
              </div>
              <h4 className="text-base font-semibold text-gray-900 mb-2">{value.title}</h4>
              <p className="text-sm text-gray-600 leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
