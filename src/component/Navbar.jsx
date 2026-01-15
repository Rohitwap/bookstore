import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import logo from '../assets/logo.png';

const BookNavbar = () => {
  const navRef = useRef(null);
  const linkRefs = useRef([]);
  const mobileLinkRefs = useRef([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // stagger fade-in for nav links
    gsap.fromTo(
      linkRefs.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power2.out' }
    );

    // subtle underline grow on hover
    linkRefs.current.forEach((el) => {
      if (!el) return;
      const underline = el.querySelector('.underline');
      if (underline) {
        el.addEventListener('mouseenter', () =>
          gsap.to(underline, { scaleX: 1, duration: 0.3, ease: 'power2.out' })
        );
        el.addEventListener('mouseleave', () =>
          gsap.to(underline, { scaleX: 0, duration: 0.3, ease: 'power2.out' })
        );
      }
    });
  }, []);

  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(
        mobileLinkRefs.current,
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.4, stagger: 0.08, ease: 'power2.out' }
      );
    }
  }, [isOpen]);

  const navItems = ['Home', 'Categories', 'Bestsellers', 'About', 'Contact'];

  return (
    <nav
      ref={navRef}
      className="relative z-50 flex items-center justify-between px-4 py-4 shadow-md md:px-8 lg:px-12"
    >
      {/* Brand */}
      <div className="text-xl font-bold text-indigo-700 md:text-2xl">
        <img src={logo} alt="logo" className="w-35 h-auto" />
      </div>

      {/* Desktop Links */}
      <ul className="hidden md:flex items-center gap-6">
        {navItems.map((item, idx) => (
          <li key={item}>
            <a
              href={`/${item.toLowerCase()}`}
              ref={(r) => (linkRefs.current[idx] = r)}
              className="relative px-3 py-2 text-gray-700 hover:text-indigo-700 transition-colors duration-300"
            >
              {item}
              <span className="underline absolute left-0 bottom-0 w-full h-0.5 bg-indigo-700 origin-left scale-x-0" />
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none"
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Mobile Menu */}
      <div
        className={`absolute top-full left-0 w-full bg-white shadow-lg md:hidden transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <ul className="flex flex-col items-center gap-4 py-6">
          {navItems.map((item, idx) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                ref={(r) => (mobileLinkRefs.current[idx] = r)}
                onClick={() => setIsOpen(false)}
                className="relative px-3 py-2 text-gray-700 hover:text-indigo-700 transition-colors duration-300"
              >
                {item}
                <span className="underline absolute left-0 bottom-0 w-full h-0.5 bg-indigo-700 origin-left scale-x-0" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default BookNavbar;
