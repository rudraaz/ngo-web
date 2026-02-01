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
    <section data-testid="contact-section" ref={ref} className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-3 py-1.5 bg-[#E91E63]/10 text-[#E91E63] rounded-md text-sm font-medium mb-4">
            Get in Touch
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-5 tracking-tight">
            Contact Us
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Have questions or want to learn more? We'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="lg:col-span-2 space-y-4"
          >
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-3 bg-white rounded-lg border border-gray-100"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                  style={{ backgroundColor: `${info.color}10` }}
                >
                  <info.icon className="w-4 h-4" style={{ color: info.color }} />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 text-sm mb-0.5">{info.title}</h3>
                  <p className="text-gray-600 text-sm">{info.content}</p>
                </div>
              </div>
            ))}

            {/* Map */}
            <div className="bg-white rounded-xl overflow-hidden border border-gray-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0975893692867!2d-122.41941568468173!3d37.77492997975903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050fa5!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1650000000000!5m2!1sen!2sus"
                width="100%"
                height="180"
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
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="bg-white p-6 rounded-xl border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-5">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      data-testid="contact-name-input"
                      className="w-full rounded-lg border-gray-200 focus:border-[#0056D2] focus:ring-[#0056D2]/20"
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
                      className="w-full rounded-lg border-gray-200 focus:border-[#0056D2] focus:ring-[#0056D2]/20"
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
                    className="w-full rounded-lg border-gray-200 focus:border-[#0056D2] focus:ring-[#0056D2]/20"
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
                    rows={5}
                    className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:border-[#0056D2] focus:ring-2 focus:ring-[#0056D2]/20 resize-none text-sm"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  data-testid="contact-submit-btn"
                  className="bg-[#0056D2] hover:bg-[#004bb5] text-white rounded-lg px-6 py-5 font-medium transition-colors flex items-center gap-2"
                >
                  <Send className="w-4 h-4" />
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
