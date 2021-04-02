import React, { useEffect } from 'react';
import useStorage from '../../hooks/useStorage';
import { motion } from 'framer-motion';
import './ProgressBar.css';

const ProgressBar = ({ file, setFile }) => {
  const { url, progress } = useStorage(file);
  console.log(progress, url);

  useEffect(() => {
    if(url) {
      setFile(null);
    }
  }, [url, setFile]);

  return (
    <motion.div
    className='progress-upload-bar'
    initial = {{ width: 0 }}
    animate = {{ width: progress + 400 + 'px' }}
    ></motion.div>
  )
}

export default ProgressBar;