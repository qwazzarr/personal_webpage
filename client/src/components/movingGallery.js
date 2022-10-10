import { useSpring, animated } from 'react-spring'

import { useState } from 'react'




const MovingGallery = ({startW,weight , friction , drawings}) => {

   
  const [start,setStart] = useState(startW);

  const [update, setupdate] = useState(false);


  if(drawings == undefined||drawings.length ==0) {
    var item = {value:"hui"};
  }
  else {
    var item = drawings[Math.floor(Math.random()*drawings.length)];
  }
  const props = useSpring({
     loop :true,
     config: {mass:weight,clamp:true,friction:friction,tension:70},
     to: 
        [
          {
            position:"absolute",
            width : "400px",
            height : "300px",
            left:"79%",
            opacity:"0"}
     ],
     from: { 
        position:"absolute",
        width : "400px",
        height: "300px",
        left: start+"%",
        opacity:"1"
        },

    onRest : ()=> {
        item = drawings[Math.floor(Math.random()*drawings.length)];
        setStart("-20");
        setupdate( update => update +1 );
        },})
  return (
    <animated.img style={props} src= {item.value.replace(/(\r\n|\n|\r)/gm, "")}></animated.img>
    )
}

export default MovingGallery;