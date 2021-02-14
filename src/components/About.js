import React from 'react'
import darkImage from '../images/image-about-dark.jpg'
import lightImage from '../images/image-about-light.jpg'
import '../styles/About.css'

const About = () => {

  return (
    <div className="about">
      <img src={darkImage} alt="" className="imageAboutSection" />
      <div className="content">
        <h2>ABOUT OUR FURINTURE</h2>
        <p className="paragraphAbout"> 
          Our multifunctional collection blends design and function to suit your individual taste.
          Make each room unique, or pick a cohesive theme that best express your interests and what
          inspires you. Find the furniture pieces you need, from traditional to contemporary styles
          or anything in between. Product specialists are available to help you create your dream space.
        </p>
      </div>
      <img src={lightImage} alt="" className="imageAboutSection" />
    </div>
  )
}

export default About
