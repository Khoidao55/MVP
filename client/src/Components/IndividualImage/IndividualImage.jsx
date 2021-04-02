import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './IndividualImage.css';

const IndividualImage = ({ username, image, setSelectedImage }) => {
  return (
    <div className='image-wrap'>
      <motion.img
        className='individual-image'
        whileHover={{ opacity: 0.8 }}
        style={{cursor: 'pointer'}}
        onClick={() => {
          setSelectedImage(image);
        }}
        // initial={{ opacity: 0}}
        // animate={{ opacity: 1}}
        // transition={{ delay: 1}}
        src={image}
      />
      <div className='pic-username'>
        <p>@{username}</p>
        {/* <i className="fas fa-camera"></i> */}
      </div>
  </div>
  )
}

export default IndividualImage;