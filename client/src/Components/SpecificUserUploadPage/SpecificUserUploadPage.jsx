import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SpecificUserHomePage from '../SpecificUserHomePage/SpecificUserHomePage.jsx';
import '../UploadImage/UploadImage.css';

const SpecificUserUploadPage = ({ user }) => {
  const [uploadedImage, setUploadedImage] = useState([]);
  useEffect(() => {
    axios.get('/globalgallery')
    .then(result => {
      setUploadedImage(result.data);
    })
    .catch(err => console.log('error in useEffect of uploadImage'));
  }, []);

  const imageSelected = (event) => {
    let url = URL.createObjectURL(event.target.files[0]);

    const postObj = {
      username: user,
      image_url: url,
      reported: 0
    }
    axios.post('/globalgallery', postObj)
    .then(result => console.log("posted successfully!"))
    .catch(err => console.log('err'));

    setUploadedImage(prevState => [[user, url], ...prevState]);
  };

    if(uploadedImage.length !== 0) {
      return (
        <div>
          <div style={{textAlign: 'center', marginBottom: '20px'}}>
            <input type='file' accept="image/*" onChange={imageSelected}/>
          </div>
          {uploadedImage.length === 0
          ? <div></div>
          : <SpecificUserHomePage imageGallery={uploadedImage}/>}
        </div>
      )
    } else {
      return(
        <div>
          <div style={{textAlign: 'center', marginBottom: '20px'}}>
            <input type='file' accept="image/*" onChange={imageSelected}/>
          </div>
          <div></div>
        </div>
      )
    };
}

export default SpecificUserUploadPage;
