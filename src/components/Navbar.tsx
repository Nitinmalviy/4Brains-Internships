
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Code, Users } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
              <Code className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              SkillShip
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#internships" className="text-gray-700 hover:text-blue-600 transition-colors">
              Internships
            </a>
            <a href="#pricing" className="text-gray-700 hover:text-blue-600 transition-colors">
              Pricing
            </a>
            <a href="#mentors" className="text-gray-700 hover:text-blue-600 transition-colors">
              Mentors
            </a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">
              About
            </a>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              Apply Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-4">
              <a href="#internships" className="text-gray-700 hover:text-blue-600 px-4 py-2">
                Internships
              </a>
              <a href="#pricing" className="text-gray-700 hover:text-blue-600 px-4 py-2">
                Pricing
              </a>
              <a href="#mentors" className="text-gray-700 hover:text-blue-600 px-4 py-2">
                Mentors
              </a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 px-4 py-2">
                About
              </a>
              <div className="px-4">
                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600">
                  Apply Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
