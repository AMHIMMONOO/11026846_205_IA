// Programs.js
import React, { useState, useEffect } from 'react';
import './Programs.css'; // Import your CSS file for styling

const Programs = () => {
  // State for dynamic content (placeholder)
  const [undergraduatePrograms, setUndergraduatePrograms] = useState([]);
  const [graduatePrograms, setGraduatePrograms] = useState([]);
  const [researchOpportunities, setResearchOpportunities] = useState([]);

  // Fetch dynamic content on component mount (placeholder)
  useEffect(() => {
    // Fetch undergraduate programs data (placeholder)
    const fetchUndergraduatePrograms = async () => {
      // Simulate API call
      const data = await fetch('/api/undergraduate-programs');
      const programs = await data.json();
      setUndergraduatePrograms(programs);
    };

    // Fetch graduate programs data (placeholder)
    const fetchGraduatePrograms = async () => {
      // Simulate API call
      const data = await fetch('/api/graduate-programs');
      const programs = await data.json();
      setGraduatePrograms(programs);
    };

    // Fetch research opportunities data (placeholder)
    const fetchResearchOpportunities = async () => {
      // Simulate API call
      const data = await fetch('/api/research-opportunities');
      const opportunities = await data.json();
      setResearchOpportunities(opportunities);
    };

    fetchUndergraduatePrograms();
    fetchGraduatePrograms();
    fetchResearchOpportunities();
  }, []);

  return (
    <div className="programs-container">
      {/* Undergraduate Programs Section */}
      <section className="undergraduate-programs">
        <h2>Undergraduate Programs</h2>
        {/* Add dynamic content for undergraduate programs (placeholder) */}
        <div className="programs-list">
          {undergraduatePrograms.map((program) => (
            <div key={program.id}>
              <h3>{program.name}</h3>
              <p>{program.description}</p>
              <p>Admission Requirements: {program.admissionRequirements}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Graduate Programs Section */}
      <section className="graduate-programs">
        <h2>Graduate Programs</h2>
        {/* Add dynamic content for graduate programs (placeholder) */}
        <div className="programs-list">
          {graduatePrograms.map((program) => (
            <div key={program.id}>
              <h3>{program.name}</h3>
              <p>{program.description}</p>
              <p>Admission Requirements: {program.admissionRequirements}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Research Opportunities Section */}
      <section className="research-opportunities">
        <h2>Research Opportunities</h2>
        {/* Add dynamic content for research opportunities (placeholder) */}
        <div className="opportunities-list">
          {researchOpportunities.map((opportunity) => (
            <div key={opportunity.id}>
              <h3>{opportunity.title}</h3>
              <p>{opportunity.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Programs;
