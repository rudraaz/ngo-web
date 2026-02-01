import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { toast } from 'sonner';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Our Address',
      content: '123 Hope Street, San Francisco, CA 94102',
      color: '#0056D2',
    },
    {
      icon: Phone,
      title: 'Phone Number',
      content: '+1 (555) 123-4567',
      color: '#FF9F1C',
    },
    {
      icon: Mail,
      title: 'Email Address',
      content: 'hello@wecarefoundation.org',
      color: '#E91E63',
    },
    {
      icon: Clock,
      title: 'Working Hours',
      content: 'Mon - Fri: 9:00 AM - 6:00 PM',
      color: '#4CAF50',
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section data-testid="contact-section" ref={ref} className="section-padding bg-[#F8F9FA]">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-[#E91E63]/10 text-[#E91E63] rounded-full text-sm font-semibold mb-4">
            Get in Touch
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Contact Us
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Have questions or want to learn more about our work? We'd love to hear from you. 
            Reach out and let's start a conversation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: `${info.color}15` }}
                >
                  <info.icon className="w-5 h-5" style={{ color: info.color }} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{info.title}</h3>
                  <p className="text-gray-600 text-sm">{info.content}</p>
                </div>
              </div>
            ))}

            {/* Map placeholder */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0975893692867!2d-122.41941568468173!3d37.77492997975903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050fa5!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1650000000000!5m2!1sen!2sus"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Our Location"
              />
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <div className="bg-white p-8 rounded-3xl shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      data-testid="contact-name-input"
                      className="w-full rounded-xl border-gray-200 focus:border-[#0056D2] focus:ring-[#0056D2]/20"
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
                      data-testid="contact-email-input"
                      className="w-full rounded-xl border-gray-200 focus:border-[#0056D2] focus:ring-[#0056D2]/20"
                      required
                    />
                  </div>
                </div>
                <div>
                  <Input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    data-testid="contact-subject-input"
                    className="w-full rounded-xl border-gray-200 focus:border-[#0056D2] focus:ring-[#0056D2]/20"
                    required
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    data-testid="contact-message-input"
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0056D2] focus:ring-2 focus:ring-[#0056D2]/20 resize-none"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  data-testid="contact-submit-btn"
                  className="bg-[#0056D2] hover:bg-[#004bb5] text-white rounded-full px-8 py-6 font-semibold text-lg transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
