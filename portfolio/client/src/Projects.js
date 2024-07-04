import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdWork } from "react-icons/md";


import './styles.css';
const Projects = () => {
  return (
   <div className="bg-black">
   <div className="relative min-h-screen h-200 bg-black flex items-center justify-center">
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
      </div>
     
    </div>
      <div className="max-w-4xl mx-auto px-4 py-12 " style={{ position: 'relative' , bottom:'650px' }}>
        <h2 className="text-teal-100 text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6">Projects</h2>
        
        <hr className="border-gray-500 my-6" />
        <VerticalTimeline>
          {projectsData.map((project, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{ borderRight: "7px solid white" }}
              date={project.date}
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<MdWork />}
            >
              
              <div className="flex items-center">
                
                <div>
                  <h3 className="vertical-timeline-element-title">{project.title}</h3>
                  <h4 className="vertical-timeline-element-subtitle">{project.subtitle}</h4>
                  <p>{project.description}</p>
                  
                </div>
              </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

// Projects data
const projectsData = [
  {
    
    title: "VoyageVista",
    subtitle: "A Tour Website",
    description: "Developed a  dynamic tour booking website using HTML , CSS and JS that not only allocates the requested tour for users but also offers additional information on various other tours. Live link for the website .   https://vaish621.github.io/tour_website/.",
  
   
  },
  {
    
    title: "CineBooker",
    subtitle: "A Movie Booking Website",
    description: "Our movie booking website allows users to dynamically select seats with robust concurrency control, ensuring that no two users can select the same seat simultaneously. Additionally, we have integrated a comprehensive payment gateway that supports multiple payment options, including credit cards, debit cards, UPI, net banking, and QR code payments.",
    
  },
  {
   
    title: "Speech Emotion Recognition",
    subtitle: "Analysing Speech Through Emotions",
    description: "Developed project titled Speech Emotion Recognition, wherein the system assesses users' moods through voice analysis using  ml concepts and python libraries",
   
  },
  // Add more projects as needed
];

export default Projects;
