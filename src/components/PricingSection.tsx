
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Star } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: "₹149",
    duration: "4 Weeks",
    popular: false,
    features: [
      "1 Domain Project",
      "Weekly Live Sessions",
      "Community Support",
      "Basic Resources",
      "Certificate of Completion"
    ]
  },
  {
    name: "Plus",
    price: "₹249", 
    duration: "4 Weeks",
    popular: true,
    features: [
      "1 Domain Project",
      "Weekly Live Sessions",
      "Resume Help & Review",
      "Placement Guidance",
      "Priority Community Support",
      "LinkedIn Profile Optimization",
      "Certificate of Completion"
    ]
  },
  {
    name: "Pro",
    price: "₹449",
    duration: "8 Weeks", 
    popular: false,
    features: [
      "Advanced Project Portfolio",
      "1-on-1 Mentorship Sessions",
      "Personalized CV Building",
      "Mock Interview Preparation",
      "Job Referral Support",
      "GitHub Portfolio Setup",
      "Industry Connect Sessions",
      "Premium Certificate"
    ]
  }
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Affordable <span className="text-blue-600">Pricing Plans</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect plan for your learning journey - designed to fit every budget
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative hover:shadow-xl transition-all duration-300 ${
                plan.popular 
                  ? 'border-2 border-blue-500 shadow-lg transform scale-105' 
                  : 'border border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1">
                    <Star className="h-3 w-3 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </CardTitle>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-blue-600">{plan.price}</span>
                  <span className="text-gray-600 ml-2">/ {plan.duration}</span>
                </div>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700' 
                      : 'bg-gray-900 hover:bg-gray-800'
                  }`}
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">All plans include community access and lifetime project access</p>
          <Button variant="outline" className="border-2">
            Compare All Features
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
