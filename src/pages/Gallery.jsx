import React, { useState } from "react";
import Astro from "./galleryComponents/Astro";
import Portrait from "./galleryComponents/Portrait";
import Nature from "./galleryComponents/Nature";
import Events from "./galleryComponents/Events";
import Kids from "./galleryComponents/Kids";
import Pets from "./galleryComponents/Pets";

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("Portrait");

  const categories = [
    "Portrait",
    "Nature",
    "Events",
    "Kids",
    "Astro",
    "Pets",
  ];

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  return (
    <div className="w-full min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        {/* <div className="mb-12">
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-4">
            Gallery
          </h1>
          <p className="text-xl text-gray-200 mb-2">
            Capturing moments, creating memories.
          </p>
          <p className="text-lg text-gray-200">
            Powered by passion and creativity.
          </p>
        </div> */}

        {/* Category Filter */}
        <div className="mb-8 border-b border-gray-300">
          <div className="flex overflow-x-auto space-x-8 pb-4">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => handleCategoryClick(category)}
                className={`whitespace-nowrap text-sm font-medium pb-2 transition-colors ${
                  activeCategory === category
                    ? "text-purple-400 border-b-2 border-purple-400"
                    : "text-gray-200 hover:text-purple-400"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Conditional Rendering Based on Active Category */}
        {activeCategory === "Portrait" ? (
          <Portrait />
        ) : activeCategory === "Astro" ? (
          <Astro />
        ) : activeCategory === "Nature" ? (
          <Nature />
        ) : activeCategory === "Events" ? (
          <Events />
        ) : activeCategory === "Kids" ? (
          <Kids />
        ) : activeCategory === "Pets" ? (
          <Pets />
        ) : (
          <>
            {" "}
            {/* Masonry Grid Layout */}
            {/* Load More Button */}
            <div className="mt-12 text-center">
              <button className="bg-white text-purple-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-300 transition-colors shadow-lg">
                Load More
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Gallery;
