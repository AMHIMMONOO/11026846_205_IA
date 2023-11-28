// Faculty.js
import React from 'react';
import '../CSS/FacultyPage.css';
import Header from './Header';
import { Link } from "react-router-dom";
import Footer from './Footer';


const Faculty = () => {
  return (
        <div className="faculty-container">
        <div className="faculty-directory">
          <h2>Faculty Directory</h2>
          <ul>
            <li>
              <img src="faculty1.jpg" alt="Faculty 1" />
              <div className="faculty-info">
                <h3>Professor John Doe</h3>
                <p>Bio: Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                <p>Contact: johndoe@example.com</p>
              </div>
            </li>
            {/* Add more faculty members as needed */}
          </ul>
        </div>
        <div className="research-projects">
          <h2>Research Projects</h2>
          <ul>
            <li>
              <h3>Project 1: Project Title</h3>
              <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
              <Link to="/project1">Learn More</Link>
            </li>
            {/* Add more research projects as needed */}
          </ul>
        </div>
      </div>
   
  );
};

export default Faculty;
