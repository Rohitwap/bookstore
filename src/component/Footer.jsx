import React, { useEffect } from 'react';

const Footer = () => {
  useEffect(() => {
    // Dynamic year
    const yearSpan = document.getElementById('year');
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();

    // Ensure GSAP & ScrollTrigger are loaded
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);

      gsap.from('.footer-icon', {
        scale: 0,
        rotation: 180,
        duration: 0.8,
        stagger: 0.15,
        ease: 'back.out(1.7)',
        scrollTrigger: { trigger: 'footer', start: 'top 90%' },
      });

      gsap.from('footer h2, footer h3', {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: { trigger: 'footer', start: 'top 90%' },
      });

      gsap.from('footer p', {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: { trigger: 'footer', start: 'top 90%' },
      });
    }
  }, []);

  return (
    <>
      <footer className="bg-linear-to-b from-gray-900 to-black text-white py-12 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Brand / Description */}
          <div className="md:col-span-1 space-y-4">
            <h2 className="text-2xl font-bold tracking-wide text-amber-400">Jai Maa Kali Bookstore</h2>
            <p className="text-gray-300 leading-relaxed">
              Discover a sanctuary of wisdom and devotion. At Jai Maa Kali Bookstore we curate spiritual literature, sacred texts, and soul-stirring stories that illuminate the path of the heart. Step inside and let every page deepen your connection to the divine.
            </p>
          </div>

          {/* Address */}
          <div className="md:col-span-1 space-y-2 text-center md:text-left">
            <h3 className="text-lg font-semibold text-amber-400">Visit Us</h3>
            <p className="text-gray-300">
              Bank More, Dhanbad<br />
              Jharkhand – 826001<br />
              India
            </p>
          </div>

          {/* Social Links */}
          <div className="md:col-span-1 flex flex-col items-center md:items-end space-y-4">
            <h3 className="text-lg font-semibold text-amber-400">Follow the Light</h3>
            <div className="flex space-x-4">
              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-amber-500 hover:bg-amber-400 transition-colors duration-300 flex items-center justify-center footer-icon"
              >
                <svg className="w-5 h-5 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35C.59 0 0 .59 0 1.325v21.35C0 23.41.59 24 1.325 24H12.82v-9.29H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.735 0 1.325-.59 1.325-1.325V1.325C24 .59 23.41 0 22.675 0z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-amber-500 hover:bg-amber-400 transition-colors duration-300 flex items-center justify-center footer-icon"
              >
                <svg className="w-5 h-5 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163zm0 1.802C9.042 3.965 8.71 3.977 7.433 4.032c-2.43.11-3.483 1.15-3.593 3.593-.056 1.277-.067 1.604-.067 4.567s.011 3.29.067 4.567c.11 2.443 1.163 3.483 3.593 3.593 1.277.056 1.604.067 4.567.067s3.29-.011 4.567-.067c2.443-.11 3.483-1.163 3.593-3.593.056-1.277.067-1.604.067-4.567s-.011-3.29-.067-4.567c-.11-2.443-1.163-3.483-3.593-3.593-1.277-.055-1.604-.067-4.567-.067zM12 6.837c-2.846 0-5.163 2.317-5.163 5.163s2.317 5.163 5.163 5.163 5.163-2.317 5.163-5.163S14.846 6.837 12 6.837zm0 8.529c-1.868 0-3.366-1.498-3.366-3.366s1.498-3.366 3.366-3.366 3.366 1.498 3.366 3.366-1.498 3.366-3.366 3.366zm6.406-6.938c0 .723-.586 1.309-1.309 1.309s-1.309-.586-1.309-1.309.586-1.309 1.309-1.309 1.309.586 1.309 1.309z"/>
                </svg>
              </a>

              {/* Twitter */}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="w-10 h-10 rounded-full bg-amber-500 hover:bg-amber-400 transition-colors duration-300 flex items-center justify-center footer-icon"
              >
                <svg className="w-5 h-5 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.223.085 4.93 4.93 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
          © <span id="year"></span> Jai Maa Kali Bookstore. All rights reserved. Made with ❤️ in Dhanbad.
        </div>
      </footer>
    </>
  );
};

export default Footer;
