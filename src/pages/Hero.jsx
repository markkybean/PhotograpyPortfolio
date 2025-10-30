import React from "react";
import { useNavigate } from "react-router-dom";
import heroImage from "../assets/images/hero-image-edited.png";

const Hero = () => {
  const navigate = useNavigate();

  const handleViewGallery = () => {
    navigate("/gallery");
  };

  return (
    <div
      className="w-full min-h-screen bg-gradient-to-br from-purple-900 to-purple-600"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row min-h-screen">
          {/* Left Side - Image */}
          <div className="w-full md:w-1/2 flex items-center justify-center p-8">
            <img
              src={heroImage}
              alt="Mark Santos Photography"
              className="w-full max-w-md object-cover rounded-lg"
            />
          </div>

          {/* Right Side - Text Content */}
          <div className="w-full md:w-1/2 flex items-center justify-center px-8 sm:px-12 lg:px-16 py-12">
            <div className="max-w-lg">
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                Mark Santos
              </h1>

              <div className="space-y-4 text-white text-base sm:text-lg leading-relaxed">
                <p>
                  I'm Mark Santos, and for me, photography is about connection.
                  I love stepping behind the lens to capture the genuine
                  emotions and unspoken poetry of a moment, turning memories
                  into heirlooms.
                </p>

                <p>
                  Whether I'm capturing portraits, events, or creative projects,
                  I always give my heart to what I do. And honestly, one fun
                  fact isn't enough, I'm too fun for just one! :&gt;
                </p>

                <div className="pt-2">
                  <p className="text-lg">Till we meet again, see ya!</p>
                  <p className="text-lg">With love,</p>
                  <p className="text-xl font-semibold">Mark</p>
                </div>

                <div className="pt-4">
                  <button
                    onClick={handleViewGallery}
                    className="bg-white text-purple-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-300 transition-colors shadow-lg"
                  >
                    View Gallery
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;