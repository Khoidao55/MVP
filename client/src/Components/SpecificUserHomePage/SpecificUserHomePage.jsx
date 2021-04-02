import React, { useState, useEffect } from 'react';
import ModalPic from '../ModalPic/ModalPic.jsx';
import { motion } from 'framer-motion';
import './SpecificUserHomePage.css';

const SpecificUserHomePage = ({ imageGallery }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  return(
    <div className='image-gallery-container'>
      {imageGallery.map(image =>
      (<motion.div
        key={imageGallery.indexOf(image)}
        >
        <motion.div>
          <motion.img
            className='individual-image'
            style={{cursor: 'pointer'}}
            onClick={() => {
              setSelectedImage(image[1]);
            }}
            src={image[1]}
          />
          <div className='pic-username'>
            <p><i class="fas fa-camera"></i> @{image[0]}</p>
          </div>
         </motion.div>
        {/* <IndividualImage
          username={image[0]}
          image={image[1]}
          setSelectedImage={setSelectedImage}
        /> */}
      </motion.div>)
      )}
      {selectedImage && <ModalPic selectedImage={selectedImage} setSelectedImage={setSelectedImage} />}
    </div>
  )
}

export default SpecificUserHomePage;