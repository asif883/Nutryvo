"use client";

import { useState } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

const ContactPage = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for contacting us!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-100 to-green-50 py-20 text-center">
        <div className="pt-8">
            <h1 className="text-4xl md:text-5xl font-bold text-green-700">Get in Touch</h1>
            <p className="mt-4 text-gray-600">We’d love to hear from you. Reach out with your questions or feedback!</p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="bg-gray-50 p-8 rounded-xl shadow">
          <h2 className="text-2xl font-semibold text-green-700 mb-6">Send Us a Message</h2>

          <div className="mb-4">
            <label className="block mb-1 font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Your Name"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Your Email"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Your Message"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition cursor-pointer"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="space-y-8">
          <h2 className="text-2xl font-semibold text-green-700">Contact Information</h2>

          <div className="flex items-start gap-4">
            <FaMapMarkerAlt className="text-green-600 text-2xl mt-1" />
            <div>
              <h4 className="font-medium text-gray-700">Location</h4>
              <p className="text-gray-500">Nutryvo HQ, Dhaka, Bangladesh</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FaPhone className="text-green-600 text-2xl mt-1" />
            <div>
              <h4 className="font-medium text-gray-700">Phone</h4>
              <p className="text-gray-500">+880 1234 567890</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FaEnvelope className="text-green-600 text-2xl mt-1" />
            <div>
              <h4 className="font-medium text-gray-700">Email</h4>
              <p className="text-gray-500">support@nutryvo.com</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
