import React from "react";
import { motion } from "framer-motion";

// Import images (replace with actual image paths)
import webDevelopmentImage from "./Images/pexels-thisisengineering-3861964.jpg";
import designImage from "./Images/pexels-goumbik-574071.jpg";
import databaseImage from "./Images/pexels-cookiecutter-1148820.jpg";
import data from "./Images/download.jpg"
import ai from "./Images/pexels-tara-winstead-8386440.jpg"
// Skills data
const skillsData = [
  {
    image: webDevelopmentImage,
    title: "Frontend Developer",
    description: "Specialized in : React.js     HTML    CSS    JavaScript    Figma    Canva    Bootstrap   ",
  },
  {
    image: designImage,
    title: "Backend Developer",
    description: "Specialized in : Nodejs    Python     Java    PHP     Expressjs  ",
  },
  {
    image: databaseImage,
    title: "Database Management",
    description: "Specialized in : Oracle      MySQL     PostgreSQL     SQL     MONGODB ",
  },
  // Additional skills sections
  {
    image: data,
    title: "Programmer",
    description: "Competetive Programming      Data Structures and Algorithms       Problem Solving      OOPS ",
  },
 
  {
    image: ai,
    title: "Artificial Intelligence",
    description: "Machine Learning  LLM   Deep Learning LSTM CNN",
  },
];

const Skills = () => {
  return (
    <div>
       <div className="starfield">
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
        </div>
    <div className="bg-gradient-to-r from-teal-600 to-pink-500 py-16">
      <div className="container mx-auto text-center">
        <h1 className="text-teal-100 text-4xl font-bold mb-8">Take a Look</h1>
        <div className="grid gap-40 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {skillsData.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden relative flex items-center justify-center"
              style={{ aspectRatio: "1 / 1" }}
            >
              <img
                src={skill.image}
                alt={skill.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center text-white opacity-0 hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-blue-500 to-green-500">
                <div className="text-center p-4">
                  <h2 className="text-xl font-bold mb-2">{skill.title}</h2>
                  <p className="text-sm">{skill.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Skills;
