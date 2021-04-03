import React, { useState, useEffect } from 'react';
import ProgressBar from '../ProgressBar/ProgressBar.jsx';
import SpecificUserHomePage from '../SpecificUserHomePage/SpecificUserHomePage.jsx';
import '../UploadImage/UploadImage.css';

const SpecificUserUploadPage = ({ user }) => {
  const [uploadedImage, setUploadedImage] = useState([]);
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const imageSelected = (event) => {
    const url = event.target.files[0];
    setFile(url);
    setError('');
  };
    return (
      <div>
        <div style={{textAlign: 'center', marginBottom: '20px'}}>
          <input type='file' accept="image/*" onChange={imageSelected}/>
        </div>
        <div>
          {file && <ProgressBar user={user} file={file} setFile={setFile} />}
          <SpecificUserHomePage user={user} />
        </div>
      </div>
    )
}

export default SpecificUserUploadPage;