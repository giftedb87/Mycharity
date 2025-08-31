
import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { MyCharityLogo, FacebookIcon, TwitterIcon, InstagramIcon, MenuIcon, CloseIcon } from './IconComponents';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { to: '/', text: 'Home' },
    { to: '/about', text: 'About' },
    { to: '/donate', text: 'Donations' },
    { to: '/gallery', text: 'Gallery' },
    { to: '/contact', text: 'Contact' },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-2 md:py-1 border-b">
          <div className="text-sm text-gray-600">
            <span>(239) 555-0108</span> | <span>291 Royal Ave, Cherry Hill, NJ 08002</span>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="text-gray-600 hover:text-primary-yellow"><FacebookIcon /></a>
            <a href="#" className="text-gray-600 hover:text-primary-yellow"><TwitterIcon /></a>
            <a href="#" className="text-gray-600 hover:text-primary-yellow"><InstagramIcon /></a>
          </div>
        </div>
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2">
            <MyCharityLogo />
            <span className="text-2xl font-bold text-dark-charcoal">My Charity</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `text-gray-600 font-medium hover:text-primary-yellow transition-colors ${isActive ? 'text-primary-yellow' : ''}`
                }
              >
                {link.text}
              </NavLink>
            ))}
          </nav>
          <div className="hidden md:flex items-center space-x-4">
             <Link to="/donate" className="bg-primary-yellow text-white font-bold py-3 px-6 rounded-lg hover:bg-amber-500 transition-colors">
              Donate Now
            </Link>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4">
          <nav className="flex flex-col items-center space-y-4">
             {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `text-gray-600 font-medium hover:text-primary-yellow transition-colors ${isActive ? 'text-primary-yellow' : ''}`
                }
              >
                {link.text}
              </NavLink>
            ))}
            <Link to="/donate" onClick={() => setIsMenuOpen(false)} className="bg-primary-yellow text-white font-bold py-3 px-6 rounded-lg hover:bg-amber-500 transition-colors w-1/2 text-center">
              Donate Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;