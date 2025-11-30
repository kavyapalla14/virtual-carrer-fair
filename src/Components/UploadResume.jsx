import React, { useState } from 'react';
import '@/pages/PageStyles.css';

const UploadResume = () => {
  const [fileName, setFileName] = useState('');
  const [uploaded, setUploaded] = useState(false);

  const handleFileChange = (e) => {
    setFileName(e.target.files[0]?.name || '');
  };

  const handleUpload = (e) => {
    e.preventDefault();
    if (fileName) {
      setUploaded(true);
    } else {
      alert("Please select a file first!");
    }
  };

  return (
    <div className="page-container">
      <h2>Upload Resume</h2>
      {!uploaded ? (
        <form onSubmit={handleUpload}>
          <input type="file" onChange={handleFileChange} />
          <button type="submit">Upload</button>
        </form>
      ) : (
        <div className="success-message">
          ✅ Successfully uploaded your resume!
        </div>
      )}
    </div>
  );
};

export default UploadResume;
