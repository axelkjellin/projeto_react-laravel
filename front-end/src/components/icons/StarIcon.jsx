import React from 'react';
import { IconContext } from "react-icons";
import { GrStar } from "react-icons/gr";

const starDefinition = (size, left = "0rem", top = "0rem") => {
  return { 
      color: "#FCE83A",
      style: {
        position: "relative",
        width: size,
        height: size,
        left: left,
        top: top
      }
  }
}
const StarIcon = (props) => (
  <IconContext.Provider 
      value = {
          starDefinition(props.size, props.left, props.top)
      }>
    <GrStar />
  </IconContext.Provider>
)

export default StarIcon