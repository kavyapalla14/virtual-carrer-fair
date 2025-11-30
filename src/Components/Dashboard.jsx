import React from 'react';
import '../styles/PageStyles.css';


import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const role = localStorage.getItem('role');
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <div className="dashboard-box">
        <h2>{role === 'admin' ? 'Admin Dashboard' : 'User Dashboard'}</h2>
        {role === 'admin' ? (
          <>
            <button onClick={() => alert('Create Career Fair clicked')}>
              Create Career Fair
            </button>
            <button onClick={() => alert('Manage Booths clicked')}>
              Manage Booths
            </button>
          </>
        ) : (
          <>
            <button onClick={() => navigate('/submit-resume')}>
              Submit Resume
            </button>
            <button onClick={() => navigate('/CompanyBooth')}>
              Visit Company Booth
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
