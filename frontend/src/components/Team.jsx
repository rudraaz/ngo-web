import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Linkedin, Twitter, Mail } from 'lucide-react';

const Team = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const team = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80',
      bio: '15+ years in humanitarian work',
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Director of Operations',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=80',
      bio: 'Expert in global program management',
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Head of Programs',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=80',
      bio: 'Passionate about education initiatives',
    },
    {
      id: 4,
      name: 'David Okonkwo',
      role: 'Community Outreach',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80',
      bio: 'Connecting communities worldwide',
    },
    {
      id: 5,
      name: 'Priya Sharma',
      role: 'Healthcare Director',
      image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&auto=format&fit=crop&q=80',
      bio: 'Medical professional & humanitarian',
    },
    {
      id: 6,
      name: 'James Wilson',
      role: 'Finance Manager',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80',
      bio: 'Ensuring transparency & accountability',
    },
    {
      id: 7,
      name: 'Aisha Patel',
      role: 'Volunteer Coordinator',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop&q=80',
      bio: 'Building volunteer networks globally',
    },
    {
      id: 8,
      name: 'Robert Kim',
      role: 'Communications Lead',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&auto=format&fit=crop&q=80',
      bio: 'Telling stories that inspire action',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section data-testid="team-section" ref={ref} className="section-padding bg-[#F8F9FA]">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-[#E91E63]/10 text-[#E91E63] rounded-full text-sm font-semibold mb-4">
            Our Team
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Meet the People Behind Our Mission
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our dedicated team brings together diverse expertise and a shared commitment 
            to creating positive change in the world.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {team.map((member) => (
            <motion.div
              key={member.id}
              variants={itemVariants}
              className="team-card bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group"
            >
              <div className="relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex justify-center gap-3">
                    <a
                      href="#"
                      className="w-9 h-9 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white hover:text-[#0056D2] transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a
                      href="#"
                      className="w-9 h-9 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white hover:text-[#0056D2] transition-colors"
                    >
                      <Twitter className="w-4 h-4" />
                    </a>
                    <a
                      href="#"
                      className="w-9 h-9 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white hover:text-[#0056D2] transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
                <p className="text-sm font-medium text-[#0056D2] mb-1">{member.role}</p>
                <p className="text-xs text-gray-500">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
