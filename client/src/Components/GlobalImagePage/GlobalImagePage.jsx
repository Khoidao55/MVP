import React, { useState, useEffect } from 'react';
import IndividualImage from '../IndividualImage/IndividualImage.jsx';
import { motion } from 'framer-motion';
import './GlobalImagePage.css';

const GlobalImagePage = ({ imageGallery }) => {
  return(
    <div className='image-gallery-container'>
      {imageGallery.map(image =>
      (<motion.div
      layout
      >
        <IndividualImage image={image} />
      </motion.div>)
      )}
    </div>
  )
}

export default GlobalImagePage;