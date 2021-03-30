import React, { useState, useEffect } from 'react';
import GlobalImagePage from '../GlobalImagePage/GlobalImagePage.jsx';
import './UploadImage.css';

const UploadImage = () => {
  const [uploadedImage, setUploadedImage] = useState([]);

  const imageSelected = (event) => {
    event.preventDefault();
    const reader = new FileReader();
    reader.onload = () => {
      if(reader.readyState === 2) {
        setUploadedImage(prevState => [...prevState, reader.result]);
      }
    }
    reader.readAsDataURL(event.target.files[0]);
  };

  return (
    <div>
      <div style={{textAlign: 'center', marginBottom: '20px'}}>
        <input type='file' accept="image/*" onChange={imageSelected}/>
      </div>
      {uploadedImage.length === 0
      ? <div></div>
      : <GlobalImagePage imageGallery={uploadedImage}/>}
    </div>
  )
}

export default UploadImage;

//uploadedImage.map(pic => <img className="uploaded-image" src={pic} />)