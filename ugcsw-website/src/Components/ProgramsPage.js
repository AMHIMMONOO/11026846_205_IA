// ProgramsPage.js
import React from 'react';
import '../CSS/ProgramsPage.css';
import MainLayout from './MainLayout';

const ProgramsPage = () => {
  return (
      <div>
      <div className="programs-container">
        <div className="undergraduate-programs">
          <h2>Undergraduate Programs</h2>
          <ul>
            <li>
              <strong>Program 1:</strong> Computer Science
              <p>Brief description of the Computer Science program.</p>
              <p>Admission Requirements: [Requirements here]</p>
            </li>
            {/* Add more programs as needed */}
          </ul>
        </div>
        <div className="graduate-programs">
          <h2>Graduate Programs</h2>
          <ul>
            <li>
              <strong>Program 1:</strong> Master of Science in Computer Science
              <p>Brief description of the Master's program.</p>
              <p>Admission Requirements: [Requirements here]</p>
            </li>
            {/* Add more programs as needed */}
          </ul>
        </div>
        <div className="research-opportunities">
          <h2>Research Opportunities</h2>
          <p>
            Explore various research programs and opportunities in the field of Computer Science.
          </p>
        </div>
      </div>
      </div>
  );
};

export default ProgramsPage;
