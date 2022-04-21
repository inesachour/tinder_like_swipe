import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';
import PhotoCard from './components/PhotoCard';

function App() {
  const [photos, setPohotos] = useState([]);
  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/photos")
    .then(response => {
      setPohotos(response.data)
    })
    .catch(e =>{
      console.log(e);
    })
  },[])

  return (
    <div className="App">
        {
          <PhotoCard objets={photos}></PhotoCard>
        }  
        
    </div>
  );
}

export default App;
