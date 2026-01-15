import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import book1 from "../assets/book1.jpg";
import book2 from "../assets/book2.jpg";
import book3 from "../assets/book3.jpg";
import book4 from "../assets/book4.jpg";
import book5 from "../assets/book5.jpg";

gsap.registerPlugin(ScrollTrigger);

const bookApi = {
  status: "success",
  books: [
    { id: 1, title: "The Alchemist", author: "Paulo Coelho", rating: 4.7, price: "₹299", image: "https://covers.openlibrary.org/b/id/8107896-L.jpg" },
    { id: 2, title: "Harry Potter", author: "J.K. Rowling", rating: 4.9, price: "₹499", image: "https://covers.openlibrary.org/b/id/7984916-L.jpg" },
    { id: 3, title: "Think and Grow Rich", author: "Napoleon Hill", rating: 4.6, price: "₹249", image: "https://covers.openlibrary.org/b/id/7222246-L.jpg" },
    { id: 4, title: "Rich Dad Poor Dad", author: "Robert Kiyosaki", rating: 4.8, price: "₹350", image: "https://covers.openlibrary.org/b/id/8370221-L.jpg" },
    { id: 5, title: "Atomic Habits", author: "James Clear", rating: 4.9, price: "₹450", image: "https://covers.openlibrary.org/b/id/9255891-L.jpg" },
    { id: 6, title: "Lord of the Rings", author: "J.R.R Tolkien", rating: 4.9, price: "₹699", image: "https://covers.openlibrary.org/b/id/8231856-L.jpg" },
    { id: 7, title: "To Kill a Mockingbird", author: "Harper Lee", rating: 4.8, price: "₹399", image: "https://covers.openlibrary.org/b/id/7696628-L.jpg" },
    { id: 8, title: "1984", author: "George Orwell", rating: 4.7, price: "₹349", image: "https://covers.openlibrary.org/b/id/7222246-L.jpg" }
  ]
};

export default function HeroPage() {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 4000, stopOnInteraction: false })]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animations
      gsap.fromTo(
        titleRef.current,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
            markers: false // Set to true for debugging
          },
        }
      );
      
      gsap.fromTo(
        subtitleRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          delay: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
      
      gsap.fromTo(
        ctaRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          delay: 0.4,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Carousel slide animations
      const carouselSlides = document.querySelectorAll('.embla__slide');
      gsap.fromTo(
        carouselSlides,
        { scale: 0.95, opacity: 0.8 },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.embla',
            start: 'top 80%',
          }
        }
      );
    }, heroRef);
    
    return () => ctx.revert();
  }, []);

  const slides = [
    { img: book1, title: 'Adventure Awaits', desc: 'Discover breathtaking mountain trails' },
    { img: book2, title: 'Ocean Breeze', desc: 'Relax on pristine beaches' },
    { img: book3, title: 'City Lights', desc: 'Feel the pulse of vibrant cities' },
    { img: book4, title: 'Desert Dreams', desc: 'Experience the magic of golden sands' },
    { img: book5, title: 'Forest Tales', desc: 'Get lost in enchanting woodlands' },
  ];

  return (
    <>
      <section ref={heroRef} className="relative min-h-screen flex flex-col justify-center items-center bg-linear-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
        {/* Animated background blobs - responsive sizing */}
        <div className="absolute top-0 left-0 w-48 h-48 xs:w-64 xs:h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-purple-700 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob"></div>
        <div className="absolute top-0 right-0 w-48 h-48 xs:w-64 xs:h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-yellow-700 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 xs:w-64 xs:h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-pink-700 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-4000"></div>

        {/* Hero content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto py-24">
          <h1 ref={titleRef} className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4">
            Jai Maa <span className="bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-serif">Kali</span>
          </h1>
          <p ref={subtitleRef} className="text-base xs:text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-purple-200">
            Your next adventure starts here. Discover amazing books and create unforgettable reading experiences.
          </p>
          
        </div>

        {/* Embla Carousel */}
        <div className="relative w-full max-w-5xl mx-auto mt-12 sm:mt-16 px-4 embla">
          <div className="overflow-hidden rounded-2xl shadow-2xl" ref={emblaRef}>
            <div className="flex">
              {slides.map((slide, idx) => (
                <div key={idx} className="embla__slide shrink-0 w-full relative">
                  <img 
                    src={slide.img} 
                    alt={slide.title} 
                    className="w-full h-48 xs:h-56 sm:h-64 md:h-80 lg:h-96 object-cover transition-transform duration-700 hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-4 sm:p-6 text-white">
                    <h3 className="text-lg xs:text-xl sm:text-2xl font-bold mb-1 sm:mb-2">{slide.title}</h3>
                    <p className="text-xs xs:text-sm sm:text-base text-gray-200">{slide.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Carousel Navigation Dots */}
          <div className="flex justify-center mt-4 sm:mt-6 gap-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                className="w-2 h-2 xs:w-3 xs:h-3 rounded-full bg-white/30 hover:bg-white/60 transition-colors"
                onClick={() => emblaApi && emblaApi.scrollTo(idx)}
              />
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-4 xs:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 xs:w-8 xs:h-8 text-purple-300" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>

        <style jsx>{`
          @keyframes blob {
            0% { transform: translate(0, 0) scale(1); }
            33% { transform: translate(30px, -50px) scale(1.1); }
            66% { transform: translate(-20px, 20px) scale(0.9); }
            100% { transform: translate(0, 0) scale(1); }
          }
          .animate-blob { animation: blob 7s infinite ease-in-out; }
          .animation-delay-2000 { animation-delay: 2s; }
          .animation-delay-4000 { animation-delay: 4s; }
          
          /* Custom scrollbar */
          ::-webkit-scrollbar {
            width: 10px;
          }
          ::-webkit-scrollbar-track {
            background: #0f172a;
          }
          ::-webkit-scrollbar-thumb {
            background: linear-gradient(to bottom, #8b5cf6, #ec4899);
            border-radius: 5px;
          }
        `}</style>
      </section>

      <section className="famous-book bg-linear-to-b from-white to-slate-100 text-black py-8 sm:py-12">
        <div className="container mx-auto px-4">
          <div className="py-6 sm:py-8 text-center">
            <h2 className="text-2xl xs:text-3xl md:text-4xl font-serif font-bold mb-4">Famous Books Collection</h2>
            <p className="italic text-gray-600 max-w-2xl mx-auto text-base xs:text-lg">
              "That's the thing about books. They let you travel without moving your feet."
              <span className="block mt-2 text-xs xs:text-sm">- Jhumpa Lahiri</span>
            </p>
          </div>
          
          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 xs:gap-4 sm:gap-6 max-w-4xl mx-auto mb-8 sm:mb-12">
            {[
              { number: "10K+", label: "Books Available" },
              { number: "4.8⭐", label: "Avg Rating" },
              { number: "50+", label: "Award Winners" },
              { number: "24/7", label: "Support" }
            ].map((stat, idx) => (
              <div key={idx} className="text-center p-3 xs:p-4 bg-white rounded-xl shadow-lg">
                <div className="text-xl xs:text-2xl md:text-3xl font-bold text-purple-600">{stat.number}</div>
                <div className="text-xs xs:text-sm text-gray-600 mt-1 xs:mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Famous Books Thumbnail Carousel */}
        <BookEmblaGallery />
        
        {/* Newsletter Section */}
        <div className="max-w-2xl mx-auto mt-12 sm:mt-20 p-4 xs:p-6 sm:p-8 bg-linear-to-r from-purple-50 to-pink-50 rounded-2xl shadow-xl">
          <h3 className="text-xl xs:text-2xl font-bold text-center mb-2 xs:mb-4">Stay Updated with New Arrivals</h3>
          <p className="text-gray-600 text-center mb-4 xs:mb-6 text-sm xs:text-base">Subscribe to our newsletter for the latest book releases and exclusive offers.</p>
          <div className="flex flex-col sm:flex-row gap-3 xs:gap-4">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="grow px-3 xs:px-4 py-2 xs:py-3 rounded-lg border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm xs:text-base"
            />
            <button className="px-4 xs:px-6 py-2 xs:py-3 bg-linear-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105 text-sm xs:text-base">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

function BookEmblaGallery() {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    align: 'start',
    slidesToScroll: 1,
    breakpoints: {
      '(min-width: 640px)': { slidesToScroll: 2 },
      '(min-width: 768px)': { slidesToScroll: 2 },
      '(min-width: 1024px)': { slidesToScroll: 3 },
    }
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRefs.current,
        { opacity: 0, y: 100, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          stagger: 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "bottom 20%",
            scrub: 1,
            markers: false
          }
        }
      );
      
      // Add hover effect animation
      cardRefs.current.forEach(card => {
        if (!card) return;
        
        const img = card.querySelector('img');
        
        card.addEventListener('mouseenter', () => {
          gsap.to(img, { scale: 1.1, duration: 0.3 });
          gsap.to(card, { y: -10, duration: 0.3 });
        });
        
        card.addEventListener('mouseleave', () => {
          gsap.to(img, { scale: 1, duration: 0.3 });
          gsap.to(card, { y: 0, duration: 0.3 });
        });
      });
    }, sectionRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-linear-to-b from-slate-900 via-purple-900 to-black py-12 xs:py-16 sm:py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-center text-2xl xs:text-3xl md:text-5xl font-extrabold text-white mb-4">
          📚 Bestselling Books Gallery
        </h2>
        <p className="text-center text-purple-200 mb-8 xs:mb-12 max-w-2xl mx-auto text-sm xs:text-base">
          Explore our curated collection of world-famous books that have inspired millions of readers worldwide.
        </p>

        {/* Navigation buttons */}
        <div className="flex justify-end gap-3 xs:gap-4 mb-4 xs:mb-6">
          <button 
            onClick={() => emblaApi && emblaApi.scrollPrev()}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <svg className="w-5 h-5 xs:w-6 xs:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={() => emblaApi && emblaApi.scrollNext()}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <svg className="w-5 h-5 xs:w-6 xs:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex gap-3 xs:gap-6">
            {bookApi.books.map((book, index) => (
              <div
                key={book.id}
                ref={(el) => (cardRefs.current[index] = el)}
                className="flex-[0_0_75%] xs:flex-[0_0_70%] sm:flex-[0_0_45%] md:flex-[0_0_35%] lg:flex-[0_0_25%]"
              >
                <div className="group bg-white rounded-2xl shadow-2xl overflow-hidden hover:shadow-yellow-400/40 transition-all duration-300 h-full">
                  <div className="overflow-hidden h-48 xs:h-52 sm:h-64">
                    <img
                      src={book.image}
                      alt={book.title}
                      className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-2 xs:top-4 right-2 xs:right-4 bg-purple-600 text-white px-2 xs:px-3 py-1 rounded-full text-xs xs:text-sm font-semibold">
                      Bestseller
                    </div>
                  </div>
                  <div className="p-3 xs:p-5">
                    <h3 className="text-base xs:text-xl font-bold text-gray-800 mb-1 xs:mb-2">{book.title}</h3>
                    <p className="text-xs xs:text-sm text-gray-500 mb-2 xs:mb-4">By {book.author}</p>
                    <div className="flex justify-between items-center mt-2 xs:mt-3">
                      <div className="flex items-center">
                        <span className="text-yellow-500 text-sm xs:text-lg">⭐</span>
                        <span className="ml-1 xs:ml-2 font-semibold text-sm xs:text-base">{book.rating}</span>
                      </div>
                      <span className="font-bold text-sm xs:text-lg text-green-600">{book.price}</span>
                    </div>
                    <button className="w-full mt-3 xs:mt-4 py-2 bg-linear-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-[1.02] text-sm xs:text-base">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Progress indicator */}
        <div className="flex justify-center mt-6 xs:mt-8 gap-2">
          {bookApi.books.slice(0, 5).map((_, idx) => (
            <div key={idx} className="w-2 h-2 rounded-full bg-white/30"></div>
          ))}
        </div>
      </div>
    </section>
  );
}