import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import CollectionsIcon from "@mui/icons-material/Collections";
import CameraAltIcon from "@mui/icons-material/CameraAlt";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  // Array of navigation items for easy mapping
  const navItems = [
    { name: "Home", href: "/" },
    { name: "Gallery", href: "/gallery" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  // Handler for Collections icon click
  const handleGalleryClick = () => {
    navigate("/gallery");
  };

  return (
    <nav className="shadow-lg bg-purple-900 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* 1. Left: Logo/Brand */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-lg font-bold text-white tracking-wide">
              Markkybean <CameraAltIcon fontSize="small" />
            </Link>
          </div>

          {/* 2. Center: Desktop Navigation Links */}
          <div className="flex-grow flex justify-center hidden md:flex">
            <div className="flex space-x-8">
              {navItems.map((item) =>
                item.href.startsWith("#") ? (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-white hover:text-gray-300 transition-colors duration-200 text-base font-semibold"
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-white hover:text-gray-300 transition-colors duration-200 text-base font-semibold"
                  >
                    {item.name}
                  </Link>
                )
              )}
            </div>
          </div>

          {/* 3. Right: Social Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://www.facebook.com/markkybean"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300"
              aria-label="Facebook"
            >
              <FacebookIcon fontSize="small" />
            </a>
            <a
              href="https://www.instagram.com/markkybean/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300"
              aria-label="Instagram"
            >
              <InstagramIcon fontSize="small" />
            </a>
            <button
              onClick={handleGalleryClick}
              className="text-white hover:text-gray-300 focus:outline-none"
              aria-label="Gallery"
            >
              <CollectionsIcon fontSize="small" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4">
            {navItems.map((item) =>
              item.href.startsWith("#") ? (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-gray-300 hover:text-white py-2 text-base font-medium"
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block text-gray-300 hover:text-white py-2 text-base font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              )
            )}
            {/* Social icons in mobile menu */}
            <div className="flex space-x-4 pt-4">
              <a
                href="https://www.facebook.com/markkybean"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300"
                aria-label="Facebook"
              >
                <FacebookIcon fontSize="small" />
              </a>
              <a
                href="https://www.instagram.com/markkybean/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300"
                aria-label="Instagram"
              >
                <InstagramIcon fontSize="small" />
              </a>
              <button
                onClick={handleGalleryClick}
                className="text-white hover:text-gray-300 focus:outline-none"
                aria-label="Gallery"
              >
                <CollectionsIcon fontSize="small" />
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
