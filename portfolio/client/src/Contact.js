import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { FaPhoneAlt } from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";

import "./styles.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!name || !email || !phone || !msg) {
        toast.error("Please fill out all fields.");
        return;
      }
      const res = await axios.post("/api/v1/portfolio/sendEmail", {
        name,
        email,
        phone,
        msg,
      });
      if (res.data.success) {
        toast.success("Message sent successfully!");
        setName("");
        setEmail("");
        setPhone("");
        setMsg("");
      } else {
        toast.error("Failed to send message. Please try again later.");
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to send message. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen bg-emerald-900 relative overflow-hidden">
      <div className="starfield absolute inset-0">
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
      </div>
      <div className="contact relative z-10 flex items-center justify-center min-h-screen">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl bg-white rounded-lg shadow-lg overflow-hidden mx-auto">
            <div className="py-8 px-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Contact Us</h2>
              <p className="text-gray-600 mb-6">
                Fill out the form below and we'll get back to you shortly.
              </p>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm"
                    placeholder="Your Name"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm"
                    placeholder="Your Email"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500 sm:text-sm"
                    placeholder="Your Phone Number"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={msg}
                    onChange={(e) => setMsg(e.target.value)}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm resize-none"
                    rows="4"
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
            <div className="bg-indigo-600 py-6 px-6">
              <h2 className="text-xl font-semibold text-white mb-2">
                Contact Information
              </h2>
              <div className="flex items-center text-white mb-2">
                <FaPhoneAlt className="mr-2" />
                <span>+91 9344581097</span>
              </div>
              <div className="flex items-center text-white">
                <FiLinkedin className="mr-2" />
                <a
                  href="https://www.linkedin.com/in/vaishnavi-c-266307249"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  linkedin.com/your-profile
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
