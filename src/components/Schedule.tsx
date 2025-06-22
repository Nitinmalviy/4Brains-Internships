
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Calendar, Users, MessageCircle } from "lucide-react";

const Schedule = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Flexible <span className="text-blue-600">Learning Schedule</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Weekend-focused learning that fits your busy life
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <Calendar className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Weekend Mode</h3>
                <p className="text-gray-600">Saturday & Sunday sessions designed for working professionals and students</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-purple-100 p-3 rounded-full">
                <Clock className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">2 Hour Live Workshops</h3>
                <p className="text-gray-600">Interactive coding sessions with real-time problem solving</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-green-100 p-3 rounded-full">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">1 Hour Mentorship</h3>
                <p className="text-gray-600">Dedicated doubt clearing sessions with industry experts</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-orange-100 p-3 rounded-full">
                <MessageCircle className="h-6 w-6 text-orange-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Community Support</h3>
                <p className="text-gray-600">24/7 Telegram/Discord community for peer learning and support</p>
              </div>
            </div>
          </div>

          <Card className="bg-white shadow-xl">
            <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-t-lg">
              <CardTitle className="text-2xl font-bold text-center">Weekly Schedule</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Saturday</h4>
                  <p className="text-gray-600">10:00 AM - 12:00 PM: Live Workshop</p>
                  <p className="text-gray-600">2:00 PM - 3:00 PM: Mentorship Session</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Sunday</h4>
                  <p className="text-gray-600">10:00 AM - 12:00 PM: Project Work</p>
                  <p className="text-gray-600">2:00 PM - 3:00 PM: Q&A Session</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Weekdays</h4>
                  <p className="text-gray-600">Self-paced learning with community support</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
