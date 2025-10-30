import React, { useState, useEffect } from "react";
import noImage from "../../assets/images/noImage/No-Image-Placeholder.svg";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import ChildCareIcon from "@mui/icons-material/ChildCare";

import AOS from "aos";
import "aos/dist/aos.css";

const Kids = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Initialize AOS when component mounts
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      anchorPlacement: "top-bottom",
    });

    // Dynamically import all images from the kids folder
    const loadImages = async () => {
      try {
        // For Vite - use import.meta.glob with eager loading
        const imageModules = import.meta.glob(
          "../../assets/images/kids/*.{jpg,jpeg,png,webp,gif,JPG,JPEG,PNG,WEBP,GIF}",
          { eager: true }
        );

        const loadedImages = Object.keys(imageModules).map((path) => ({
          src: imageModules[path].default || imageModules[path],
          alt: path
            .split("/")
            .pop()
            .replace(/\.[^/.]+$/, ""), // Filename without extension
          name: path.split("/").pop(),
        }));

        console.log("Loaded kids images:", loadedImages); // Debug log
        setImages(loadedImages);

        // For Webpack/CRA - uncomment this and comment out the above
        /*
        const req = require.context('../../assets/images/kids', false, /\.(png|jpe?g|webp|gif)$/i);
        const imageList = req.keys().map((path) => ({
          src: req(path),
          alt: path.replace('./', '').replace(/\.[^/.]+$/, ''),
          name: path.replace('./', '')
        }));
        setImages(imageList);
        */
      } catch (error) {
        console.error("Error loading images:", error);
        setImages([]); // Set empty array if loading fails
      }
    };

    loadImages();

    // Cleanup AOS on unmount
    return () => {
      AOS.refresh();
    };
  }, []);

  // Refresh AOS when images load
  useEffect(() => {
    if (images.length > 0) {
      AOS.refresh();
    }
  }, [images]);

  return (
    <>
      {/* Header Section */}
      <div className="mb-12 text-center" data-aos="fade-down">
        <div className="flex justify-center mb-4">
          <ChildCareIcon className="text-white text-6xl" />
          <CameraAltIcon className="text-white text-4xl ml-2" />
        </div>
        <h1 className="md:text-3xl sm:text-6xl font-bold text-white mb-4">
          Kids Photography
        </h1>
        <p className="text-xl text-gray-200 mb-2">
          Capturing childhood's precious moments
        </p>
        <p className="text-lg text-gray-200">
          Joyful memories that last a lifetime
        </p>
      </div>

      {/* Masonry Grid - Adapts to image dimensions */}
      <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-4 max-w-7xl mx-auto">
        {images && images.length > 0 ? (
          images.map((image, index) => (
            <div
              key={`kid-${index}-${image.name}`}
              className="relative overflow-hidden rounded-lg bg-white bg-opacity-10 backdrop-blur-sm hover:bg-opacity-20 hover:scale-105 transition-all duration-300 cursor-pointer mb-4 break-inside-avoid"
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              <div className="w-full p-2">
                <img
                  src={image.src}
                  alt={image.alt || `Kids ${index + 1}`}
                  className="w-full h-auto object-cover rounded-lg"
                  loading="lazy"
                  onError={(e) => {
                    console.error(`Failed to load image: ${image.name}`);
                    e.target.src = noImage;
                  }}
                />
              </div>
              {/* Optional: Image filename overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-2 text-xs text-white text-center opacity-0 hover:opacity-100 transition-opacity">
                {image.name}
              </div>
            </div>
          ))
        ) : (
          // Loading state or no images fallback
          <div className="col-span-full text-center py-20">
            <p className="text-gray-400 text-xl">
              {images === null
                ? "Loading images..."
                : "No images found in kids folder"}
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Add images to: src/assets/images/kids/
            </p>
          </div>
        )}
      </div>

      {/* Image count indicator */}
      {images.length > 0 && (
        <div className="text-center mt-8">
          <p className="text-gray-300">
            Displaying {images.length} kids photo
            {images.length !== 1 ? "s" : ""}
          </p>
        </div>
      )}
    </>
  );
};

export default Kids;
