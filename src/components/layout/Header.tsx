import React, { useEffect, useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md py-3 shadow-md' : 'py-5'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#home" className="text-xl font-bold">
          Gihan Samaraweera
        </a>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {['Home', 'Projects', 'Skills', 'About', 'Contact'].map(item => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="font-medium relative group"
            >
              <span className="relative">
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
              </span>
            </a>
          ))}
        </nav>
        {/* Mobile Menu Button */}
        <button className="md:hidden focus:outline-none" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </div>
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-gray-900 shadow-lg py-4 px-4">
          <nav className="flex flex-col space-y-4">
            {['Home', 'Projects', 'Skills', 'About', 'Contact'].map(item => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="font-medium py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>;
};
export default Header;