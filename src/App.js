import "./App.css";
import monkey from "./assets/giphy.gif";
import banana from "./assets/banana.png";
import stars from "./assets/stars.gif";
import forest from "./assets/forest.png";
import React, { useCallback, useEffect, useState, useRef } from "react";
import { Banana, Background } from "./styles";
import useSound from "use-sound";
import Initial from "./components/Initial";
import sound from "../src/assets/sound/mixkit-retro-game-notification-212.wav";
import ModalFinished from "./components/ModalFinished";
import ModalSorry from "./components/ModalSorry";

function App() {
  const myRef = useRef();
  const myRef2 = useRef();
  const [globalCoords, setGlobalCoords] = useState({ x: 0, y: 0 });
  const [bananaXPosition, setBananaXPosition] = useState(200);
  const [isDown, setIsDown] = useState(false);
  const [point, setPoint] = useState(0);
  const [display, setDisplay] = useState("flex");
  const [bananaQuantity, setBananaQuantity] = useState(0);
  const [isStart, setIsStart] = useState(false);
  const [isFinish, setIsFinish] = useState(false);
  const [play] = useSound(sound);

  const xY = myRef?.current?.offsetTop;
  const xYM = myRef2?.current?.offsetTop;
  const left = myRef?.current?.offsetLeft;

  useEffect(() => {
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
    var loop;
    if (!isStart) {
      loop = setInterval(start, 1000);
      setIsStart(true);
    }
  }

  useEffect(() => {
    if (bananaQuantity / 2 === 20) {
      setIsFinish(true);
    }
    setBananaXPosition(Math.random() * (window.screen.width - 50));
    setBananaQuantity(bananaQuantity + 1);
  }, [isDown]);

  useEffect(() => {
    if (isDown === false && isStart && globalCoords.x - bananaXPosition < 100) {
    }
  }, [bananaXPosition, globalCoords.x]);

  const start = useCallback(() => {
    if (!isFinish) {
      setIsDown((prevState) => !prevState);
      setDisplay("flex");
    }
  }, [bananaQuantity]);

  const restart = useCallback(() => {
    setIsFinish(false);
    setBananaQuantity(0);
    setPoint(0);
    start();
  }, []);

  return (
    <div className="App" onClick={here}>
      <ModalSorry />
      <Background src={forest} />
      {!isStart && <Initial />}
      {isFinish && (
        <ModalFinished winner={point >= 15} restart={() => restart()} />
      )}
      {!isFinish && isStart && (
        <div className="img">
          <h1 style={{ position: "absolute", color: "#fff" }}> {point}</h1>
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
      )}
    </div>
  );
}

export default App;
