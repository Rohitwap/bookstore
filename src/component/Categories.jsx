import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const categories = [
  { name: 'Fiction', icon: '📚', color: 'from-purple-500 to-indigo-600', books: 1247 },
  { name: 'Science', icon: '🔬', color: 'from-blue-500 to-cyan-600', books: 892 },
  { name: 'History', icon: '🏛️', color: 'from-amber-500 to-orange-600', books: 634 },
  { name: 'Art & Design', icon: '🎨', color: 'from-pink-500 to-rose-600', books: 521 },
  { name: 'Technology', icon: '💻', color: 'from-emerald-500 to-teal-600', books: 789 },
  { name: 'Philosophy', icon: '🤔', color: 'from-slate-500 to-gray-600', books: 412 },
  { name: 'Cooking', icon: '👨‍🍳', color: 'from-yellow-500 to-amber-600', books: 356 },
  { name: 'Travel', icon: '✈️', color: 'from-sky-500 to-blue-600', books: 298 },
];

export default function Categories() {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    // Hero title animation
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' }
    );

    // Staggered card animations
    cardRefs.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(
          card,
          { opacity: 0, y: 60, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            delay: index * 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );

        // Hover animation
        card.addEventListener('mouseenter', () => {
          gsap.to(card, { scale: 1.05, duration: 0.3, ease: 'power2.out' });
        });
        card.addEventListener('mouseleave', () => {
          gsap.to(card, { scale: 1, duration: 0.3, ease: 'power2.out' });
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800"
    >
      {/* Header */}
      <header className="relative overflow-hidden py-20 px-6">
        <div className="absolute inset-0 bg-linear-to-b from-white/20 to-transparent dark:from-slate-800/20"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <h1
            ref={titleRef}
            className="text-5xl md:text-7xl font-extrabold bg-linear-to-r from-slate-800 to-slate-600 dark:from-slate-100 dark:to-slate-300 bg-clip-text text-transparent mb-4"
          >
            Book of Categories
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400">
            Discover worlds within pages — explore our curated collection
          </p>
        </div>
      </header>

      {/* Categories Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div
              key={category.name}
              ref={(el) => (cardRefs.current[index] = el)}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-linear-to-br ${category.color} opacity-90`}></div>

              {/* Content */}
              <div className="relative p-8 h-64 flex flex-col justify-between text-white">
                <div>
                  <div className="text-5xl mb-4">{category.icon}</div>
                  <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                  <p className="text-white/80 text-sm">{category.books} books</p>
                </div>

                {/* Explore Link */}
                <div className="flex items-center justify-between mt-6">
                  <span className="text-sm font-medium">Explore →</span>
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                    <svg
                      className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </section>

      {/* Floating decoration */}
      <div className="fixed top-20 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
      <div className="fixed top-40 right-10 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="fixed bottom-20 left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
      `}</style>
    </div>
  );
}
