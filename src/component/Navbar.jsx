import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import logo from "../assets/logo.png"

const navItems = ["Home", "About", "Categories", "BestSellers", "Contact"];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    if (!menuRef.current) return;

    if (isOpen) {
      gsap.fromTo(
        menuRef.current,
        { width: 0, opacity: 0 },
        {
          width: "auto",
          opacity: 1,
          duration: 0.4,
          ease: "power3.out",
        }
      );
    } else {
      gsap.to(menuRef.current, {
        width: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power3.in",
      });
    }
  }, [isOpen]);

  return (
    <nav
      className="bg-white shadow-md fixed w-full top-0 z-50 h-20"
      role="navigation"
      aria-label="Main Navigation"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16 items-center">

          {/* Logo */}
          <div className="text-xl font-bold text-indigo-600">
            <img src={logo} alt="logo" className="w-45 h-auto pt-6 px-6"/>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex ml-auto space-x-6">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href={`/${item.toLowerCase()}`}
                  className="px-4 py-2 rounded-full transition-all duration-300
                             hover:border hover:border-indigo-500
                             hover:text-indigo-600
                             focus:outline-none focus:ring-2 focus:ring-indigo-400"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Toggle Button */}
          <button
            className="md:hidden ml-auto text-2xl text-gray-700
                       focus:outline-none focus:ring-2 focus:ring-indigo-500"
            aria-label="Toggle Menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu (GSAP Animated) */}
      <div
        ref={menuRef}
        className="md:hidden overflow-hidden bg-white shadow-lg fixed right-0 top-20 h-auto"
        style={{ width: 0, opacity: 0 }}
      >
        <ul className="px-4 py-4 space-y-2 w-64" role="menu">
          {navItems.map((item) => (
            <li key={item} role="menuitem">
              <a
                href={`/${item.toLowerCase()}`}
                className="block px-4 py-2 rounded-full transition-all duration-300
                           hover:border hover:border-indigo-500
                           hover:text-indigo-600
                           focus:outline-none focus:ring-2 focus:ring-indigo-400"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
