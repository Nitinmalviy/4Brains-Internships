
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Database, Cloud, Cpu } from "lucide-react";

const domains = [
  {
    title: "Frontend Development",
    icon: Code,
    skills: ["React.js", "Tailwind CSS", "Responsive UI", "JavaScript ES6+"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Backend Development", 
    icon: Database,
    skills: ["Node.js", "MongoDB", "REST API", "Express.js"],
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "DevOps & Cloud",
    icon: Cloud,
    skills: ["GitHub Actions", "CI/CD", "Docker Basics", "AWS/Azure"],
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Programming & More",
    icon: Cpu,
    skills: ["Python", "Java", "C++", "Data Structures"],
    color: "from-orange-500 to-red-500"
  }
];

const SkillDomains = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            <span className="text-blue-600">Skill Domains</span> We Cover
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Master the most in-demand technologies with hands-on projects and expert guidance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {domains.map((domain, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${domain.color} flex items-center justify-center`}>
                  <domain.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">
                  {domain.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {domain.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-gray-600 text-center">
                      {skill}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillDomains;
