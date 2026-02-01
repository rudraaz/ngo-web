import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Heart, Globe, Users, Award, Calendar, Clock } from 'lucide-react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { toast } from 'sonner';

const Volunteer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: '',
  });

  const benefits = [
    {
      icon: Heart,
      title: 'Make an Impact',
      description: 'Directly contribute to changing lives and communities.',
      color: '#E91E63',
    },
    {
      icon: Globe,
      title: 'Global Experience',
      description: 'Work with diverse teams across different countries.',
      color: '#0056D2',
    },
    {
      icon: Users,
      title: 'Build Connections',
      description: 'Network with like-minded individuals and professionals.',
      color: '#FF9F1C',
    },
    {
      icon: Award,
      title: 'Grow Skills',
      description: 'Develop leadership and project management abilities.',
      color: '#4CAF50',
    },
  ];

  const opportunities = [
    {
      title: 'Education Mentor',
      location: 'Remote / On-site',
      commitment: '4-6 hours/week',
      icon: Calendar,
    },
    {
      title: 'Medical Camp Assistant',
      location: 'Various Locations',
      commitment: 'Event-based',
      icon: Clock,
    },
    {
      title: 'Community Organizer',
      location: 'Local Communities',
      commitment: '8-10 hours/week',
      icon: Users,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Thank you for your interest! We will contact you soon.');
    setFormData({ name: '', email: '', phone: '', interest: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section data-testid="volunteer-section" ref={ref} className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-3 py-1.5 bg-[#0056D2]/10 text-[#0056D2] rounded-md text-sm font-medium mb-4">
            Join Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-5 tracking-tight">
            Become a Volunteer
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Your time and skills can make a tremendous difference. Join our community of 
            volunteers and be part of something meaningful.
          </p>
        </motion.div>

        {/* Benefits */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center p-5 rounded-xl bg-gray-50 hover:bg-white hover:border-gray-200 border border-transparent transition-all"
            >
              <div
                className="benefit-icon mx-auto mb-3"
                style={{ backgroundColor: `${benefit.color}10` }}
              >
                <benefit.icon style={{ color: benefit.color }} className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-gray-900 mb-1.5">{benefit.title}</h3>
              <p className="text-sm text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Opportunities */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-5">Current Opportunities</h3>
            <div className="space-y-3">
              {opportunities.map((opp, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-[#0056D2]/5 transition-colors cursor-pointer"
                >
                  <div className="w-10 h-10 bg-[#0056D2]/10 rounded-lg flex items-center justify-center">
                    <opp.icon className="w-5 h-5 text-[#0056D2]" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900 text-sm">{opp.title}</h4>
                    <p className="text-xs text-gray-500">{opp.location} • {opp.commitment}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-[#FF9F1C]/10 rounded-lg">
              <h4 className="font-medium text-gray-900 mb-1 text-sm">Can't find the right fit?</h4>
              <p className="text-xs text-gray-600">
                Fill out the form and tell us about your interests, and we'll find the perfect role!
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-5">Sign Up to Volunteer</h3>
              <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    data-testid="volunteer-name-input"
                    className="w-full rounded-lg border-gray-200 focus:border-[#0056D2] focus:ring-[#0056D2]/20 bg-white"
                    required
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    data-testid="volunteer-email-input"
                    className="w-full rounded-lg border-gray-200 focus:border-[#0056D2] focus:ring-[#0056D2]/20 bg-white"
                    required
                  />
                </div>
                <div>
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    data-testid="volunteer-phone-input"
                    className="w-full rounded-lg border-gray-200 focus:border-[#0056D2] focus:ring-[#0056D2]/20 bg-white"
                  />
                </div>
                <div>
                  <select
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    data-testid="volunteer-interest-select"
                    className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:border-[#0056D2] focus:ring-2 focus:ring-[#0056D2]/20 bg-white text-gray-700 text-sm"
                    required
                  >
                    <option value="">Select Area of Interest</option>
                    <option value="education">Education</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="environment">Environment</option>
                    <option value="community">Community Development</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder="Tell us about yourself..."
                    value={formData.message}
                    onChange={handleChange}
                    data-testid="volunteer-message-input"
                    rows={3}
                    className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:border-[#0056D2] focus:ring-2 focus:ring-[#0056D2]/20 bg-white resize-none text-sm"
                  />
                </div>
                <Button
                  type="submit"
                  data-testid="volunteer-submit-btn"
                  className="w-full bg-[#0056D2] hover:bg-[#004bb5] text-white rounded-lg py-5 font-medium transition-colors"
                >
                  Submit Application
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Volunteer;
