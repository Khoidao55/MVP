import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './IndividualImage.css';

const IndividualImage = ({ image }) => {
  return (
    <motion.img
      className='individual-image'
      whileHover={{ opacity: 0.8 }}
      style={{cursor: 'pointer'}}
      // initial={{ opacity: 0}}
      // animate={{ opacity: 1}}
      // transition={{ delay: 1}}
      src={image} />
  )
}

export default IndividualImage;