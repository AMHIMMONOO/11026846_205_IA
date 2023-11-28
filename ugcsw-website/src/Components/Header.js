import React from "react";
import "../CSS/Header.css";
import hardt from "../logo/University_of_Ghana.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="containner">
      <header className="header">
        <div className="left-section">
          <img src={hardt} alt="UG Logo" />
          <div className="second-left-section">
            <h1>UG
              <Link to="/">
                <span>CSD</span>
              </Link> 
            </h1>
            <ul>
              <li>
                <Link to="/courses">Courses</Link>
              </li>
              <li>
                <Link to="/programs">Programs</Link>
              </li>
              <li>
                <Link to="/labs" className="noBorder">Labs</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="middle-section">
          <input type="text" placeholder="Search..." />
          <button type="submit">
            <i className="fa fa-search"></i>
          </button>
        </div>    
        <nav className="right-section">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/programs">Programs</Link>
            </li>
            <li>
              <Link to="/faculty">Faculty</Link>
            </li>
            <li>
              <Link to="/research-groups">Research Groups</Link>
            </li>
            <li>
              <Link to="/courses">Courses</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>    
      </header>
    </div>  
  );
};

export default Header;