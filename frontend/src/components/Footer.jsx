import { Link } from 'react-router-dom';
import { Heart, Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Our Projects', path: '/projects' },
    { name: 'Our Team', path: '/team' },
    { name: 'Volunteer', path: '/volunteer' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const programs = [
    { name: 'Education', path: '/projects' },
    { name: 'Healthcare', path: '/projects' },
    { name: 'Environment', path: '/projects' },
    { name: 'Food Security', path: '/projects' },
    { name: 'Housing', path: '/projects' },
    { name: 'Clean Water', path: '/projects' },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  return (
    <footer data-testid="footer" className="bg-[#1A1A1A] text-white">
      {/* CTA Section */}
      <div className="bg-[#0056D2] py-12">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-2">Ready to Make a Difference?</h3>
              <p className="text-white/80">Join thousands of supporters changing lives every day.</p>
            </div>
            <Link
              to="/donate"
              data-testid="footer-donate-btn"
              className="flex items-center gap-2 bg-white text-[#0056D2] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#E91E63] hover:text-white transition-all duration-300 shadow-lg"
            >
              <Heart className="w-5 h-5" fill="currentColor" />
              Donate Now
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* About */}
            <div>
              <Link to="/" className="flex items-center gap-3 mb-6">
                <img
                  src="https://customer-assets-staging.emergentagent.com/job_change-makers/artifacts/szfol7tw_image.png"
                  alt="We Care Foundation"
                  className="h-12 w-auto"
                />
              </Link>
              <p className="text-gray-400 text-sm mb-6">
                We Care Foundation is dedicated to empowering communities worldwide through 
                education, healthcare, and sustainable development initiatives.
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#0056D2] transition-colors"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.path}
                      className="footer-link text-sm hover:text-white hover:pl-2 transition-all"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Programs */}
            <div>
              <h4 className="text-lg font-bold mb-6">Our Programs</h4>
              <ul className="space-y-3">
                {programs.map((program, index) => (
                  <li key={index}>
                    <Link
                      to={program.path}
                      className="footer-link text-sm hover:text-white hover:pl-2 transition-all"
                    >
                      {program.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-bold mb-6">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#FF9F1C] shrink-0 mt-0.5" />
                  <span className="text-gray-400 text-sm">
                    123 Hope Street, San Francisco, CA 94102
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#FF9F1C] shrink-0" />
                  <span className="text-gray-400 text-sm">+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#FF9F1C] shrink-0" />
                  <span className="text-gray-400 text-sm">hello@wecarefoundation.org</span>
                </li>
              </ul>

              {/* Newsletter */}
              <div className="mt-6">
                <h5 className="font-semibold mb-3">Subscribe to Newsletter</h5>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Your email"
                    data-testid="newsletter-email-input"
                    className="flex-1 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm focus:outline-none focus:border-[#0056D2]"
                  />
                  <button
                    data-testid="newsletter-submit-btn"
                    className="px-4 py-2 bg-[#0056D2] rounded-full hover:bg-[#004bb5] transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-6">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              © 2024 We Care Foundation. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-500 text-sm hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 text-sm hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-500 text-sm hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
