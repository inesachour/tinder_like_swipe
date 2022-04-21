import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import TinderCard from 'react-tinder-card';
import { Carousel } from "react-responsive-carousel";
import { useState } from 'react';


export default function PhotoCard({objets}) {

  //const [objet, setObjet] = useState(objets[0])

  const [index, setIndex] = useState(1);
  
  React.useEffect(()=>{
    setIndex(1);
  },[])

  function swiper() {
    setIndex(prev => prev+1);
  }

  return (
    objets.map((objet) => {
      if(objet.id == index)
      {
      return (
        <div className="cardStyles">
        <TinderCard
          preventSwipe={["up", "down"]}
          className="Cards"
          onSwipe={swiper}
        >
          <div>
              <img alt="Images of web apps" src={objets[index].url} />
          </div>
          
          <p className="techList">
              {objets[index].title}
          </p>
            
        </TinderCard>
        </div>
    
    );
  }
  }) 
  );
}