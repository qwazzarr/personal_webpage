import { useSpring, animated } from 'react-spring'

import { useState } from 'react'




const MovingGallery = ({startW,weight , friction , drawings}) => {


  const [start,setStart] = useState(startW);
  if(drawings == undefined) {
    var item = "hui";
  }
  else {
    var item = drawings[Math.floor(Math.random()*drawings.length)]
  }
  
  const props = useSpring({
     loop :true,
     config: {mass:weight,clamp:true,friction:friction,tension:70},
     to: { 
            position:"absolute",
            background: "#1477F0",
            "background-image":"url("+item+")",
            width : "400px",
            height : "300px",
            left:"100%"}
           ,
     from: { 
        position:"absolute",
        background: "white",
        width : "400px",
        height: "300px",
        left: start+"%"
        },

    onRest : ()=>setStart("-20"),
        })
  return (
    <animated.div style={props}>I will fade in</animated.div>
    )
}

export default MovingGallery;