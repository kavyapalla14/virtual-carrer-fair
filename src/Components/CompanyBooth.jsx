import React from 'react';
import '../pages/PageStyles.css';
const CompanyBooth = () => {
  const companies = [
    { name: "Google", role: "Software Engineer Intern" },
    { name: "Microsoft", role: "Cloud Engineer" },
    { name: "Amazon", role: "Data Analyst" }
  ];

  return (
    <div className="page-container">
      <h2>🏢 Company Booths</h2>
      <div className="booth-list">
        {companies.map((company, index) => (
          <div key={index} className="booth-card">
            <h3>{company.name}</h3>
            <p>{company.role}</p>
            <button className="apply-btn">Apply</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyBooth;
