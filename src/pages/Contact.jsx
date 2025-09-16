import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-indigo-600 text-white py-32 px-6 text-center md:text-left md:px-20">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-lg md:text-xl max-w-2xl">
            Have questions, feedback, or suggestions? We'd love to hear from you. 
            Reach us through our contact details or send us a message below.
          </p>
        </div>
        <div className="absolute right-0 bottom-0 w-1/2 hidden md:block">
          <img
            src="https://images.unsplash.com/photo-1581091012184-8b46e17dcf32"
            alt="Contact Hero"
            className="rounded-3xl shadow-lg"
          />
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center md:text-left">
        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 flex flex-col items-center md:items-start">
          <FaMapMarkerAlt className="text-indigo-600 text-4xl mb-4" />
          <h3 className="text-xl font-semibold mb-2">Address</h3>
          <p className="text-gray-600">123 Market Street, New York, NY 10001</p>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 flex flex-col items-center md:items-start">
          <FaEnvelope className="text-indigo-600 text-4xl mb-4" />
          <h3 className="text-xl font-semibold mb-2">Email</h3>
          <p className="text-gray-600">support@shopease.com</p>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 flex flex-col items-center md:items-start">
          <FaPhoneAlt className="text-indigo-600 text-4xl mb-4" />
          <h3 className="text-xl font-semibold mb-2">Phone</h3>
          <p className="text-gray-600">+1 (555) 123-4567</p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-6 flex justify-center">
        <div className="bg-white shadow-2xl rounded-3xl max-w-2xl w-full p-10">
          <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center">
            Send Us a Message
          </h2>
          <form className="space-y-6">
            {/* Name Field */}
            <div className="relative">
              <input
                type="text"
                id="name"
                placeholder=" "
                className="peer w-full border-b-2 border-gray-300 focus:border-indigo-500 outline-none py-3 placeholder-transparent"
              />
              <label
                htmlFor="name"
                className="absolute left-0 top-3 text-gray-400 text-lg transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-lg peer-focus:top-0 peer-focus:text-indigo-500 peer-focus:text-sm"
              >
                Your Name
              </label>
            </div>

            {/* Email Field */}
            <div className="relative">
              <input
                type="email"
                id="email"
                placeholder=" "
                className="peer w-full border-b-2 border-gray-300 focus:border-indigo-500 outline-none py-3 placeholder-transparent"
              />
              <label
                htmlFor="email"
                className="absolute left-0 top-3 text-gray-400 text-lg transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-lg peer-focus:top-0 peer-focus:text-indigo-500 peer-focus:text-sm"
              >
                Email Address
              </label>
            </div>

            {/* Message Field */}
            <div className="relative">
              <textarea
                id="message"
                rows="5"
                placeholder=" "
                className="peer w-full border-b-2 border-gray-300 focus:border-indigo-500 outline-none py-3 placeholder-transparent resize-none"
              ></textarea>
              <label
                htmlFor="message"
                className="absolute left-0 top-3 text-gray-400 text-lg transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-lg peer-focus:top-0 peer-focus:text-indigo-500 peer-focus:text-sm"
              >
                Your Message
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-4 rounded-xl font-bold text-white bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-purple-500 hover:to-indigo-500 transition-all duration-300 shadow-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
