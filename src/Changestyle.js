
import React, { useState } from "react";
import "./App.css";


export default function Changestyle() {
  const [style, setStyle] = useState("cont");
  console.log("you just clicked");
  
  setStyle("cont2");
  return (
    <div className={style}>
 
  </div>
  
  )
}
