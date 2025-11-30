import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './Components/LoginPage';
import Dashboard from './Components/Dashboard';
import CompanyBooth from './Components/CompanyBooth';
import ResumeForm from './Components/ResumeForm';
import UploadResume from './Components/UploadResume';
import ChatComponent from './Components/ChatComponent';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/company-booth" element={<CompanyBooth />} />
      <Route path="/resume" element={<ResumeForm />} />
      <Route path="/upload" element={<UploadResume />} />
      <Route path="/chat" element={<ChatComponent />} />
    </Routes>
  );
}

export default App;
