import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Skills.css"; // Import styles

import { 
  FaReact, 
  FaNodeJs, 
  FaDatabase, 
  FaGithub, 
  FaTools, 
  FaCode, 
  FaBug, 
  FaServer,
  FaAngular,
  FaVuejs,
  FaCloud,
  FaCodeBranch,
  FaTasks
} from "react-icons/fa";

import { SiMongodb, SiGraphql, SiFirebase, SiPostgresql, SiMysql, SiRedis, SiSocketdotio } from "react-icons/si";
import { FaAws } from "react-icons/fa6";



const skillsData = [

  {
    category: "Web Development",
    skills: [
      { name: "MERN Stack", icon: <FaNodeJs /> },
      { name: "MongoDB", icon: <FaDatabase /> },
      { name: "Express.js", icon: <FaNodeJs /> },
      { name: "Node.js", icon: <FaNodeJs /> },
    ],
  },
  
  {
    category: "Front-End Technologies",
    skills: [
      { name: "HTML", icon: <FaCode /> },
      { name: "CSS", icon: <FaCode /> },
      { name: "JavaScript", icon: <FaCode /> },
      { name: "TypeScript", icon: <FaCode /> },
      { name: "React.js", icon: <FaReact /> },
      { name: "Redux", icon: <FaReact /> },
      { name: "React Hooks", icon: <FaReact /> },
      { name: "Vue.js", icon: <FaVuejs /> },
      { name: "Next.js", icon: <FaCode /> },
      { name: "Bootstrap", icon: <FaCode /> },
      { name: "Tailwind CSS", icon: <FaCode /> },
      { name: "Material UI", icon: <FaCode /> },
      { name: "API Integration", icon: <FaServer /> },
    ],
  },
  

  {
    category: "Back-End Technologies",
    skills: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express.js", icon: <FaServer /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "REST API", icon: <FaServer /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "AWS (Hosting & Services)", icon: <FaAws /> },
    ],
  },
  
  {
    category: "Build Tools & Version Control",
    skills: [

      { name: "Git", icon: <FaGithub /> },
      { name: "GitHub", icon: <FaGithub /> },
    ],
  },
  {
    category: "Testing & Databases",
    skills: [
      { name: "Postman", icon: <FaBug /> },
      { name: "UI/UX Testing", icon: <FaBug /> },
      { name: "MongoDB", icon: <FaDatabase /> },
      { name: "MySQL", icon: <FaDatabase /> },
      { name: "PostgreSQL", icon: <FaDatabase /> },
      { name: "SQL Server (MSSQL)", icon: <FaDatabase /> },
      { name: "Firebase", icon: <FaDatabase /> },
   
    ],
  },

  {
    category: "Development Tools & Support",
    skills: [
     
      { name: "Docker", icon: <FaServer /> },
      { name: "Kubernetes", icon: <FaServer /> },
      { name: "CI/CD Pipelines (Jenkins, GitHub Actions, GitLab CI/CD)", icon: <FaTools /> },
      { name: "AWS", icon: <FaCloud /> },
      { name: "Google Cloud", icon: <FaCloud /> },
      { name: "Azure", icon: <FaCloud /> },
     
    ],
  },
  {
    category: "Version Control & Collaboration",
    skills: [
      { name: "Git", icon: <FaCodeBranch /> },
      { name: "GitHub", icon: <FaCodeBranch /> },
      { name: "GitLab", icon: <FaCodeBranch /> },
      { name: "Bitbucket", icon: <FaCodeBranch /> },
      { name: "Agile Methodologies", icon: <FaTasks /> },
      { name: "Scrum Framework", icon: <FaTasks /> },
    ],
  },
  
  
  {
    category: "Development Tools & Support",
    skills: [
      { name: "Jira", icon: <FaTools /> },
      { name: "Linux OS", icon: <FaTools /> },
      { name: "IT Systems", icon: <FaTools /> },
      { name: "AV Equipment", icon: <FaTools /> },
      { name: "Video Conferencing", icon: <FaTools /> },
    ],
  },
];

const Skills = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <section className="skills-main-container">
      {/* Left Section - Image */}
    

      {/* Right Section - Skills Slider */}

    
      <div className="skills-content">
        <h2>SKILLS AND TECHNOLOGIES</h2>

        <Slider {...settings}>
          {skillsData.map((category, index) => (
            <div key={index} className="skills-category">
              <h3>{category.category}</h3>
              <div className="skills-list">
                {category.skills.map((skill, i) => (
                  <div key={i} className="skill-item">
                    {skill.icon}
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Skills;
