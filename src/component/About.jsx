import React from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { FaInstagram, FaYoutube, FaTwitter, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import image from "../assets/image.png"
const About = () => {
  const handleQRScan = () => {
    // Add to contact function
    const contactData = `BEGIN:VCARD
VERSION:3.0
FN:Jai Maa Kali Book Store
ORG:Jai Maa Kali Book Store
ADR:;;Bank More, Dhanbad, Jharkhand, 826001, India
TEL:+91-XXXXXXXXXX
EMAIL:info@jaimaakalibooks.com
URL:https://jaimaakalibooks.com
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
    { icon: FaInstagram, url: 'https://instagram.com/jaimaakalibooks', color: 'hover:text-pink-600' },
    { icon: FaYoutube, url: 'https://youtube.com/jaimaakalibooks', color: 'hover:text-red-600' },
    { icon: FaTwitter, url: 'https://twitter.com/jaimaakalibooks', color: 'hover:text-blue-400' },
    { icon: FaWhatsapp, url: 'https://wa.me/91XXXXXXXXXX', color: 'hover:text-green-500' },
    { icon: FaEnvelope, url: 'mailto:info@jaimaakalibooks.com', color: 'hover:text-red-500' },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-orange-50 to-red-100 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-red-800 mb-4">
            Jai Maa Kali Book Store
          </h1>
          <p className="text-xl text-gray-700">
            Your Spiritual Companion Since 1985
          </p>
        </div>

        {/* Store Information */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 mb-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-red-700 mb-6">About Us</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Welcome to Jai Maa Kali Book Store, your trusted source for spiritual books, 
                religious texts, and sacred literature in Dhanbad, Jharkhand. For over three 
                decades, we have been serving the spiritual community with authentic texts, 
                puja items, and religious accessories.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <span className="font-semibold text-red-600 w-24">Address:</span>
                  <span className="text-gray-700">
                    Bank More, Dhanbad, Jharkhand 826001
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="font-semibold text-red-600 w-24">Phone:</span>
                  <span className="text-gray-700">+91-XXXXXXXXXX</span>
                </div>
                <div className="flex items-center">
                  <span className="font-semibold text-red-600 w-24">Email:</span>
                  <span className="text-gray-700">info@jaimaakalibooks.com</span>
                </div>
                <div className="flex items-center">
                  <span className="font-semibold text-red-600 w-24">Hours:</span>
                  <span className="text-gray-700">9:00 AM - 8:00 PM (Daily)</span>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <img 
                src={image} 
                alt="Jai Maa Kali Book Store"
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* QR Code Section */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-red-700 mb-6 text-center">
            Scan to Save Our Contact
          </h3>
          <div className="flex flex-col items-center">
            <div className="bg-white p-4 rounded-lg shadow-lg mb-4">
              <QRCodeSVG
                value="BEGIN:VCARD\nVERSION:3.0\nFN:Jai Maa Kali Book Store\nORG:Jai Maa Kali Book Store\nADR:;;Bank More, Dhanbad, Jharkhand, 826001, India\nTEL:+91-XXXXXXXXXX\nEMAIL:info@jaimaakalibooks.com\nURL:https://jaimaakalibooks.com\nEND:VCARD"
                size={200}
                level="H"
                includeMargin={true}
              />
            </div>
            <button
              onClick={handleQRScan}
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
            >
              Add to Contacts
            </button>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <h3 className="text-2xl font-bold text-red-700 mb-6 text-center">
            Connect With Us
          </h3>
          <div className="flex justify-center space-x-6">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-4xl text-gray-600 ${social.color} transition-colors duration-300 transform hover:scale-110`}
                >
                  <Icon />
                </a>
              );
            })}
          </div>
          <p className="text-center text-gray-600 mt-4">
            Follow us for daily spiritual quotes, book recommendations, and updates
          </p>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-12">
          <p className="text-gray-600">
            "Where Knowledge Meets Devotion" - Jai Maa Kali Book Store
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
