
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Award, Briefcase, Heart } from "lucide-react";

const Mentors = () => {
  return (
    <section id="mentors" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Learn from <span className="text-blue-600">Industry Experts</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our mentors are experienced developers currently working in leading tech companies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="hover:shadow-lg transition-all duration-300">
            <CardHeader className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <Briefcase className="h-10 w-10 text-white" />
              </div>
              <CardTitle className="text-xl font-bold text-gray-900">
                Industry Experience
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600 mb-4">
                Working professionals with 3+ years of hands-on experience in top tech companies
              </p>
              <Badge className="bg-blue-100 text-blue-800">
                Current Industry Professionals
              </Badge>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300">
            <CardHeader className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center">
                <Users className="h-10 w-10 text-white" />
              </div>
              <CardTitle className="text-xl font-bold text-gray-900">
                Peer Mentors
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600 mb-4">
                Senior developers and friends with 1+ years of experience who understand your journey
              </p>
              <Badge className="bg-green-100 text-green-800">
                Relatable Guidance
              </Badge>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300">
            <CardHeader className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
                <Heart className="h-10 w-10 text-white" />
              </div>
              <CardTitle className="text-xl font-bold text-gray-900">
                Personalized Support
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600 mb-4">
                1-on-1 mentorship sessions tailored to your learning pace and career goals
              </p>
              <Badge className="bg-purple-100 text-purple-800">
                Individual Attention
              </Badge>
            </CardContent>
          </Card>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 text-center">
          <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Why Our Mentors Make the Difference
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left max-w-4xl mx-auto">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Real-World Insights</h4>
              <p className="text-gray-600">Learn industry best practices and current technologies being used in production</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Career Guidance</h4>
              <p className="text-gray-600">Get insider tips on job applications, interviews, and career progression</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Continuous Support</h4>
              <p className="text-gray-600">Build lasting connections that extend beyond the internship program</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mentors;
