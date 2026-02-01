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
    <section data-testid="about-section" ref={ref} className="section-padding bg-[#F8F9FA] relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-pattern opacity-50" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-[#0056D2]/10 text-[#0056D2] rounded-full text-sm font-semibold mb-4">
            About Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Who We Are
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Founded in 2010, We Care Foundation has been at the forefront of humanitarian efforts, 
            touching lives across 25+ countries through our dedicated programs and initiatives.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          {/* Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <div className="img-zoom rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&auto=format&fit=crop&q=80"
                  alt="Children learning"
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="img-zoom rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=400&auto=format&fit=crop&q=80"
                  alt="Community support"
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="img-zoom rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=400&auto=format&fit=crop&q=80"
                  alt="Volunteers working"
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="img-zoom rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1593113598332-cd288d649433?w=400&auto=format&fit=crop&q=80"
                  alt="Healthcare support"
                  className="w-full h-48 object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
              Making a Real Difference in People's Lives
            </h3>
            <p className="text-gray-600 mb-6">
              At We Care Foundation, we believe that everyone deserves a chance to thrive. Our programs 
              focus on addressing the root causes of poverty and inequality, providing communities with 
              the tools and resources they need to build better futures.
            </p>
            <p className="text-gray-600 mb-8">
              Through partnerships with local organizations, governments, and dedicated volunteers, 
              we've been able to reach millions of people in need. From building schools in rural areas 
              to providing medical camps in underserved regions, our work spans across multiple domains.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                <p className="text-3xl font-bold text-[#0056D2]">15+</p>
                <p className="text-sm text-gray-500">Years of Service</p>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                <p className="text-3xl font-bold text-[#FF9F1C]">500+</p>
                <p className="text-sm text-gray-500">Team Members</p>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                <p className="text-3xl font-bold text-[#E91E63]">1M+</p>
                <p className="text-sm text-gray-500">People Helped</p>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                <p className="text-3xl font-bold text-[#0056D2]">98%</p>
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
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                style={{ backgroundColor: `${value.color}15` }}
              >
                <value.icon className="w-7 h-7" style={{ color: value.color }} />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h4>
              <p className="text-sm text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
