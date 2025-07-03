import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', to: '/' },
    { name: 'Gallery', to: '#gallery' },
    { name: 'How it Works', to: '#how-it-works' },
  ];

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50 shadow-sm scroll-smooth">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8" style={{ maxWidth: '1500px' }}>
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">C</span>
            </div>
            <span className="text-xl font-bold text-gray-900">CartoonSwap</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) =>
              item.to.startsWith('#') ? (
                <a
                  key={item.name}
                  href={item.to}
                  className="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-200 relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                </a>
              ) : (
                <Link
                  key={item.name}
                  to={item.to}
                  className="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-200 relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                </Link>
              )
            )}
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/signin" className="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200">
              Sign In
            </Link>
            <Link
              to="/get-started"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100 bg-white">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) =>
                item.to.startsWith('#') ? (
                  <a
                    key={item.name}
                    href={item.to}
                    className="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-200 px-2 py-1"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    to={item.to}
                    className="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-200 px-2 py-1"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              )}

              <div className="flex flex-col space-y-2 pt-4 border-t border-gray-100">
                <Link
                  to="/signin"
                  className="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200 text-left px-2 py-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign In
                </Link>
                <Link
                  to="/get-started"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
