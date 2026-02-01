import { Link } from 'react-router-dom';
import { Heart, Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, MapPin } from 'lucide-react';

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
    <footer data-testid="footer" className="bg-white border-t border-gray-100">
      {/* Main Footer */}
      <div className="py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
            {/* About - Larger column */}
            <div className="lg:col-span-4">
              <Link to="/" className="flex items-center gap-3 mb-5">
                <img
                  src="https://customer-assets-staging.emergentagent.com/job_change-makers/artifacts/szfol7tw_image.png"
                  alt="We Care Foundation"
                  className="h-10 w-auto"
                />
              </Link>
              <p className="text-gray-500 text-sm mb-6 leading-relaxed max-w-xs">
                Empowering communities worldwide through education, healthcare, and sustainable development.
              </p>
              <div className="flex gap-2">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 hover:bg-[#0056D2] hover:text-white transition-all duration-200"
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-2">
              <h4 className="font-semibold text-gray-900 mb-4 text-sm uppercase tracking-wide">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.path}
                      className="text-gray-500 text-sm hover:text-[#0056D2] transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Programs */}
            <div className="lg:col-span-2">
              <h4 className="font-semibold text-gray-900 mb-4 text-sm uppercase tracking-wide">Programs</h4>
              <ul className="space-y-3">
                {programs.map((program, index) => (
                  <li key={index}>
                    <Link
                      to={program.path}
                      className="text-gray-500 text-sm hover:text-[#0056D2] transition-colors"
                    >
                      {program.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Newsletter */}
            <div className="lg:col-span-4">
              <h4 className="font-semibold text-gray-900 mb-4 text-sm uppercase tracking-wide">Stay Connected</h4>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#0056D2]/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-[#0056D2]" />
                  </div>
                  <span className="text-gray-500 text-sm">San Francisco, CA 94102</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#0056D2]/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-4 h-4 text-[#0056D2]" />
                  </div>
                  <span className="text-gray-500 text-sm">hello@wecarefoundation.org</span>
                </li>
              </ul>

              {/* Newsletter */}
              <div className="bg-gray-50 p-4 rounded-xl">
                <p className="text-sm font-medium text-gray-900 mb-3">Subscribe to our newsletter</p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    data-testid="newsletter-email-input"
                    className="flex-1 px-4 py-2.5 rounded-lg bg-white border border-gray-200 text-sm focus:outline-none focus:border-[#0056D2] focus:ring-2 focus:ring-[#0056D2]/10"
                  />
                  <button
                    data-testid="newsletter-submit-btn"
                    className="px-4 py-2.5 bg-[#0056D2] text-white rounded-lg hover:bg-[#004bb5] transition-colors font-medium text-sm"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-100 py-6">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 We Care Foundation. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-gray-400 text-sm hover:text-gray-600 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 text-sm hover:text-gray-600 transition-colors">
                Terms of Service
              </a>
              <Link
                to="/donate"
                data-testid="footer-donate-btn"
                className="flex items-center gap-2 bg-[#E91E63] text-white px-5 py-2 rounded-lg font-medium text-sm hover:bg-[#d81b60] transition-colors"
              >
                <Heart className="w-4 h-4" fill="currentColor" />
                Donate
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
