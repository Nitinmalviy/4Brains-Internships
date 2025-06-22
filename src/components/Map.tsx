
import { MapPin } from "lucide-react";

const Map = () => {
  return (
    <div className="w-full h-64 bg-gray-100 rounded-lg overflow-hidden relative">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.9234567890123!2d76.0542!3d22.9734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDU4JzI0LjIiTiA3NsKwMDMnMTUuMSJF!5e0!3m2!1sen!2sin!4v1234567890123"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="4Brains Tech Location - Dewas, Madhya Pradesh"
      />
      <div className="absolute top-2 left-2 bg-white/90 backdrop-blur-sm rounded-lg p-2 shadow-lg">
        <div className="flex items-center space-x-2">
          <MapPin className="h-4 w-4 text-blue-600" />
          <span className="text-sm font-medium">Dewas, MP</span>
        </div>
      </div>
    </div>
  );
};

export default Map;
