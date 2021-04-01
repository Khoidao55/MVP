import React from 'react';
import { motion } from 'framer-motion';

import './ModalPic.css';

const Modal = ({ selectedImage, setSelectedImage }) => {
  const clickOffImage = (event) => {
    if(event.target.classList.contains('enlarged-background')) {
      setSelectedImage(null);
    }
  }

  return (
    <motion.div
      className="enlarged-background"
      onClick={clickOffImage}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}>
      <img src={selectedImage} alt="enlarged-pic" />
    </motion.div>

  )
}

export default Modal;