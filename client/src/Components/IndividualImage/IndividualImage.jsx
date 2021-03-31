import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './IndividualImage.css';

const IndividualImage = ({ image }) => {
  let toggle = false;
  const [expandPic, setExpandPic] = useState(toggle);

  const clickPic = (event) => {
    console.log('clicked');
    console.log(expandPic);
    setExpandPic(() => !toggle);
  }

  if(expandPic === false) {
    return (
      <motion.img
    className='individual-image'
    whileHover={{ opacity: 0.8 }}
    style={{cursor: 'pointer'}}
    onClick={clickPic}
    // initial={{ opacity: 0}}
    // animate={{ opacity: 1}}
    // transition={{ delay: 1}}
    src={image} />
    )
  } else {
    return(
    <div>
      <h1>hello world</h1>
    </div>
    )
  }
}

export default IndividualImage;