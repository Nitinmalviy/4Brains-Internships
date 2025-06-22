
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Code, 
  Database, 
  Globe, 
  Smartphone, 
  Shield, 
  BarChart3,
  Cpu,
  Brain,
  Cloud,
  TestTube,
  Palette,
  Server
} from "lucide-react";

const internships = [
  { name: "React.js Web Development", icon: Code, category: "Frontend", duration: "4-8 weeks", level: "Beginner" },
  { name: "MERN Stack Development", icon: Database, category: "Full Stack", duration: "8 weeks", level: "Intermediate" },
  { name: ".NET Web Development", icon: Globe, category: "Backend", duration: "6 weeks", level: "Intermediate" },
  { name: "Figma Web Design", icon: Palette, category: "UI/UX", duration: "4 weeks", level: "Beginner" },
  { name: "Figma App Design", icon: Smartphone, category: "UI/UX", duration: "4 weeks", level: "Beginner" },
  { name: "Full Stack Development", icon: Server, category: "Full Stack", duration: "8 weeks", level: "Advanced" },
  { name: "Frontend Development", icon: Code, category: "Frontend", duration: "6 weeks", level: "Beginner" },
  { name: "Backend Development", icon: Database, category: "Backend", duration: "6 weeks", level: "Intermediate" },
  { name: "C/C++ Programming", icon: Code, category: "Programming", duration: "4 weeks", level: "Beginner" },
  { name: "Software Development", icon: Cpu, category: "Development", duration: "8 weeks", level: "Intermediate" },
  { name: "Embedded Systems", icon: Cpu, category: "Hardware", duration: "6 weeks", level: "Advanced" },
  { name: "Digital Marketing", icon: BarChart3, category: "Marketing", duration: "4 weeks", level: "Beginner" },
  { name: "App Development", icon: Smartphone, category: "Mobile", duration: "6 weeks", level: "Intermediate" },
  { name: "Java Programming", icon: Code, category: "Programming", duration: "4 weeks", level: "Beginner" },
  { name: "Python Programming", icon: Code, category: "Programming", duration: "4 weeks", level: "Beginner" },
  { name: "Data Analytics", icon: BarChart3, category: "Data", duration: "6 weeks", level: "Intermediate" },
  { name: "SQL Database", icon: Database, category: "Database", duration: "4 weeks", level: "Beginner" },
  { name: "DevOps", icon: Cloud, category: "DevOps", duration: "6 weeks", level: "Advanced" },
  { name: "Power BI", icon: BarChart3, category: "Analytics", duration: "4 weeks", level: "Intermediate" },
  { name: "Cloud Computing", icon: Cloud, category: "Cloud", duration: "6 weeks", level: "Intermediate" },
  { name: "Blockchain Technology", icon: Shield, category: "Blockchain", duration: "8 weeks", level: "Advanced" },
  { name: "Software Testing", icon: TestTube, category: "Testing", duration: "4 weeks", level: "Beginner" },
  { name: "Automation Testing", icon: TestTube, category: "Testing", duration: "6 weeks", level: "Intermediate" },
  { name: "Big Data", icon: Database, category: "Data", duration: "8 weeks", level: "Advanced" },
  { name: "Data Science", icon: Brain, category: "Data Science", duration: "8 weeks", level: "Advanced" },
  { name: "UI/UX Design", icon: Palette, category: "Design", duration: "6 weeks", level: "Intermediate" },
  { name: "ML, AI & IoT", icon: Brain, category: "AI/ML", duration: "8 weeks", level: "Advanced" },
  { name: "VLSI Design", icon: Cpu, category: "Hardware", duration: "8 weeks", level: "Advanced" },
  { name: "Cybersecurity & Ethical Hacking", icon: Shield, category: "Security", duration: "8 weeks", level: "Advanced" }
];

const getCategoryColor = (category: string) => {
  const colors: { [key: string]: string } = {
    "Frontend": "bg-blue-100 text-blue-800",
    "Backend": "bg-green-100 text-green-800",
    "Full Stack": "bg-purple-100 text-purple-800",
    "Mobile": "bg-pink-100 text-pink-800",
    "UI/UX": "bg-orange-100 text-orange-800",
    "Data": "bg-cyan-100 text-cyan-800",
    "AI/ML": "bg-red-100 text-red-800",
    "Security": "bg-yellow-100 text-yellow-800",
    "Cloud": "bg-indigo-100 text-indigo-800",
    "Programming": "bg-gray-100 text-gray-800",
    "Testing": "bg-teal-100 text-teal-800"
  };
  return colors[category] || "bg-gray-100 text-gray-800";
};

const InternshipGrid = () => {
  return (
    <section id="internships" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Choose Your <span className="text-blue-600">Domain</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive range of internship opportunities across cutting-edge technologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {internships.map((internship, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-blue-200">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-2 rounded-lg">
                      <internship.icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-lg font-semibold text-gray-900 leading-tight">
                        {internship.name}
                      </CardTitle>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge className={getCategoryColor(internship.category)}>
                    {internship.category}
                  </Badge>
                  <Badge variant="outline" className="text-gray-600">
                    {internship.duration}
                  </Badge>
                  <Badge variant="outline" className="text-gray-600">
                    {internship.level}
                  </Badge>
                </div>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  Apply Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InternshipGrid;
