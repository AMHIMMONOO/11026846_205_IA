// CoursesPage.js
import React from 'react';
import '../CSS/CoursesPage.css';
import Header from './Header';
import Footer from './Footer';

const CoursesPage = () => {
  return (
        <div className="courses-container">
        <div className="course-catalog">
          <h2>Course Catalog</h2>
          <div className="filter-options">
            {/* Add filter options components or elements */}
          </div>
          <ul>
            <li>
              <h3>CS101 - Introduction to Computer Science</h3>
              <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
              {/* Add more details about the course as needed */}
            </li>
            {/* Add more courses as needed */}
          </ul>
        </div>
        <div className="course-schedule">
          <h2>Course Schedule</h2>
          <div className="semester-filter">
            {/* Add semester filter components or elements */}
          </div>
          <table>
            <thead>
              <tr>
                <th>Course Code</th>
                <th>Course Name</th>
                <th>Day</th>
                <th>Time</th>
                <th>Location</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>CS101</td>
                <td>Introduction to Computer Science</td>
                <td>Monday</td>
                <td>10:00 AM - 12:00 PM</td>
                <td>Room 101</td>
              </tr>
              {/* Add more rows for each course schedule */}
            </tbody>
          </table>
        </div>
      </div>
  );
};

export default CoursesPage;
