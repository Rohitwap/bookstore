import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { QRCodeSVG } from 'qrcode.react';
import { FaInstagram, FaYoutube, FaTwitter, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaPhone, FaClock, FaBookOpen, FaHeart } from 'react-icons/fa';
import image from "../assets/image.png";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRefs = {
    header: useRef(null),
    info: useRef(null),
    qr: useRef(null),
    social: useRef(null),
    footer: useRef(null),
  };

  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const infoCardsRef = useRef([]);
  const qrCardRef = useRef(null);
  const socialIconsRef = useRef([]);
  const imageRef = useRef(null);

  useEffect(() => {
    // Animate header elements
    gsap.fromTo(
      titleRef.current,
      { y: 100, opacity: 0, scale: 0.8 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRefs.header.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        }
      }
    );

    gsap.fromTo(
      subtitleRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 0.3,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRefs.header.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        }
      }
    );

    // Animate store info section
    gsap.fromTo(
      sectionRefs.info.current,
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRefs.info.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        }
      }
    );

    // Animate image
    gsap.fromTo(
      imageRef.current,
      { scale: 0.8, opacity: 0, rotation: -10 },
      {
        scale: 1,
        opacity: 1,
        rotation: 0,
        duration: 1.5,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: imageRef.current,
          start: 'top 80%',
        }
      }
    );

    // Animate info cards with stagger
    gsap.fromTo(
      infoCardsRef.current,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRefs.info.current,
          start: 'top 70%',
        }
      }
    );

    // Animate QR section with a flip effect
    gsap.fromTo(
      qrCardRef.current,
      { 
        opacity: 0, 
        scale: 0.5,
        rotationY: 180 
      },
      {
        opacity: 1,
        scale: 1,
        rotationY: 0,
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRefs.qr.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        }
      }
    );

    // Animate social icons with a wave effect
    socialIconsRef.current.forEach((icon, index) => {
      if (icon) {
        gsap.fromTo(
          icon,
          { 
            opacity: 0, 
            y: 40,
            scale: 0 
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            delay: index * 0.1,
            ease: 'back.out(1.7)',
            scrollTrigger: {
              trigger: sectionRefs.social.current,
              start: 'top 80%',
            }
          }
        );
      }
    });

    // Animate footer with a fade in
    gsap.fromTo(
      sectionRefs.footer.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRefs.footer.current,
          start: 'top 90%',
          toggleActions: 'play none none reverse',
        }
      }
    );

    // Parallax effect for the background
    gsap.to(sectionRefs.header.current, {
      backgroundPosition: '50% 100%',
      ease: 'none',
      scrollTrigger: {
        trigger: sectionRefs.header.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      }
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const handleQRScan = () => {
    const contactData = `BEGIN:VCARD
VERSION:3.0
FN:Jai Maa Kali Book Store
ORG:Jai Maa Kali Book Store
ADR:;;Bank More, Dhanbad, Jharkhand, 826001, India
TEL:+91-XXXXXXXXXX
EMAIL:info@jaimaakalibooks.com
URL:https://jaimaakalibooks.com
NOTE:Spiritual Book Store since 1985
END:VCARD`;

    const blob = new Blob([contactData], { type: 'text/vcard' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Jai_Maa_Kali_Book_Store.vcf';
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const socialLinks = [
    { 
      icon: FaInstagram, 
      url: 'https://instagram.com/jaimaakalibooks', 
      color: 'bg-gradient-to-r from-purple-600 to-pink-500',
      hover: 'hover:shadow-lg hover:shadow-pink-500/50'
    },
    { 
      icon: FaYoutube, 
      url: 'https://youtube.com/jaimaakalibooks', 
      color: 'bg-gradient-to-r from-red-600 to-red-400',
      hover: 'hover:shadow-lg hover:shadow-red-500/50'
    },
    { 
      icon: FaTwitter, 
      url: 'https://twitter.com/jaimaakalibooks', 
      color: 'bg-gradient-to-r from-blue-400 to-cyan-400',
      hover: 'hover:shadow-lg hover:shadow-blue-500/50'
    },
    { 
      icon: FaWhatsapp, 
      url: 'https://wa.me/91XXXXXXXXXX', 
      color: 'bg-gradient-to-r from-green-500 to-emerald-400',
      hover: 'hover:shadow-lg hover:shadow-green-500/50'
    },
    { 
      icon: FaEnvelope, 
      url: 'mailto:info@jaimaakalibooks.com', 
      color: 'bg-gradient-to-r from-orange-500 to-red-400',
      hover: 'hover:shadow-lg hover:shadow-orange-500/50'
    },
  ];

  const storeInfo = [
    {
      icon: FaMapMarkerAlt,
      title: "Address",
      content: "Bank More, Dhanbad, Jharkhand 826001",
      color: "text-red-500"
    },
    {
      icon: FaPhone,
      title: "Phone",
      content: "+91-XXXXXXXXXX",
      color: "text-green-500"
    },
    {
      icon: FaEnvelope,
      title: "Email",
      content: "info@jaimaakalibooks.com",
      color: "text-blue-500"
    },
    {
      icon: FaClock,
      title: "Hours",
      content: "9:00 AM - 8:00 PM (Daily)",
      color: "text-purple-500"
    }
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-orange-50 via-red-50 to-amber-50 py-16 px-4 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-red-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-1/2 right-10 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Section */}
        <div ref={sectionRefs.header} className="text-center mb-16 py-8">
          <div className="relative inline-block mb-4">
            <div className="absolute -inset-1 bg-linear-to-r from-red-600 to-orange-500 rounded-full blur opacity-30"></div>
            <h1 
              ref={titleRef} 
              className="relative text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-linear-to-r from-red-700 to-orange-600 mb-4"
            >
              Jai Maa Kali Book Store
            </h1>
          </div>
          <p ref={subtitleRef} className="text-lg sm:text-xl text-gray-700 mb-2">
            Your Spiritual Companion Since 1985
          </p>
          <div className="flex justify-center items-center gap-2 text-red-600">
            <FaHeart className="animate-pulse" />
            <span className="text-sm">Serving with Devotion & Dedication</span>
            <FaHeart className="animate-pulse" />
          </div>
        </div>

        {/* Store Information */}
        <div ref={sectionRefs.info} className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-6 sm:p-8 mb-12 border border-white/20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <FaBookOpen className="text-3xl text-red-600" />
                <h2 className="text-2xl sm:text-3xl font-bold text-red-700">About Our Store</h2>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                Welcome to <span className="font-semibold text-red-600">Jai Maa Kali Book Store</span>, 
                your trusted sanctuary for spiritual enlightenment in Dhanbad, Jharkhand. 
                For over three decades, we've been the bridge between seekers and sacred wisdom, 
                offering authentic texts, divine literature, and spiritual accessories.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {storeInfo.map((item, index) => (
                  <div 
                    key={index}
                    ref={el => infoCardsRef.current[index] = el}
                    className="bg-linear-to-br from-white to-gray-50 p-4 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="flex items-center gap-3">
                      <item.icon className={`text-xl ${item.color}`} />
                      <div>
                        <h3 className="font-semibold text-gray-800">{item.title}</h3>
                        <p className="text-gray-600">{item.content}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-linear-to-r from-red-500 to-orange-500 rounded-2xl blur opacity-30"></div>
                <img
                  ref={imageRef}
                  src={image}
                  alt="Jai Maa Kali Book Store"
                  className="relative rounded-2xl shadow-2xl w-full max-w-sm lg:max-w-md transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute -bottom-4 -right-4 bg-linear-to-r from-red-600 to-orange-500 text-white px-4 py-2 rounded-full font-semibold shadow-lg">
                  Since 1985
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* QR Code Section */}
        <div ref={sectionRefs.qr} className="bg-linear-to-br from-red-50 to-orange-50 rounded-3xl shadow-2xl p-6 sm:p-8 mb-12 border border-red-100">
          <h3 className="text-xl sm:text-2xl font-bold text-red-700 mb-8 text-center">
            Save Our Contact
          </h3>
          <div className="flex flex-col items-center">
            <div 
              ref={qrCardRef}
              className="relative bg-white p-6 rounded-2xl shadow-xl mb-6 transform hover:rotate-3 transition-transform duration-500"
            >
              <QRCodeSVG
                value="BEGIN:VCARD\nVERSION:3.0\nFN:Jai Maa Kali Book Store\nORG:Jai Maa Kali Book Store\nADR:;;Bank More, Dhanbad, Jharkhand, 826001, India\nTEL:+91-XXXXXXXXXX\nEMAIL:info@jaimaakalibooks.com\nURL:https://jaimaakalibooks.com\nNOTE:Spiritual Book Store since 1985\nEND:VCARD"
                size={220}
                level="H"
                includeMargin={true}
                bgColor="#ffffff"
                fgColor="#dc2626"
              />
              <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                Scan Me
              </div>
            </div>
            <button
              onClick={handleQRScan}
              className="group bg-linear-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-red-500/30 flex items-center gap-2"
            >
              <FaPhone className="group-hover:animate-bounce" />
              Add to Contacts
            </button>
            <p className="text-gray-600 text-sm mt-4 text-center max-w-md">
              Scan the QR code or click the button to save our contact details directly to your phone
            </p>
          </div>
        </div>

        {/* Social Media Links */}
        <div ref={sectionRefs.social} className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/20">
          <h3 className="text-xl sm:text-2xl font-bold text-red-700 mb-8 text-center">
            Connect With Us
          </h3>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  ref={el => socialIconsRef.current[index] = el}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${social.color} text-white p-4 rounded-2xl ${social.hover} transition-all duration-300 transform hover:scale-110 hover:-translate-y-2 flex items-center justify-center w-16 h-16`}
                >
                  <Icon className="text-2xl" />
                </a>
              );
            })}
          </div>
          <p className="text-center text-gray-600 mt-6 max-w-2xl mx-auto">
            Follow us for daily spiritual wisdom, book recommendations, meditation guides, 
            and updates on our latest collections
          </p>
        </div>

        {/* Footer Note */}
        <div ref={sectionRefs.footer} className="text-center mt-12 py-8">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-red-200"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-linear-to-br from-orange-50 to-red-50 px-6 py-3 rounded-full text-gray-700 italic text-lg shadow-lg">
                "Where Knowledge Meets Devotion" - Jai Maa Kali Book Store
              </span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default About;