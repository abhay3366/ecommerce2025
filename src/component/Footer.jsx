import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 mt-12">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold text-white">ShopEase</h2>
          <p className="mt-3 text-gray-400">
            Your one-stop shop for the best products at unbeatable prices.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-red-500">Home</a></li>
            <li><a href="#" className="hover:text-red-500">Shop</a></li>
            <li><a href="#" className="hover:text-red-500">About</a></li>
            <li><a href="#" className="hover:text-red-500">Contact</a></li>
          </ul>
        </div>

        {/* Customer Support */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Customer Support</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-red-500">FAQ</a></li>
            <li><a href="#" className="hover:text-red-500">Shipping & Returns</a></li>
            <li><a href="#" className="hover:text-red-500">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-red-500">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 hover:bg-red-500 transition">
              <FaFacebookF />
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 hover:bg-red-500 transition">
              <FaTwitter />
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 hover:bg-red-500 transition">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-500">
        <p>© {new Date().getFullYear()} ShopEase. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
