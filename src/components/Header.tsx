import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { HiOutlineMenuAlt2, HiOutlineMenuAlt3 } from "react-icons/hi";
import '/src/CustomStyle/textStyling.css';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const getLinkClassName = (path: string) => {
    return location.pathname === path
      ? 'block text-lg lg:text-xl px-4 py-2 rounded-md border border-white gradient-text-navigation text-blue font-bold' // Active link style
      : 'block text-lg lg:text-xl px-4 py-2 rounded-md border border-white hover:border-blue text-blue'; // Inactive link style
  };

  const onNavigationChange = (e: React.MouseEvent<HTMLAnchorElement>, to: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    navigate(to);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="text-2xl lg:text-3xl font-bold text-blue">
          <Link to="/">Code Commerce</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="block md:hidden text-gray focus:outline-none text-2xl"
          onClick={handleMenuToggle}
          aria-label="Toggle menu"
        >
          {isMenuOpen && (<HiOutlineMenuAlt2/>)}
          {!isMenuOpen && (<HiOutlineMenuAlt3/>)}
        </button>

        {/* Navigation Menu */}
        <nav
          className={`fixed md:relative top-16 right-0 md:top-0 w-full md:w-auto bg-white md:bg-transparent md:flex md:space-x-4 md:items-center transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}
        >
          <div className="flex flex-col md:flex-row w-full md:w-auto">
            <Link
              to="/"
              onClick={(e) => onNavigationChange(e, "/")}
              className={getLinkClassName("/")}
            >
              Home
            </Link>
            <Link
              to="/category/1"
              onClick={(e) => onNavigationChange(e, "/category/1")}
              className={getLinkClassName("/category/1")}
            >
              Electronics
            </Link>
            <Link
              to="/category/2"
              onClick={(e) => onNavigationChange(e, "/category/2")}
              className={getLinkClassName("/category/2")}
            >
              Fashion
            </Link>
            <Link
              to="/category/3"
              onClick={(e) => onNavigationChange(e, "/category/3")}
              className={getLinkClassName("/category/3")}
            >
              Appliances
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
