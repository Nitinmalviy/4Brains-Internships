
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, MessageCircle, Globe } from "lucide-react";
import Map from "./Map";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Left Side - Company Info & Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <img 
                  src="/lovable-uploads/eba85e2a-6b77-4489-8e1c-2a5849e6d21a.png" 
                  alt="4Brains Tech Logo" 
                  className="h-8 w-8"
                />
                <span className="text-2xl font-bold">4Brains Tech</span>
              </div>
              <p className="text-gray-300">
                IT AND SOFTWARE SERVICES - Empowering the next generation of developers with affordable, hands-on internship programs.
              </p>
              <div className="flex flex-col space-y-2">
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700 w-fit">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Telegram
                </Button>
                <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800 w-fit">
                  Discord
                </Button>
              </div>
            </div>

            {/* Contact Info & Links */}
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-2">
                    <Mail className="h-4 w-4 text-gray-400 mt-0.5" />
                    <span className="text-gray-300">contact@4brainstech.com</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Phone className="h-4 w-4 text-gray-400 mt-0.5" />
                    <span className="text-gray-300">+91 8602670090</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Globe className="h-4 w-4 text-gray-400 mt-0.5" />
                    <span className="text-gray-300">4brainstech.com</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <MapPin className="h-4 w-4 text-gray-400 mt-0.5" />
                    <span className="text-gray-300">171 Anil Shree Nagar Dewas, Madhya Pradesh, India - 455001</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li><a href="#internships" className="text-gray-300 hover:text-white transition-colors">Internships</a></li>
                  <li><a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</a></li>
                  <li><a href="#mentors" className="text-gray-300 hover:text-white transition-colors">Mentors</a></li>
                  <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Side - Map */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Location</h3>
            <Map />
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 4Brains Tech. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Refund Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
