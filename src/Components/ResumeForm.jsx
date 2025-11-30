import React from 'react';
import { useNavigate } from 'react-router-dom';
import '@/pages/PageStyles.css';

const ResumeForm = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/upload'); // Redirect to Upload Page
  };

  return (
    <div className="page-container">
      <h2>Submit Resume</h2>
      <form onSubmit={handleSubmit}>
        <button type="submit">Go to Upload Page</button>
      </form>
    </div>
  );
};

export default ResumeForm;
