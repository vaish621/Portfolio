import React from "react";
import { MdSchool } from "react-icons/md";
import { SiReact } from "react-icons/si";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./About.css";
import "./styles.css";

const About = () => {
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
        
        
       
        
    </div>

    <div className="bg-black">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-teal-100 text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6">About Me</h2>
        <hr className="border-gray-500 my-6" />
        <p className="text-white text-lg text-center leading-relaxed">
          I am Vaishnavi, a final-year student passionate about creating visually stunning websites. As an experienced problem-solver, I have honed my skills on platforms like GeeksforGeeks, LeetCode, and Coding Ninjas. I am also delving into the world of machine learning. As an eager learner, I am adaptable to any role and excited about exploring new opportunities. You can find me as vaishnavic621 across coding platforms!
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-teal-100 text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6">Education Details</h2>
        <hr className="border-gray-500 my-6" />
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date={<span style={{ color: "white" }}>2021 - 2025</span>}
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">B.E(CSE)</h3>
            <h4 className="vertical-timeline-element-subtitle">
              REC , CHENNAI
            </h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date={<span style={{ color: "white" }}>2019 - 2021</span>}
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">High School</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Swamys, TN
            </h4>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-teal-100 text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6">Work Experience</h2>
        <hr className="border-gray-500 my-6" />
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "#1e1e2c" }}
            contentArrowStyle={{ borderRight: "7px solid white" }}
            date="2021 - 2022"
            iconStyle={{ background: "#1e1e2c", color: "#fff" }}
            icon={<SiReact />}
          >
            <h3 className="vertical-timeline-element-title">ML Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Center of Excellence(REC)</h4>
            <p>
            Gained a comprehensive understanding of the fundamental concepts of AI and ML
            Developed a chatbot using LSTM to efficiently respond to the general queries of the user and developed an User Interface for the same
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "#1e1e2c" }}
            contentArrowStyle={{ borderRight: "7px solid white" }}
            date="2020 - 2022"
            iconStyle={{ background: "#1e1e2c", color: "#fff" }}
            icon={<SiReact />}
          >
            <h3 className="vertical-timeline-element-title">Learning Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">IBMSKILLSBUILD</h4>
            <p>
            Acquired foundational knowledge in cybersecurity. The program included quizzes designed to further deepen our understanding of key concepts in the field. 
            </p>
          </VerticalTimelineElement>
         
        </VerticalTimeline>
      </div>
    </div>
    </div>
  );
};

export default About;
