import React, { useState, useEffect } from 'react';
import IndividualImage from '../IndividualImage/IndividualImage.jsx';
import ModalPic from '../ModalPic/ModalPic.jsx';
import { motion } from 'framer-motion';
import './GlobalImagePage.css';

const GlobalImagePage = ({ imageGallery }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  return(
    <div className='image-gallery-container'>
      {imageGallery.map(image =>
      (<motion.div
        key={imageGallery.indexOf(image)}
        layout
        >
        <IndividualImage
          username={image[0]}
          image={image[1]}
          setSelectedImage={setSelectedImage}
        />
      </motion.div>)
      )}
      {selectedImage && <ModalPic selectedImage={selectedImage} setSelectedImage={setSelectedImage} />}
    </div>
  )
}

export default GlobalImagePage;