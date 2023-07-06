import React, { useState } from "react";
import normalBaby from "../assets/unadulterated-hoglette.png";
import SunBaby from "../assets/sun-eyes.png";
import BlueBaby from "../assets/blue-eyes.png";
import GlowingBaby from "../assets/glowing-eyes.png";

// is there a way we could associate eye color string values with images?
// perhaps so we could do something along the lines of `eyeColorMapper['blue'] and get back the right image?`

function BabyHog({name, hobby, eyeColor}) {

  // const [eyeColor, setEyeColor] = useState("blue");

  // function handleChangeEyeColor(e) {
  //   setEyeColor(e.target.value);
  // }
  
  // how can we reuse this for both buttons?
  // perhaps something with e.target.name === "+"
  const [weight, setWeight] = useState(200)
  
  function handleChangeWeight(e) {
      setWeight(() => {
        if (e.target.name === "+") {
          return weight + 10
        } else if (e.target.name === "-") {
          return weight - 10
        }
      })
    }
  
  
  

  // let hogImage;

  //   if (eyeColor === "blue") {
  //      hogImage = BlueBaby
  //   } else if (eyeColor === "glowing") {
  //      hogImage = GlowingBaby
  //   } else if (eyeColor === "sun") {
  //      hogImage = SunBaby
  //   }

  const eyeColorMapper = {
    blue: BlueBaby,
    glowing: GlowingBaby,
    sun: SunBaby
  }

  return (
    <li className="hogbabies">
      <h1>{name}</h1>
      <h3>Weight:{weight}</h3>
      <h3>Hobby:{hobby}</h3>
      <h4>Eye Color:{eyeColor}</h4>

      <button name="+" onClick={handleChangeWeight}>Increase Weight</button>
      <button name="-" onClick={handleChangeWeight}>Decrease Weight</button>

      <div className="hb-wrap">
        <img
          src={eyeColorMapper[eyeColor]}
          style={{ height: `${weight}px` }}
          alt="MasterBlasterJrJr"
        />
      </div>
    </li>
  );
}


export default BabyHog;
