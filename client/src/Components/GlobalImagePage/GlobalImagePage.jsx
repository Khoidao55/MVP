import React, { useState, useEffect } from 'react';
import useFirestore from '../../hooks/useFireStore.js';
import ModalPic from '../ModalPic/ModalPic.jsx';
import { motion } from 'framer-motion';
import './GlobalImagePage.css';

//use database to store specific user's photo by username in this FILE.

const GlobalImagePage = ({ user }) => {
  const { docs } = useFirestore('images');
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    console.log(docs);
    console.log(user);
  }, [docs]);

  return(
    <div className='image-gallery-container'>
      {docs && docs.map(doc =>
      (<motion.div
        layout
        key={doc.id}
        >
        <motion.div>
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className='individual-image'
            style={{cursor: 'pointer'}}
            onClick={() => {
              setSelectedImage(doc.url);
            }}
            src={doc.url}
          />
          <div className='pic-username'>
            <p><i className="fas fa-camera"></i> @{doc.userName}</p>
          </div>
         </motion.div>
      </motion.div>)
      )}
      {selectedImage && <ModalPic selectedImage={selectedImage} setSelectedImage={setSelectedImage} />}
    </div>
  )
}

export default GlobalImagePage;