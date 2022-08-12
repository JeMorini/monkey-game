import logo from "./logo.svg";
import "./App.css";
import monkey from "./assets/giphy.gif";
import banana from "./assets/banana.png";
import stars from "./assets/stars.gif";
import React, { useCallback, useEffect, useState, useRef } from "react";
import { Banana } from "./styles";
import useSound from "use-sound";
import Initial from "./components/Initial";
import sound from "../src/assets/sound/mixkit-retro-game-notification-212.wav";

function App() {
  const myRef = useRef();
  const myRef2 = useRef();
  const [globalCoords, setGlobalCoords] = useState({ x: 0, y: 0 });
  const [bananaXPosition, setBananaXPosition] = useState(200);
  const [isDown, setIsDown] = useState(false);
  const [point, setPoint] = useState(1);
  const [dista, setDista] = useState(1);
  const [display, setDisplay] = useState("flex");
  const [bananaQuantity, setBananaQuantity] = useState(1);
  const [x, setX] = useState(1);
  const [y, setY] = useState(1);
  const [isStart, setIsStart] = useState(false);
  const [play] = useSound(sound);

  const xY = myRef?.current?.offsetTop;
  const xYM = myRef2?.current?.offsetTop;
  const left = myRef?.current?.offsetLeft;
  const leftM = myRef2?.current?.offsetLeft;

  useEffect(() => {
    // setDista(left);
    var altura = window.screen.height;
    // console.log((altura / 100) * 85 - 100);
    console.log(xY);
    console.log(xYM);
    console.log("AQUI", xY - xYM);
    setDista(xY - xYM);
    if (
      xY - xYM > 0 &&
      start &&
      globalCoords.x - left < 200 &&
      globalCoords.x - left > 0
    ) {
      setPoint(point + 1);
      setDisplay("none");
      play();
    }
  }, [xY]);

  useEffect(() => {
    const handleWindowMouseMove = (event) => {
      setGlobalCoords({
        x: event.clientX,
        y: event.clientY,
      });
    };
    window.addEventListener("mousemove", handleWindowMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleWindowMouseMove);
    };
  }, []);

  function here() {
    setInterval(start, 1000);
    setIsStart(true);
  }

  useEffect(() => {
    setBananaXPosition(Math.random() * (window.screen.width - 50) + 50);
    setBananaQuantity(bananaQuantity + 1);
  }, [isDown]);

  useEffect(() => {
    if (isDown === false && isStart && globalCoords.x - bananaXPosition < 100) {
      // alert("pegou");
      // setPoint(point + 1);
    }
    if (isDown === true) {
      setX(bananaXPosition);
    }
    setY(globalCoords.x);
  }, [bananaXPosition, globalCoords.x]);

  // function start() {
  //   setIsDown((prevState) => !prevState);
  //   setBananaQuantity(bananaQuantity + 1);
  // }

  const start = useCallback(() => {
    setIsDown((prevState) => !prevState);
    setDisplay("flex");
  }, [bananaQuantity]);

  return (
    <div className="App" onClick={here}>
      {!isStart && <Initial />}
      <div className="img">
        <h1 style={{ position: "absolute" }}>{point}</h1>
        <h1 style={{ position: "absolute", marginLeft: 400 }}>
          {x.toFixed(0)}
        </h1>
        <h1 style={{ position: "absolute", marginLeft: 800 }}>{y}</h1>
        <h1 style={{ position: "absolute", marginLeft: 1200 }}>{dista}</h1>
        <h1 style={{ position: "absolute", marginLeft: 1400 }}>
          {bananaQuantity}
        </h1>
        {/* <img src={forest}  /> */}
        {/* {isDown && ( */}
        {display === "none" && (
          <Banana
            src={stars}
            style={{
              left: bananaXPosition,
              zIndex: 100,
            }}
            down={isDown}
          />
        )}
        <Banana
          ref={myRef}
          display={display}
          src={banana}
          style={{ left: bananaXPosition }}
          down={isDown}
        />
        {/* )} */}
        <img
          ref={myRef2}
          src={monkey}
          style={{
            position: "absolute",
            bottom: 0,
            left: globalCoords.x - 200 > 0 ? globalCoords.x - 200 : 0,
            height: 200,
            width: 200,
          }}
        />
      </div>
    </div>
  );
}

export default App;
