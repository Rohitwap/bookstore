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
    { id: 6, title: "Lord of the Rings", author: "J.R.R Tolkien", rating: 4.9, price: "₹699", image: "https://covers.openlibrary.org/b/id/8231856-L.jpg" }
  ]
};

export default function HeroPage() {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 4000 })]);

  useEffect(() => {
    const ctx = gsap.context(() => {
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
    }, heroRef);
    return () => ctx.revert();
  }, []);

  const slides = [
    { img: book1, title: 'Adventure Awaits', desc: 'Discover breathtaking mountain trails' },
    { img: book2, title: 'Ocean Breeze', desc: 'Relax on pristine beaches' },
    { img: book3, title: 'City Lights', desc: 'Feel the pulse of vibrant cities' },
    { img: book4, title: 'City Lights', desc: 'Feel the pulse of vibrant cities' },
    { img: book5, title: 'City Lights', desc: 'Feel the pulse of vibrant cities' },
  ];

  return (
    <>
      <section ref={heroRef} className="relative min-h-screen flex flex-col justify-center items-center bg-linear-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
        {/* Animated background blobs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-700 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-700 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-700 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-4000"></div>

        {/* Hero content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 ref={titleRef} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4">
            Explore the World
          </h1>
          <p ref={subtitleRef} className="text-lg sm:text-xl md:text-2xl mb-8 text-purple-200">
            Your next adventure starts here. Discover amazing destinations and create unforgettable memories.
          </p>
          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 rounded-full bg-linear-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105 shadow-lg">
              Start Exploring
            </button>
            <button className="px-8 py-3 rounded-full border-2 border-white hover:bg-white hover:text-slate-900 transition-all">
              Watch Demo
            </button>
          </div>
        </div>

        {/* Embla Carousel */}
        <div className="relative w-full max-w-5xl mx-auto mt-16 px-4">
          <div className="overflow-hidden rounded-2xl shadow-2xl" ref={emblaRef}>
            <div className="flex">
              {slides.map((slide, idx) => (
                <div key={idx} className="shrink-0 w-full relative">
                  <img src={slide.img} alt={slide.title} className="w-full h-64 sm:h-80 md:h-96 object-cover" />
                  <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6 text-white">
                    <h3 className="text-xl sm:text-2xl font-bold">{slide.title}</h3>
                    <p className="text-sm sm:text-base text-gray-200">{slide.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
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
          .animate-blob { animation: blob 7s infinite; }
          .animation-delay-2000 { animation-delay: 2s; }
          .animation-delay-4000 { animation-delay: 4s; }
        `}</style>
      </section>

      <section className="famous-book bg-white text-black">
        <div className="py-6 text-center">
          <h2 className="text-2xl font-serif">Famous Book</h2>
          <p className="italic text-gray-600">“It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.”</p>
        </div>
        {/* Famous Books Thumbnail Carousel */}
        <BookEmblaGallery />
      </section>
    </>
  );
}

function BookEmblaGallery() {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);
  const [emblaRef] = useEmblaCarousel({ loop: true, align: 'start' });

  useEffect(() => {
    gsap.fromTo(
      cardRefs.current,
      { opacity: 0, y: 60, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%"
        }
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-linear-to-b from-slate-900 to-black py-20">
      <h2 className="text-center text-4xl md:text-5xl font-extrabold text-white mb-12">
        📚 World Famous Books Gallery
      </h2>

      <div ref={emblaRef} className="overflow-hidden px-4">
        <div className="flex gap-6">
          {bookApi.books.map((book, index) => (
            <div
              key={book.id}
              ref={(el) => (cardRefs.current[index] = el)}
              className="flex-[0_0_80%] sm:flex-[0_0_45%] md:flex-[0_0_30%] lg:flex-[0_0_22%]"
            >
              <div className="group bg-white rounded-2xl shadow-2xl overflow-hidden hover:shadow-yellow-400/40 transition">
                <div className="overflow-hidden">
                  <img
                    src={book.image}
                    alt={book.title}
                    className="h-80 w-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-5 text-center">
                  <h3 className="text-lg font-bold text-gray-800">{book.title}</h3>
                  <p className="text-sm text-gray-500">{book.author}</p>
                  <div className="flex justify-between items-center mt-3 text-sm">
                    <span className="text-yellow-500">⭐ {book.rating}</span>
                    <span className="font-semibold text-green-600">₹{book.price}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
