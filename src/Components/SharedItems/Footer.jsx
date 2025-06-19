"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaClock
} from 'react-icons/fa';

 
const Footer = () => {
  const pathname = usePathname()

  if (pathname.includes('/dashboard') || pathname.includes('/login') || pathname.includes('/signup')) {
  return;
  } 

  return (
    <footer className="bg-gray-900 text-gray-200 px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Brand & Info */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src="/assets/bg-remove-logo.png" alt="Nutryvo Logo" className="w-16 h-16" />
            <span className="text-2xl font-bold text-white">Nutryvo</span>
          </div>
          <p className="text-sm mb-4">
            Empowering your wellness journey with personalized nutrition advice, expert guidance, and smart lifestyle tools.
          </p>
          <div className="space-y-2 text-sm">
            <div className="flex items-start gap-2">
              <FaClock className="mt-1 text-green-500" />
              <span><strong>Mon - Sat:</strong> 8.00AM - 18.00PM </span>
            </div>
            <div className="flex items-center gap-2">
              <FaPhoneAlt className="text-green-500" />
              <a href="tel:1-800-555-1234" className="hover:underline">1-800-555-1234</a>
            </div>
            <div className="flex items-start gap-2">
              <FaMapMarkerAlt className="mt-1 text-green-500" />
              <span>123 Wellness Ave, Dhaka, Bangladesh</span>
            </div>
          </div>
        </div>

        {/* Latest News */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Latest News</h3>
          <div className="space-y-4 text-sm">
            <div>
              <Link href={'#'} className="font-medium hover:underline">5 Superfoods to Boost Immunity</Link>
              <p className="text-gray-400 text-xs">11.6.2025</p>
            </div>
            <div>
              <Link href={'#'} className="font-medium hover:underline">Mental Health Tips from Experts</Link>
              <p className="text-gray-400 text-xs">09.6.2025</p>
            </div>
            <div>
              <Link href={'#'} className="font-medium hover:underline">How Hydration Impacts Fitness</Link>
              <p className="text-gray-400 text-xs">03.6.2025</p>
            </div>
          </div>
        </div>

        {/* Popular Features */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Popular Features</h3>
          <ul className="space-y-4 text-sm">
            <li>Smart Meal Planner</li>
            <li>Daily Health Tracking</li>
            <li>AI Nutritionist Bot</li>
            <li>Mood & Sleep Journal</li>
            <li>Calorie Analyzer</li>
          </ul>
        </div>

        {/* Contact Form */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
          <form className="space-y-3">
            <input
              type="text"
              placeholder="Name*"
              className="w-full bg-gray-800 text-sm px-4 py-2 rounded outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="email"
              placeholder="Email*"
              className="w-full bg-gray-800 text-sm px-4 py-2 rounded outline-none focus:ring-2 focus:ring-green-500"
            />
            <textarea
              placeholder="Comment*"
              rows="3"
              className="w-full bg-gray-800 text-sm px-4 py-2 rounded outline-none focus:ring-2 focus:ring-green-500"
            ></textarea>
            <button
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full font-semibold cursor-pointer"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="mt-10 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-sm">
        <p className="mb-2 md:mb-0">© 2025 Nutryvo. All Rights Reserved</p>
        <div className="flex items-center gap-4">
          <span className="mr-2">Follow Us</span>
          <a href="#" className="hover:text-white text-lg"><FaTwitter /></a>
          <a href="#" className="hover:text-white text-lg"><FaFacebookF /></a>
          <a href="#" className="hover:text-white text-lg"><FaLinkedinIn /></a>
          <a href="#" className="hover:text-white text-lg"><FaInstagram /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
