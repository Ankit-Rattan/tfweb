// src/components/DownloadBrochure.js

import React, { useEffect } from 'react';

const DownloadBrochure = () => {
  useEffect(() => {
    // Alert that the brochure is about to download
    alert('Downloading Brochure...');

    // Replace this with your actual Google Drive link
    const brochureLink = "https://drive.google.com/file/d/1dNHFRiU4e4G29sbFle2izJPyqFT7HSkO/view?usp=sharing";

    // Start the download automatically after component mounts
    window.location.href = brochureLink;
  }, []);

  return (
    <div>
      <h2>Your Brochure is downloading...</h2>
      <p>If the download does not start, <a href="https://drive.google.com/file/d/1dNHFRiU4e4G29sbFle2izJPyqFT7HSkO/view?usp=sharing" target="_blank" rel="noopener noreferrer">click here to download the brochure</a>.</p>
    </div>
  );
};

export default DownloadBrochure;
