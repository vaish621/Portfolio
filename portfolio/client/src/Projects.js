import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdWork } from "react-icons/md";
import './styles.css';

const Projects = () => {
  return (
    <div className="project-container">
      <div className="starfield-container">
        <div className="starfield">
          <div className="stars"></div>
          <div className="stars2"></div>
          <div className="stars3"></div>
        </div>
      </div>

      <div className="content-container">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <h2 className="text-teal-100 text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6">
            Projects
          </h2>
          
          <hr className="border-gray-500 my-6" />
          
          <VerticalTimeline>
            {projectsData.map((project, index) => (
              <VerticalTimelineElement
                key={index}
                className="vertical-timeline-element--work"
                contentStyle={{ 
                  background: "white", 
                  color: "#1e1e2c",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
                }}
                contentArrowStyle={{ borderRight: "7px solid white" }}
                date={project.date}
                iconStyle={{ background: "#1e1e2c", color: "#fff" }}
                icon={<MdWork />}
              >
                <div className="flex items-center">
                  <div>
                    <h3 className="vertical-timeline-element-title font-bold text-xl mb-1">
                      {project.title}
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle text-gray-600 mb-2">
                      {project.subtitle}
                    </h4>
                    <p className="text-gray-800">
                      {project.description}
                    </p>
                  </div>
                </div>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </div>
  );
};

const projectsData = [
  {
    title: "VoyageVista",
    subtitle: "A Tour Website",
    description: "Developed a dynamic tour booking website using HTML, CSS and JS that not only allocates the requested tour for users but also offers additional information on various other tours. Live link for the website: https://vaish621.github.io/tour_website/.",
  },
  {
    title: "CineBooker",
    subtitle: "A Movie Booking Website",
    description: "Our movie booking website allows users to dynamically select seats with robust concurrency control, ensuring that no two users can select the same seat simultaneously. Additionally, we have integrated a comprehensive payment gateway that supports multiple payment options, including credit cards, debit cards, UPI, net banking, and QR code payments.",
  },
  {
    title: "Speech Emotion Recognition",
    subtitle: "Analysing Speech Through Emotions",
    description: "Developed project titled Speech Emotion Recognition, wherein the system assesses users' moods through voice analysis using ml concepts and python libraries",
  },
];

export default Projects;
