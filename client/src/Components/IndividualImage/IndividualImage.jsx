import React, { useState, useEffect } from 'react';
import './IndividualImage.css';

const IndividualImage = ({ image }) => {
  return (
    <img className='individual-image' src={image} />
  )
}

export default IndividualImage;