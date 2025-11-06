import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineLocationMarker, HiOutlinePhone, HiOutlineMail } from "react-icons/hi";

export default function Footer() {
  return (
    <footer className="bg-[#0b132b] text-white py-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10 border-b border-gray-700 pb-8">
        
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-semibold mb-3 text-blue-400">Wrapify Solutions</h2>
          <p className="text-sm text-gray-300 mb-4">
            We wrap ideas into intelligent digital solutions. Our mission is to deliver
            transformative digital experiences that empower businesses to grow.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-400"><FaFacebookF /></a>
            <a href="#" className="hover:text-blue-400"><FaInstagram /></a>
            <a href="#" className="hover:text-blue-400"><FaLinkedinIn /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><a href="#" className="hover:text-blue-400">Home</a></li>
            <li><a href="#" className="hover:text-blue-400">About Us</a></li>
            <li><a href="#" className="hover:text-blue-400">Services</a></li>
            <li><a href="#" className="hover:text-blue-400">Contact Us</a></li>
          </ul>
        </div>

        {/* Our Services */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Our Services</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><a href="#" className="hover:text-blue-400">Web Development</a></li>
            <li><a href="#" className="hover:text-blue-400">App Development</a></li>
            <li><a href="#" className="hover:text-blue-400">AI Agents</a></li>
            <li><a href="#" className="hover:text-blue-400">Chatbot Development</a></li>
            <li><a href="#" className="hover:text-blue-400">UI/UX Designing</a></li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Contact Us</h3>
          <ul className="space-y-3 text-gray-300 text-sm">
            <li className="flex items-center gap-2">
              <HiOutlineLocationMarker className="text-blue-400" /> Islamabad, Pakistan
            </li>
            <li className="flex items-center gap-2">
              <HiOutlinePhone className="text-blue-400" /> +92 343 9024736
            </li>
            <li className="flex items-center gap-2">
              <HiOutlineMail className="text-blue-400" /> business@wrapifysolutions.com
            </li>
          </ul>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="max-w-7xl mx-auto px-6 mt-6 flex flex-col md:flex-row justify-between text-gray-400 text-sm">
        <p>© 2025 Wrapify Solutions. All Rights Reserved.</p>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="#" className="hover:text-blue-400">Privacy Policy</a>
          <a href="#" className="hover:text-blue-400">Terms of Service</a>
          <a href="#" className="hover:text-blue-400">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
}
