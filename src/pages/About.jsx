import React from "react";
import { FaShoppingCart, FaShieldAlt, FaRocket } from "react-icons/fa";

const About = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-indigo-600 text-white py-32 px-6 text-center md:text-left md:px-20">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">About ShopEase</h1>
          <p className="text-lg md:text-xl max-w-2xl">
            ShopEase is your ultimate online store for quality products, 
            unbeatable prices, and an unmatched shopping experience.
          </p>
        </div>
        <div className="absolute right-0 bottom-0 w-1/2 hidden md:block">
          <img
            src="https://images.unsplash.com/photo-1581091215363-89c0c6a5b6f8"
            alt="Hero"
            className="rounded-3xl shadow-lg"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We are committed to providing the best online shopping experience with quality, trust, and innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition duration-300">
            <FaShoppingCart className="text-indigo-600 text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Quality Products</h3>
            <p className="text-gray-600">
              We carefully select products to ensure you receive only the best.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition duration-300">
            <FaShieldAlt className="text-indigo-600 text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Trusted & Secure</h3>
            <p className="text-gray-600">
              Shopping with us is safe and reliable. Your satisfaction is guaranteed.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition duration-300">
            <FaRocket className="text-indigo-600 text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
            <p className="text-gray-600">
              Get your orders quickly with our fast and efficient delivery system.
            </p>
          </div>
        </div>
      </section>

      {/* Story / Mission Section */}
      <section className="py-20 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <img
            src="https://images.unsplash.com/photo-1590502593743-cf487712b27e"
            alt="Our Story"
            className="rounded-3xl shadow-lg"
          />
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Story</h2>
            <p className="text-gray-600 mb-4">
              ShopEase started in 2020 with a simple mission: make online shopping
              seamless, enjoyable, and trustworthy. What started as a small idea has
              grown into a global platform serving thousands of satisfied customers.
            </p>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Our Mission</h3>
            <p className="text-gray-600">
              To revolutionize the online shopping experience by combining quality,
              convenience, and exceptional service.
            </p>
          </div>
        </div>
      </section>

      {/* Footer Note */}
      <section className="py-12 px-6 text-center">
        <p className="text-gray-600 max-w-2xl mx-auto">
          Thank you for choosing <span className="font-semibold text-indigo-600">ShopEase</span>.
          We look forward to serving you the best products and experience.
        </p>
      </section>
    </div>
  );
};

export default About;
