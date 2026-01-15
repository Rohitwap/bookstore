import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const ContactPage = () => {
  const formRef = useRef(null);
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const cardRefs = useRef([]);
  const socialRefs = useRef([]);

  // Form fields state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Replace with your Gmail address
  const YOUR_GMAIL = 'your.email@gmail.com';

  useEffect(() => {
    // Animate heading
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    );

    // Animate subheading
    gsap.fromTo(
      subheadingRef.current,
      { opacity: 0, y: -30 },
      { opacity: 1, y: 0, duration: 1, delay: 0.3, ease: 'power3.out' }
    );

    // Animate contact cards
    gsap.fromTo(
      cardRefs.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, delay: 0.6, ease: 'power3.out' }
    );

    // Animate social icons
    gsap.fromTo(
      socialRefs.current,
      { opacity: 0, scale: 0.5 },
      { opacity: 1, scale: 1, duration: 0.5, stagger: 0.1, delay: 1, ease: 'back.out(1.7)' }
    );
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Build mailto link
    const subject = encodeURIComponent(`Contact from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );
    const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${YOUR_GMAIL}&su=${subject}&body=${body}`;

    // Open Gmail compose in new tab
    window.open(mailtoLink, '_blank');

    // Animate button feedback
    gsap.to(formRef.current, { scale: 0.95, duration: 0.1, yoyo: true, repeat: 1 });

    // Optional: clear form
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
      <div className="container mx-auto px-6 py-20">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 ref={headingRef} className="text-5xl md:text-6xl font-bold mb-4 bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Get In Touch
          </h1>
          <p ref={subheadingRef} className="text-xl text-gray-300 max-w-2xl mx-auto">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div
            ref={(el) => (cardRefs.current[0] = el)}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-purple-400 transition-all duration-300"
          >
            <h2 className="text-3xl font-semibold mb-6 text-purple-300">Send us a message</h2>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
                  placeholder="Your Name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
                  placeholder="your@email.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Message</label>
                <textarea
                  rows="4"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 resize-none transition-all duration-300"
                  placeholder="Your message..."
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-linear-to-r from-purple-500 to-pink-500 text-white font-semibold py-3 px-6 rounded-lg hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info & Social */}
          <div className="space-y-8">
            {/* Contact Info */}
            <div
              ref={(el) => (cardRefs.current[1] = el)}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-purple-400 transition-all duration-300"
            >
              <h2 className="text-3xl font-semibold mb-6 text-purple-300">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <FaEnvelope className="text-purple-400 text-xl" />
                  <span className="text-gray-300">hello@yourcompany.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <FaPhone className="text-purple-400 text-xl" />
                  <span className="text-gray-300">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-4">
                  <FaMapMarkerAlt className="text-purple-400 text-xl" />
                  <span className="text-gray-300">123 Business Ave, City, State 12345</span>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div
              ref={(el) => (cardRefs.current[2] = el)}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-purple-400 transition-all duration-300"
            >
              <h2 className="text-3xl font-semibold mb-6 text-purple-300">Follow Us</h2>
              <div className="flex space-x-4">
                {[
                  { icon: FaFacebook, color: 'hover:text-blue-500' },
                  { icon: FaTwitter, color: 'hover:text-blue-400' },
                  { icon: FaInstagram, color: 'hover:text-pink-500' },
                  { icon: FaLinkedin, color: 'hover:text-blue-600' },
                  { icon: FaGithub, color: 'hover:text-gray-400' }
                ].map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href="#"
                      ref={(el) => (socialRefs.current[index] = el)}
                      className={`w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-xl ${social.color} transform hover:scale-110 transition-all duration-300 border border-white/20 hover:border-current`}
                    >
                      <Icon />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
