import React, { useState } from "react";

const Mile = ({ element ,videoHendlear}) => {
  const [clicked, setClicked] = useState(true);
  const onHandelarBtn = () => {
    {
      clicked? setClicked(false) : setClicked(true);
      videoHendlear(element)
    }
  }
  return (
    <div>
   {
    clicked ?   <div>
       <p>{element.idMeal}</p>
      <p>{element.strCategory}</p>
      <p>{element.dateModified ? element.dateModified : "Null"}</p>
      <p>{element.strInstructions}</p>
      <img  src={element.strMealThumb}></img>
      {/* <video width="750" height="500" controls > 
     <source src={element.strYoutube} type="video/mp4"/> </video> */}
      <iframe width="560" height="315" src="https://www.youtube.com/embed/sqJ2QhjBQaw?si=Wl3fKRiHmrhnoRHK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
     </div> : ""
   }

<button onClick={onHandelarBtn}>{clicked ?" Show" : "Removed"}</button>
    </div>
  );
};

export default Mile;
