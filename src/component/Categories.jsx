import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const categories = [
  { 
    name: 'Fiction', 
    icon: '📚', 
    color: 'from-purple-500 to-indigo-600', 
    gradient: 'from-purple-500 via-violet-500 to-indigo-600',
    books: 1247,
    description: 'Imaginative worlds and compelling stories'
  },
  { 
    name: 'Science', 
    icon: '🔬', 
    color: 'from-blue-500 to-cyan-600',
    gradient: 'from-blue-500 via-cyan-500 to-teal-600',
    books: 892,
    description: 'Discoveries and breakthroughs'
  },
  { 
    name: 'History', 
    icon: '🏛️', 
    color: 'from-amber-500 to-orange-600',
    gradient: 'from-amber-500 via-orange-500 to-red-600',
    books: 634,
    description: 'Journey through time and civilizations'
  },
  { 
    name: 'Art & Design', 
    icon: '🎨', 
    color: 'from-pink-500 to-rose-600',
    gradient: 'from-pink-500 via-rose-500 to-red-600',
    books: 521,
    description: 'Creative expression and visual wonders'
  },
  { 
    name: 'Technology', 
    icon: '💻', 
    color: 'from-emerald-500 to-teal-600',
    gradient: 'from-emerald-500 via-green-500 to-teal-600',
    books: 789,
    description: 'Innovation and digital frontiers'
  },
  { 
    name: 'Philosophy', 
    icon: '🤔', 
    color: 'from-slate-500 to-gray-600',
    gradient: 'from-slate-500 via-gray-500 to-zinc-600',
    books: 412,
    description: 'Wisdom and life\'s mysteries'
  },
  { 
    name: 'Cooking', 
    icon: '👨‍🍳', 
    color: 'from-yellow-500 to-amber-600',
    gradient: 'from-yellow-500 via-amber-500 to-orange-600',
    books: 356,
    description: 'Culinary delights and recipes'
  },
  { 
    name: 'Travel', 
    icon: '✈️', 
    color: 'from-sky-500 to-blue-600',
    gradient: 'from-sky-500 via-blue-400 to-indigo-600',
    books: 298,
    description: 'Adventure across the globe'
  },
  { 
    name: 'Biography', 
    icon: '📖', 
    color: 'from-fuchsia-500 to-pink-600',
    gradient: 'from-fuchsia-500 via-purple-500 to-pink-600',
    books: 543,
    description: 'Lives that inspire'
  },
  { 
    name: 'Health', 
    icon: '💚', 
    color: 'from-lime-500 to-green-600',
    gradient: 'from-lime-500 via-green-500 to-emerald-600',
    books: 412,
    description: 'Wellness and vitality'
  },
  { 
    name: 'Business', 
    icon: '💼', 
    color: 'from-indigo-500 to-purple-600',
    gradient: 'from-indigo-500 via-purple-500 to-violet-600',
    books: 678,
    description: 'Strategies and success'
  },
  { 
    name: 'Poetry', 
    icon: '✍️', 
    color: 'from-rose-500 to-pink-600',
    gradient: 'from-rose-500 via-pink-500 to-rose-600',
    books: 321,
    description: 'Words that touch the soul'
  },
];

export default function Categories() {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const cardRefs = useRef([]);
  const floatingIconsRef = useRef([]);
  const counterRefs = useRef([]);

  useEffect(() => {
    // Hero title animation with split text effect
    gsap.fromTo(
      titleRef.current,
      { 
        opacity: 0, 
        y: 80,
        scale: 0.9 
      },
      { 
        opacity: 1, 
        y: 0, 
        scale: 1, 
        duration: 1.5, 
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Subtitle animation
    gsap.fromTo(
      subtitleRef.current,
      { opacity: 0, y: 40 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1.2, 
        delay: 0.3,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: subtitleRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Staggered card animations with rotation
    cardRefs.current.forEach((card, index) => {
      if (card) {
        // Entry animation
        gsap.fromTo(
          card,
          { 
            opacity: 0, 
            y: 100, 
            rotationY: 45,
            scale: 0.8 
          },
          {
            opacity: 1,
            y: 0,
            rotationY: 0,
            scale: 1,
            duration: 1,
            delay: index * 0.1,
            ease: 'back.out(1.7)',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );

        // Hover animation
        card.addEventListener('mouseenter', () => {
          gsap.to(card, { 
            scale: 1.08, 
            y: -15,
            rotationY: 10,
            duration: 0.4, 
            ease: 'power2.out' 
          });
          
          // Animate the icon inside
          const icon = card.querySelector('.category-icon');
          if (icon) {
            gsap.to(icon, {
              scale: 1.3,
              rotation: 15,
              duration: 0.4,
              ease: 'back.out(2)'
            });
          }
        });
        
        card.addEventListener('mouseleave', () => {
          gsap.to(card, { 
            scale: 1, 
            y: 0,
            rotationY: 0,
            duration: 0.4, 
            ease: 'power2.out' 
          });
          
          const icon = card.querySelector('.category-icon');
          if (icon) {
            gsap.to(icon, {
              scale: 1,
              rotation: 0,
              duration: 0.4,
              ease: 'power2.out'
            });
          }
        });

        // Counter animation for book numbers
        const counter = counterRefs.current[index];
        if (counter) {
          gsap.to(counter, {
            innerText: categories[index]?.books || 0,
            duration: 2,
            ease: "power2.out",
            snap: { innerText: 1 },
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              onEnter: () => {
                gsap.fromTo(counter,
                  { innerText: 0 },
                  { 
                    innerText: categories[index]?.books || 0,
                    duration: 2,
                    ease: "power2.out",
                    snap: { innerText: 1 }
                  }
                );
              }
            }
          });
        }
      }
    });

    // Floating icons animation
    floatingIconsRef.current.forEach((icon, index) => {
      if (icon) {
        gsap.to(icon, {
          y: -20,
          rotation: 360,
          duration: 3 + index * 0.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }
    });

    // Background parallax effect
    gsap.to(containerRef.current, {
      backgroundPosition: '50% 100%',
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      }
    });

    // Text reveal effect on scroll
    gsap.utils.toArray('.reveal-text').forEach((text) => {
      gsap.fromTo(text,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: text,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-linear-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            ref={el => floatingIconsRef.current[i] = el}
            className="absolute text-4xl opacity-10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            {['📚', '🔖', '✨', '🌟', '📖'][i % 5]}
          </div>
        ))}
      </div>

      {/* Header */}
      <header className="relative overflow-hidden py-24 px-6">
        <div className="absolute inset-0 bg-linear-to-b from-white/30 to-transparent dark:from-slate-800/30"></div>
        <div className="relative max-w-6xl mx-auto text-center">
          <h1
            ref={titleRef}
            className="text-5xl md:text-8xl font-extrabold mb-6"
          >
            <span className="bg-linear-to-r from-purple-600 via-pink-500 to-orange-500 bg-clip-text text-transparent">
              Explore Categories
            </span>
          </h1>
          <p 
            ref={subtitleRef}
            className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto reveal-text"
          >
            Dive into our curated collection of literary treasures. Each category holds a universe waiting to be discovered.
          </p>
          
          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mt-12 reveal-text">
            {[
              { label: 'Total Books', value: '6000+' },
              { label: 'Categories', value: '12+' },
              { label: 'Daily Readers', value: '5000+' },
              { label: 'Years Serving', value: '25+' }
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl md:text-4xl font-bold bg-linear-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-500 dark:text-slate-400 mt-2">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* Categories Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-32">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-800 dark:text-white reveal-text">
          Discover Your Next Read
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div
              key={category.name}
              ref={(el) => (cardRefs.current[index] = el)}
              className="group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 cursor-pointer"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-linear-to-br ${category.gradient} opacity-90 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              {/* Animated Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,white,transparent)]"></div>
              </div>

              {/* Content */}
              <div className="relative p-8 h-80 flex flex-col justify-between text-white">
                <div>
                  <div className="category-icon text-6xl mb-6 transform transition-transform duration-500">
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{category.name}</h3>
                  <p className="text-white/80 text-sm mb-4 min-h-10">
                    {category.description}
                  </p>
                </div>

                {/* Book Count with Animation */}
                <div className="mt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-3xl font-bold">
                        <span ref={el => counterRefs.current[index] = el}>0</span>
                      </div>
                      <div className="text-sm text-white/70">Books Available</div>
                    </div>
                    
                    {/* Explore Button */}
                    <div className="relative">
                      <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-all duration-300 transform group-hover:scale-110">
                        <svg
                          className="w-6 h-6 transform group-hover:translate-x-2 transition-transform duration-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                      <div className="absolute inset-0 animate-ping opacity-20 bg-white rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-linear-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <div className="text-center pb-20 px-6 reveal-text">
        <div className="max-w-4xl mx-auto bg-linear-to-r from-purple-500/10 via-pink-500/10 to-orange-500/10 rounded-3xl p-12 backdrop-blur-sm border border-white/20">
          <h3 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-6">
            Can't Find What You're Looking For?
          </h3>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
            Request a custom collection or suggest new categories. We're always expanding!
          </p>
          <button className="group px-8 py-4 rounded-full bg-linear-to-r from-purple-600 to-pink-600 text-white font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50">
            <span className="flex items-center gap-3">
              Suggest Category
              <svg className="w-5 h-5 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </button>
        </div>
      </div>

      {/* Floating blobs */}
      <div className="fixed top-20 left-10 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob pointer-events-none"></div>
      <div className="fixed top-40 right-10 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000 pointer-events-none"></div>
      <div className="fixed bottom-20 left-1/4 w-96 h-96 bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000 pointer-events-none"></div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1) rotate(0deg);
          }
          33% {
            transform: translate(50px, -50px) scale(1.1) rotate(120deg);
          }
          66% {
            transform: translate(-30px, 30px) scale(0.9) rotate(240deg);
          }
          100% {
            transform: translate(0px, 0px) scale(1) rotate(360deg);
          }
        }
        .animate-blob {
          animation: blob 20s infinite ease-in-out;
        }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 10px;
        }
        ::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
        }
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #8b5cf6, #ec4899);
          border-radius: 5px;
        }
      `}</style>
    </div>
  );
}