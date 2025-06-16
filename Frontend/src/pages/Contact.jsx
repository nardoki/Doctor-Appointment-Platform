import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      className="min-h-screen flex items-center justify-center px-4 bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: "url('/doctor-bg.png')", 
      }}
    >
      {/* Blur Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-0"></div>

      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 bg-white/90 rounded-3xl shadow-2xl overflow-hidden z-10">
        {/* Left - Contact Form */}
        <div className="p-10 backdrop-blur-md">
          <h2 className="text-3xl font-bold text-blue-700">Contact Us</h2>
          <p className="text-gray-600 mt-2 mb-8 text-sm">
            Have any questions or suggestions? We'd love to hear from you!
          </p>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm text-gray-600">Name</label>
              <input
                id="name"
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 border-b border-gray-300 focus:outline-none focus:border-blue-500 bg-transparent transition"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm text-gray-600">Email Address</label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-2 border-b border-gray-300 focus:outline-none focus:border-blue-500 bg-transparent transition"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm text-gray-600">Your Message</label>
              <textarea
                id="message"
                rows="4"
                placeholder="Write your message..."
                className="w-full px-4 py-2 border-b border-gray-300 focus:outline-none focus:border-blue-500 bg-transparent transition"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-full shadow-md transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Right - Contact Info */}
        <div className="bg-gradient-to-br from-blue-500 to-cyan-500 text-white flex flex-col items-center justify-center px-8 py-12 relative">
          <div className="bg-white rounded-full shadow-xl w-64 h-64 flex flex-col items-center justify-center text-center text-blue-800">
            <h3 className="text-lg font-bold">Ethronics Appointment</h3>
            <p className="text-sm mt-2">Adama , Ethiopia</p>
            <p className="text-sm mt-1">📞 +251 900001111</p>
            <div className="flex justify-center gap-5 mt-4 text-2xl text-blue-700">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-900 transition"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-600 transition"
              >
                <FaInstagram />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-500 transition"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
