import { useState, useEffect } from 'react';
import { projectStorage, projectFirestore, timestamp } from '../Firebase/FireBase.utils.js';

const useStorage = (user, file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setURL] = useState(null);

  useEffect(() => {
    const storageRef = projectStorage.ref(file.name);
    const collectionRef = projectFirestore.collection('images');

    storageRef.put(file).on('state_changed', (snap) => {
      let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
      setProgress(percentage);
    }, (err) => {
      setError(err);
    }, async () => {
      const userName = user;
      const url = await storageRef.getDownloadURL();
      const createdAt = timestamp();
      collectionRef.add({ userName, url, createdAt });
      setURL(url);

      console.log(createdAt); // <====== add this to database?
      console.log(username); // <====== this will be the user's username that I will log into the database.
      console.log(url); // <======= add this as the url to the database for each user.
    })
  }, [file]);

  return {progress, url, error};
}

export default useStorage;