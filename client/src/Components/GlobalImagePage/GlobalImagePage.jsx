import React, { useState, useEffect } from 'react';
import IndividualImage from '../IndividualImage/IndividualImage.jsx';
import ModalPic from '../ModalPic/ModalPic.jsx';
import { motion } from 'framer-motion';
import './GlobalImagePage.css';

const GlobalImagePage = ({ imageGallery }) => {
  //const toggle = false;
  //const [expandPic, setExpandPic] = useState(toggle);
  const [selectedImage, setSelectedImage] = useState(null);

  // const clickPic = (event) => {
  //   // console.log('clicked');
  //   // console.log(expandPic);
  //   // setExpandPic(() => !toggle);
  //   selectedImage
  // }
  // const onClickZoom = () => {
  //   if (selectedImage !== null) {
  //     setExpandPic((view) => !view);
  //   }
  // };

  return(
    <div className='image-gallery-container'>
      {imageGallery.map(image =>
      (<motion.div
        key={imageGallery.indexOf(image)}
        layout
        >
        <IndividualImage
          image={image}
          //setExpandPic={setExpandPic}
          setSelectedImage={setSelectedImage}
        />
      </motion.div>)
      )}
      {selectedImage && <ModalPic selectedImage={selectedImage} setSelectedImage={setSelectedImage} />}
    </div>
  )
}

export default GlobalImagePage;