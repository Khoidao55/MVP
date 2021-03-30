import React, { useState, useEffect } from 'react';
import IndividualImage from '../IndividualImage/IndividualImage.jsx';
import './GlobalImagePage.css';

const GlobalImagePage = ({ imageGallery }) => {
  return(
    <div className='image-gallery-container'>
      {imageGallery.map(image =>
      <div>
        <IndividualImage image={image} />
      </div>
      )}
    </div>
  )
}

export default GlobalImagePage;