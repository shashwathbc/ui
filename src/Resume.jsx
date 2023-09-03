import React, { useEffect } from 'react';

const Resume = () => {
  const handleDownloadClick = () => {
    // Replace 'your-pdf-file.pdf' with the actual URL or path to your PDF file
    const pdfURL = 'https://drive.google.com/file/d/1Sxio6yI6TQKcl-P2OQo2p6GIhB-dtF2i/view?usp=sharing';

    // Create a temporary anchor element to trigger the download
    const a = document.createElement('a');
    a.href = pdfURL;
    a.download = 'resume.pdf'; // Specify the desired file name
    a.style.display = 'none';

    // Append the anchor element to the document and click it
    document.body.appendChild(a);
    a.click();

    // Remove the anchor element from the document
    document.body.removeChild(a);
  };

  return (
    <div className='container__Download'>
      <h1>Download Resume</h1>
      <button className='btn' onClick={handleDownloadClick}>Download</button>
    </div>
  );
};

export default Resume;
