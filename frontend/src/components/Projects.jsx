import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Stethoscope, Leaf, Home, Droplets, Utensils } from 'lucide-react';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const projects = [
    {
      id: 1,
      title: 'Education for All',
      description: 'Providing quality education to underprivileged children across rural areas.',
      image: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=800&auto=format&fit=crop&q=80',
      icon: BookOpen,
      stats: '10,000+ Students',
      color: '#0056D2',
      size: 'large',
    },
    {
      id: 2,
      title: 'Medical Aid',
      description: 'Free healthcare camps and medical support for communities in need.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=80',
      icon: Stethoscope,
      stats: '50,000+ Patients',
      color: '#E91E63',
      size: 'small',
    },
    {
      id: 3,
      title: 'Green Earth Initiative',
      description: 'Environmental conservation and sustainable farming practices.',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&auto=format&fit=crop&q=80',
      icon: Leaf,
      stats: '100K+ Trees Planted',
      color: '#4CAF50',
      size: 'small',
    },
    {
      id: 4,
      title: 'Housing Support',
      description: 'Building safe and affordable homes for homeless families.',
      image: 'https://images.unsplash.com/photo-1460317442991-0ec209397118?w=800&auto=format&fit=crop&q=80',
      icon: Home,
      stats: '500+ Homes Built',
      color: '#FF9F1C',
      size: 'medium',
    },
    {
      id: 5,
      title: 'Clean Water',
      description: 'Providing access to clean drinking water in remote villages.',
      image: 'https://images.unsplash.com/photo-1541544537156-7627a7a4aa1c?w=800&auto=format&fit=crop&q=80',
      icon: Droplets,
      stats: '200+ Wells Dug',
      color: '#00BCD4',
      size: 'medium',
    },
    {
      id: 6,
      title: 'Food Security',
      description: 'Ensuring no one goes hungry through food distribution programs.',
      image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&auto=format&fit=crop&q=80',
      icon: Utensils,
      stats: '1M+ Meals Served',
      color: '#FF5722',
      size: 'large',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section data-testid="projects-section" ref={ref} className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-[#FF9F1C]/10 text-[#FF9F1C] rounded-full text-sm font-semibold mb-4">
            Our Projects
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Initiatives That Matter
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our diverse projects address critical needs across education, healthcare, 
            environment, and community development.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className={`bento-item group cursor-pointer ${
                project.size === 'large' ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="bento-content">
                <div className="flex items-center gap-2 mb-2">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: project.color }}
                  >
                    <project.icon className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-xs font-semibold text-white/80">{project.stats}</span>
                </div>
                <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                <p className="text-sm text-white/80 line-clamp-2">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <Link
            to="/projects"
            data-testid="view-all-projects-btn"
            className="btn-primary inline-flex items-center gap-2"
          >
            View All Projects
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
