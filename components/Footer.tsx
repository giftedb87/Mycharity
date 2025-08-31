
import React from 'react';
import { Link } from 'react-router-dom';
import { MyCharityLogo, FacebookIcon, TwitterIcon, InstagramIcon, YoutubeIcon } from './IconComponents';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-charcoal text-gray-300">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Section */}
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <MyCharityLogo color="white" />
              <span className="text-2xl font-bold text-white">My Charity</span>
            </Link>
            <p className="text-gray-400">
              A charity organization dedicated to providing education and support to children in need.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="hover:text-primary-yellow transition-colors"><FacebookIcon /></a>
              <a href="#" className="hover:text-primary-yellow transition-colors"><TwitterIcon /></a>
              <a href="#" className="hover:text-primary-yellow transition-colors"><InstagramIcon /></a>
              <a href="#" className="hover:text-primary-yellow transition-colors"><YoutubeIcon /></a>
            </div>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-primary-yellow transition-colors">About Us</Link></li>
              <li><Link to="/donate" className="hover:text-primary-yellow transition-colors">Donate</Link></li>
              <li><Link to="/events" className="hover:text-primary-yellow transition-colors">Upcoming Events</Link></li>
              <li><Link to="/blog" className="hover:text-primary-yellow transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-primary-yellow transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Mission & Vision Section */}
          <div>
             <h3 className="text-xl font-semibold text-white mb-4">Explore</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-primary-yellow transition-colors">Our Causes</a></li>
              <li><a href="#" className="hover:text-primary-yellow transition-colors">Volunteers</a></li>
              <li><a href="#" className="hover:text-primary-yellow transition-colors">Partners</a></li>
              <li><a href="#" className="hover:text-primary-yellow transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
          
          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start space-x-3">
                <span>📍</span>
                <span>291 Royal St, New Jersey 45121</span>
              </li>
              <li className="flex items-start space-x-3">
                <span>📞</span>
                <span>(239) 555-0108</span>
              </li>
              <li className="flex items-start space-x-3">
                <span>✉️</span>
                <span>contact@mycharity.org</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-gray-900 py-4">
        <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} My Charity. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
