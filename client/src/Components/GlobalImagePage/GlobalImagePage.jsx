import React, { useState, useEffect } from 'react';
import './GlobalImagePage.css';

const GlobalImagePage = ({ imageGallery }) => {
  return(
    <div className='image-gallery-container'>
      {imageGallery.map(pic =>
      <div className='individual-image'>
        <img src={pic} />
      </div>
      )}
    </div>
  )
}

export default GlobalImagePage;