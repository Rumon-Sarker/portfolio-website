import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="dark:bg-gray-900 bg-white py-16">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
            Contact Me
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-black dark:text-gray-400">
            Let's connect! Whether you have a question or just want to say hi, I'll get back to you as soon as possible.
          </p>
        </motion.div>

        {/* Contact Content */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="dark:bg-gray-800 bg-gray-200 dark:text-white text-black p-8 rounded-xl shadow-lg"
          >
            <h3 className="text-2xl font-semibold dark:text-white mb-6">Send a Message</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block dark:text-gray-400 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block dark:text-gray-400 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 rounded-lg dark:bg-gray-700 bg-white text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block dark:text-gray-400 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg dark:bg-gray-700 bg-white text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-teal-500 text-white px-6 py-3 rounded-lg hover:from-blue-600 hover:to-teal-600 transition-all"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Direct Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="dark:bg-gray-800 bg-gray-200 dark:text-white text-black p-8 rounded-xl shadow-lg"
          >
            <h3 className="text-2xl font-semibold dark:text-white text-black mb-6">Direct Contact</h3>
            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-center space-x-4">
                <FaEnvelope className="text-2xl text-blue-400" />
                <div>
                  <p className="dark:text-gray-400 font-semibold">Email</p>
                  <p className="dark:text-white text-gray-800">example@example.com</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center space-x-4">
                <FaPhone className="text-2xl text-blue-400" />
                <div>
                  <p className="text-black dark:text-gray-400 font-semibold">Phone</p>
                  <p className="dark:text-white text-gray-800">+1 234 567 890</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center space-x-4">
                <FaMapMarkerAlt className="text-2xl text-blue-400" />
                <div>
                  <p className="text-black dark:text-gray-400 font-semibold">Location</p>
                  <p className="dark:text-white text-gray-800">New York, USA</p>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="flex space-x-6">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dark:text-gray-400 text-blue-600 hover:text-blue-400 transition-all"
                >
                  <FaLinkedin className="text-2xl" />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dark:text-gray-400 text-blue-600 hover:text-blue-400 transition-all"
                >
                  <FaGithub className="text-2xl" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dark:text-gray-400 text-blue-600 hover:text-blue-400 transition-all"
                >
                  <FaTwitter className="text-2xl" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;