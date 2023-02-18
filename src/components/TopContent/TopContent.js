import React from 'react'
import { Link } from 'react-scroll'
import "./TopContent.css";

const TopContent = () => {
  return (
    <div className="topContent">
        <div className="topContent__container">
            <h1>Mr.Pradheep</h1>
            <p>A professional website Developer</p>
            <a href="https://docs.google.com/document/d/19i4fz4y1fdusVg3WRfT48JyfowiNga02CZxk2dZTAGM/edit?usp=sharing">
                <button className="topContent__downloadButton">Download CV</button>
            </a>
            <Link to="projects" smooth={true} duration={500}>
                <button className="topContent__workButton">My Work</button>
            </Link>
        </div>
      
    </div>
  )
}

export default TopContent
