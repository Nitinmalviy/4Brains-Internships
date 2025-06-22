
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Trophy, Award, Github, Linkedin, Users } from "lucide-react";

const perks = [
  {
    icon: FileText,
    title: "Resume & LinkedIn Review",
    description: "Professional resume optimization and LinkedIn profile enhancement by industry experts"
  },
  {
    icon: Trophy,
    title: "Mini Hackathon",
    description: "Showcase your skills in an exciting hackathon event at the end of your internship"
  },
  {
    icon: Award,
    title: "Completion Certificate", 
    description: "Verified certificates via CertifyMe or custom designed certificates for your achievements"
  },
  {
    icon: Github,
    title: "Portfolio & GitHub Setup",
    description: "Complete guidance on building an impressive portfolio and GitHub profile that stands out"
  }
];

const ExtraPerks = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            <span className="text-purple-600">Extra Perks</span> & Benefits
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Go beyond just learning - build your professional profile and network
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {perks.map((perk, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-lg">
                    <perk.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {perk.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{perk.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Join Our Growing Community
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Connect with fellow learners, share projects, get help, and build lasting professional relationships
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-600">1K+</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Active Students</h4>
              <p className="text-gray-600">Learning and growing together</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-green-600">95%</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Success Rate</h4>
              <p className="text-gray-600">Students completing their programs</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-purple-600">24/7</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Community Support</h4>
              <p className="text-gray-600">Always available help and guidance</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExtraPerks;
