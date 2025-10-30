import React, { useState } from "react";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SendIcon from "@mui/icons-material/Send";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add form submission logic here
    console.log("Form submitted:", formData);
    alert("Thank you for your message! I will get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    {
      icon: <EmailIcon className="text-4xl" />,
      title: "Email",
      value: "marksantos320@gmail.com",
      link: "mailto:marksantos320@gmail.com",
    },
    {
      icon: <PhoneIcon className="text-4xl" />,
      title: "Phone",
      value: "09381394091",
      link: "tel:09381394091",
    },
    {
      icon: <LocationOnIcon className="text-4xl" />,
      title: "Location",
      value: "Cavite, Philippines",
      link: null,
    },
  ];

  return (
    <div
      className="w-full min-h-screen py-16"
      style={{
        background: "linear-gradient(135deg, #2E1249 0%, #6C4B89 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Have a project in mind or want to book a session? Feel free to reach
            out! I'd love to hear from you and bring your vision to life.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 text-center hover:shadow-2xl transition-all duration-300 shadow-lg"
            >
              <div className="text-purple-700 mb-4 flex justify-center">
                {info.icon}
              </div>
              <h3 className="text-xl font-bold text-purple-900 mb-2">
                {info.title}
              </h3>
              {info.link ? (
                <a
                  href={info.link}
                  className="text-gray-700 hover:text-purple-700 transition-colors"
                >
                  {info.value}
                </a>
              ) : (
                <p className="text-gray-700">{info.value}</p>
              )}
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl">
            <h2 className="text-3xl font-bold text-purple-900 mb-6 text-center">
              Send Me a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-700 focus:border-transparent"
                  placeholder="John Doe"
                />
              </div>

              {/* Email Input */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-700 focus:border-transparent"
                  placeholder="john@example.com"
                />
              </div>

              {/* Message Input */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-700 focus:border-transparent resize-none"
                  placeholder="Tell me about your project or inquiry..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-purple-800 transition-colors shadow-lg flex items-center justify-center"
              >
                <SendIcon className="mr-2" />
                Send Message
              </button>
            </form>

            {/* Social Links */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-center text-gray-700 mb-4 font-semibold">
                Connect with me on social media
              </p>
              <div className="flex justify-center space-x-4">
                <a
                  href="#"
                  className="text-purple-700 hover:text-purple-900 transition-colors"
                >
                  <FacebookIcon className="text-4xl" />
                </a>
                <a
                  href="#"
                  className="text-purple-700 hover:text-purple-900 transition-colors"
                >
                  <InstagramIcon className="text-4xl" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
