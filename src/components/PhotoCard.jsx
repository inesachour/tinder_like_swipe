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

  const [slideShow, setSlideShow] = useState(true);

  //sets initial cards within the queue
  const [cardQueue, setCardQueue] = useState([objets[0], objets[1], objets[2]]);

  //sets the index of card that will be pushed into queue
  const [cardQueueLength, setCardQueueLength] = useState(objets.length - 1);

  const autoplayChange = () => {
    setSlideShow(!slideShow);
    console.log("playing!");
  };

  const CardLeftScreen = () => {
    const objetsIndex =
      cardQueueLength < objets.length - 1 ? cardQueueLength + 1 : 0;

    //accesses queue without mutating state
    const newCardQueue = [...cardQueue];

    //pushes a card to back of queue
    newCardQueue.push(objets[objetsIndex]);

    //removes card from front of queue
    newCardQueue.shift();

    //updates state
    setCardQueueLength(objetsIndex);
    setCardQueue(newCardQueue);

    //sets slideshow to true
    setSlideShow(true);

  };

  return (
     /* <div style={{ display:'flex', justifyContent:'center' }}>
        <TinderCard
        key={objets[0].id}
        preventSwipe={["up", "down"]}
        //onCardLeftScreen={CardLeftScreen}
        //className="Cards"
        onSwipe={(dir) =>{
          console.log(0);
          Swiped(dir)
        }
        }
        >
        <Card style={{position:"absolute", width:"45%", height: "70%"}}>
          <CardMedia
              component="img"
              height="85%"
              image={objets[0].thumbnailUrl}
              alt="photo"
              />
          <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {objets[0].title}   
          </Typography>
          </CardContent>
        </Card>
        </TinderCard>
        </div>
*/
objets.map((objet) => {
  return (
    <TinderCard
      key={objet.id}
      preventSwipe={["up", "down"]}
      onCardLeftScreen={CardLeftScreen}
      className="Cards"
    >
      <div>
          <img alt="Images of web apps" src={objet.thumbnailUrl} />
      </div>
      
      <p className="techList">
          {objet.title}
      </p>
        
    </TinderCard>
    );
  }) 
  );
}