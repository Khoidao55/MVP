import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProgressBar from '../ProgressBar/ProgressBar.jsx';
import GlobalImagePage from '../GlobalImagePage/GlobalImagePage.jsx';
import './UploadImage.css';

const UploadImage = ({ user }) => {
  const [uploadedImage, setUploadedImage] = useState([]);
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  // useEffect(() => {
  //   axios.get('/globalgallery')
  //   .then(result => {
  //     setUploadedImage(result.data);
  //   })
  //   .catch(err => console.log('error in useEffect of uploadImage'));
  // }, []);

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
          {file && <ProgressBar file={file} />}
          <GlobalImagePage user={user}/>
        </div>
      </div>
    )
}

export default UploadImage;
