import * as React from 'react';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import TinderCard from 'react-tinder-card';
import { useState, useEffect } from 'react';


export default function PhotoCard({objets}) {

  //index of shown image
  const [index, setIndex] = useState(1);
  
  useEffect(()=>{
    setIndex(1);
  },[])

  //incrementing the index of shown after swiping
  function swiper() {
    setIndex(prev => prev+1);
  }

  //returning the card
  return (
    objets.map((objet) => {
      if(objet.id == index)
      {
        return (
          <div className="cardStyles">
          <TinderCard
            preventSwipe={["up", "down"]}
            key = {objets[index].id}
            className="Cards"
            onSwipe={swiper}
          >
            
            <CardMedia>
                <img alt="Images of web apps" src={objets[index].url} />
            </CardMedia>
            
            <Typography className="techList">
                {objets[index].title}
            </Typography>
              
          </TinderCard>
          </div>
        );
  }}) 
  );
}