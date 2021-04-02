import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GlobalImagePage from '../GlobalImagePage/GlobalImagePage.jsx';
import './UploadImage.css';

const UploadImage = ({ user }) => {
  const [uploadedImage, setUploadedImage] = useState([]);

  useEffect(() => {
    axios.get('/globalgallery')
    .then(result => {
      setUploadedImage(result.data);
    })
    .catch(err => console.log('error in useEffect of uploadImage'));
  }, [uploadedImage]);

  const imageSelected = (event) => {
    event.preventDefault();
    const reader = new FileReader();
    reader.onload = () => {
      if(reader.readyState === 2) {
        const postObj = {
          username: user,
          image_url: reader.result,
          reported: 0
        }
        axios.post('/globalgallery', postObj)
        .then(result => console.log("posted successfully!"))
        .catch(err => console.log('err'));
        setUploadedImage(prevState => [[user, reader.result], ...prevState]);
      }
    }
    reader.readAsDataURL(event.target.files[0]);
  };

    if(uploadedImage.length !== 0) {
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
    } else {
      return(
        <div>
          <div style={{textAlign: 'center', marginBottom: '20px'}}>
            <input type='file' accept="image/*" onChange={imageSelected}/>
          </div>
          {uploadedImage.length === 0
          ? <div></div>
          : <GlobalImagePage imageGallery={uploadedImage}/>}
        </div>
      )
    };
}

export default UploadImage;
