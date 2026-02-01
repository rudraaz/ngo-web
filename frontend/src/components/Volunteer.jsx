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
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-[#0056D2]/10 text-[#0056D2] rounded-full text-sm font-semibold mb-4">
            Join Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Become a Volunteer
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Your time and skills can make a tremendous difference. Join our community of 
            volunteers and be part of something meaningful.
          </p>
        </motion.div>

        {/* Benefits */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-lg transition-all duration-300"
            >
              <div
                className="benefit-icon mx-auto mb-4"
                style={{ backgroundColor: `${benefit.color}15` }}
              >
                <benefit.icon style={{ color: benefit.color }} className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-sm text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Opportunities */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Current Opportunities</h3>
            <div className="space-y-4">
              {opportunities.map((opp, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-[#0056D2]/5 transition-colors cursor-pointer"
                >
                  <div className="w-12 h-12 bg-[#0056D2]/10 rounded-xl flex items-center justify-center">
                    <opp.icon className="w-6 h-6 text-[#0056D2]" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">{opp.title}</h4>
                    <p className="text-sm text-gray-500">{opp.location} • {opp.commitment}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-[#FF9F1C]/10 rounded-2xl">
              <h4 className="font-bold text-gray-900 mb-2">Can't find the right fit?</h4>
              <p className="text-sm text-gray-600">
                We have various other opportunities. Fill out the form and tell us about your 
                interests, and we'll find the perfect role for you!
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-[#F8F9FA] p-8 rounded-3xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Sign Up to Volunteer</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    data-testid="volunteer-name-input"
                    className="w-full rounded-xl border-gray-200 focus:border-[#0056D2] focus:ring-[#0056D2]/20 bg-white"
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
                    className="w-full rounded-xl border-gray-200 focus:border-[#0056D2] focus:ring-[#0056D2]/20 bg-white"
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
                    className="w-full rounded-xl border-gray-200 focus:border-[#0056D2] focus:ring-[#0056D2]/20 bg-white"
                  />
                </div>
                <div>
                  <select
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    data-testid="volunteer-interest-select"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0056D2] focus:ring-2 focus:ring-[#0056D2]/20 bg-white text-gray-700"
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
                    placeholder="Tell us about yourself and why you want to volunteer..."
                    value={formData.message}
                    onChange={handleChange}
                    data-testid="volunteer-message-input"
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0056D2] focus:ring-2 focus:ring-[#0056D2]/20 bg-white resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  data-testid="volunteer-submit-btn"
                  className="w-full bg-[#0056D2] hover:bg-[#004bb5] text-white rounded-full py-6 font-semibold text-lg transition-all duration-300 hover:-translate-y-0.5"
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
