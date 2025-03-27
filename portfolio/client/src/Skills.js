import React from "react";
import { motion } from "framer-motion";
import webDevelopmentImage from "./Images/pexels-thisisengineering-3861964.jpg";
import designImage from "./Images/pexels-goumbik-574071.jpg";
import databaseImage from "./Images/pexels-cookiecutter-1148820.jpg";
import data from "./Images/download.jpg";
import ai from "./Images/pexels-tara-winstead-8386440.jpg";

const skillsData = [
  {
    image: webDevelopmentImage,
    title: "Frontend Developer",
    description: "Specialized in: React.js, HTML, CSS, JavaScript, Figma, Canva, Bootstrap",
  },
  {
    image: designImage,
    title: "Backend Developer",
    description: "Specialized in: Node.js, Python, Java, PHP, Express.js",
  },
  {
    image: databaseImage,
    title: "Database Management",
    description: "Specialized in: Oracle, MySQL, PostgreSQL, SQL, MongoDB",
  },
  {
    image: data,
    title: "Programmer",
    description: "Competitive Programming, Data Structures and Algorithms, Problem Solving, OOPS",
  },
  {
    image: ai,
    title: "Artificial Intelligence",
    description: "Machine Learning, LLM, Deep Learning, LSTM, CNN",
  },
];

const Skills = () => {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden flex items-center justify-center">
      <div className="starfield absolute inset-0">
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
      </div>
      <div className="relative z-10 container mx-auto px-4 py-16">
        <h1 className="text-center text-white text-4xl font-bold mb-8">My Skills</h1>
        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {skillsData.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden relative flex flex-col items-center p-6"
            >
              <img
                src={skill.image}
                alt={skill.title}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h2 className="text-xl font-bold text-gray-800 mb-2">{skill.title}</h2>
              <p className="text-gray-600 text-center">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
