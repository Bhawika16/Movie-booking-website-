import "./App.css";
import React, { useState } from "react";
import { useEffect } from "react";
import Navbar from "./Navbar";
// import Changestyle from './Changestyle';
const useMountEffect = (ChangeStyle) => useEffect(ChangeStyle, []);
const App = () => {
  // const [style, setStyle] = useState("cont");
  // console.log("you just clicked");
  // setStyle("cont2");
  // const [style, setStyle] = useState("cont");

  var executed = false;

  // console.log(setStyle);
  const [bgClr, setBgClr] = useState("red");

  const ChangeStyle = (event) => {
    //    if (!executed) {
    //     executed = true;
    //     setBgClr('yellow');
    // }
    console.log(event.target);
    event.target.style.color = "white";
    if (event.target.style.backgroundColor == "green")
      event.target.style.backgroundColor = "red";
    else event.target.style.backgroundColor = "green";
  };

  return (
    <>
      <Navbar title="Movie booking website" />
      <h1 className="heading"> Movie booking website </h1>
      <br></br>
      <br></br>
      <br></br>
      <div className="grid-container">
        <div className="style">
          {/* <div className="item1"> */}
          <button style={{ background: bgClr }} onClick={ChangeStyle}>
            Book seat{" "}
          </button>{" "}
        </div>
        <div className="style">
          {/* <div className="item1"> */}
          <button style={{ background: bgClr }} onClick={ChangeStyle}>
            Book seat{" "}
          </button>{" "}
        </div>
        {/* </div> */}
        <div className="style">
          {/* <div className="item1"> */}
          <button style={{ background: bgClr }} onClick={ChangeStyle}>
            Book seat{" "}
          </button>{" "}
        </div>
        <div className="style">
          {/* <div className="item1"> */}
          <button style={{ background: bgClr }} onClick={ChangeStyle}>
            Book seat{" "}
          </button>{" "}
        </div>
        <div className="style">
          {/* <div className="item1"> */}
          <button style={{ background: bgClr }} onClick={ChangeStyle}>
            Book seat{" "}
          </button>{" "}
        </div>
        <div className="style">
          {/* <div className="item1"> */}
          <button style={{ background: bgClr }} onClick={ChangeStyle}>
            Book seat{" "}
          </button>{" "}
        </div>
        <div className="style">
          {/* <div className="item1"> */}
          <button style={{ background: bgClr }} onClick={ChangeStyle}>
            Book seat{" "}
          </button>{" "}
        </div>
        <div className="style">
          {/* <div className="item1"> */}
          <button style={{ background: bgClr }} onClick={ChangeStyle}>
            Book seat{" "}
          </button>{" "}
        </div>
        <div className="style">
          {/* <div className="item1"> */}
          <button style={{ background: bgClr }} onClick={ChangeStyle}>
            Book seat{" "}
          </button>{" "}
        </div>
      </div>
      <div className="conatiner mx-3">
        <button type="button" className="btn btn-primary">
          Book seat
        </button>
      </div>
    </>
  );
};

export default App;

// import React, { useState } from "react";
// import "./App.css";
// const App = () => {
//   const [style, setStyle] = useState("cont");

//   const changeStyle = () => {
//     console.log("you just clicked");

//     setStyle("cont2");
//   };
//   return (
//     <>
//       <div className="App">CHANGE CSS STYLING WITH ONCLICK EVENT</div>
//       <div className={style}>
//         <button className="button" onClick={changeStyle}>
//           Click me!
//         </button>
//       </div>
//     </>
//   );
// };
// export default App;
