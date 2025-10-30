import React from "react";
import { useNavigate } from "react-router-dom";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import EventIcon from "@mui/icons-material/Event";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Services = () => {
  const navigate = useNavigate();

  const services = [
    {
      id: 1,
      title: "Portrait Photography",
      duration: "1 hour session",
      description: "Professional photoshoot to capture your personality",
      icon: <CameraAltIcon className="text-6xl" />,
      features: [
        "1 hour photoshoot",
        "Professional editing",
        "High-resolution images",
        "Multiple poses and angles",
      ],
    },
    {
      id: 2,
      title: "Event Photography",
      description: "Capture your special moments perfectly",
      icon: <EventIcon className="text-6xl" />,
      features: [
        "Debut",
        "Wedding",
        "Birthday",
        "Full event coverage",
        "Candid and posed shots",
      ],
    },
  ];

  const handleContactClick = () => {
    navigate("/contact");
  };

  return (
    <div className="w-full min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <FavoriteIcon className="text-white text-6xl" />
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            My Services
          </h1>
          <p className="text-2xl text-white mb-4 font-light">
            Picture with emotion with me
          </p>
          <p className="text-xl text-gray-200 mb-8">Contact me for more info</p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-gray-200 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 shadow-lg"
            >
              {/* Icon */}
              <div className="text-purple-700 mb-6 flex justify-center">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-3xl font-bold text-purple-900 mb-3 text-center">
                {service.title}
              </h3>

              {/* Duration (if available) */}
              {service.duration && (
                <p className="text-center text-gray-600 mb-4 text-lg">
                  {service.duration}
                </p>
              )}

              {/* Description */}
              <p className="text-gray-700 text-center mb-6 text-lg">
                {service.description}
              </p>

              {/* Features */}
              <div className="space-y-3">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-center text-gray-700">
                    <svg
                      className="w-5 h-5 mr-3 flex-shrink-0 text-purple-700"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <button
            onClick={handleContactClick}
            className="bg-white text-purple-900 px-10 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
          >
            Contact Me for Pricing
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
