import React from "react";
import AboutSVG from "../../assets/images/about.svg";
import "./About.scss";

const About = () => {
  return (
    <section
      className="app__about"
      id="about"
      data-aos="fade-right"
      data-aos-offset="230"
      data-aos-delay="450"
      data-aos-duration="1000"
      data-aos-easing="ease"
      data-aos-once="true"
      data-aos-anchor-placement="top-center"
    >
      <div className="app__about-container">
        <div className="app__about-container_text">
          <h2>About</h2>
          <p>
            Hello! My name is Pranitha Bollepalli and I am a full stack developer 
            Innovative Tech Enthusiast | Open-Source Leader | Bridging Research and Scalable Solutions
            Mission-driven software engineer with a passion for scalable solutions, intuitive UI design, open-source collaboration, and mentorship.
            Blend of Research and Open-Source Leadership| Diverse Skill Set Across Frontend and Backend Development|User-Centric Problem Solving"
          </p>

          <p>
          As a  a mission-driven software engineer with a strong foundation in computer science and a passion for creating impactful, 
          user-centric solutions. As a tech lead for MeltShiny, I have spearheaded open-source projects that bridge research and technology, 
          delivering scalable tools for DNA and RNA analysis. With expertise in web development, algorithms, and data visualization, 
          I combines technical innovation with a collaborative mindset to solve complex challenges. 
          My commitment to mentorship, continuous learning, and fostering inclusive tech communities sets me apart as a leader in the field..
          </p>

        </div>
        <div className="app__about-container_image">
          <img src={AboutSVG} alt="Programming" />
        </div>
      </div>
    </section>
  );
};

export default About;
