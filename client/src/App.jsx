import React, { useState, useEffect } from "react";
import UploadImage from './Components/UploadImage/UploadImage.jsx';
import './App.css';

const App = () => {
  const [user, setUser] = useState('anonymous');
  return(
    <div>
      <UploadImage user={user}/>
    </div>
  )
}

export default App;