import { react, useState, useEffect } from "react";
import { actors } from "../Constant/index";
import GameOverModal from "./GameOverModal";
import { Link } from "react-router-dom";

const Game = ({ gameData, getRandomActors }) => {
  /*
  const getRandomActors = () => {
    const actor1 = gameData[Math.floor(Math.random() * gameData.length)];
    let actor2 = actor1;

    // Ensure we get a second unique actor
    while (actor2 === actor1) {
      actor2 = gameData[Math.floor(Math.random() * gameData.length)];
    }

    return [actor1, actor2];
  };*/

  const [actorsPair, setActorsPair] = useState(() => getRandomActors(gameData));
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);

  const getNewActor = () => {
    let copy = actorsPair;
    copy[0] = copy[1];
    while (copy[0] === copy[1]) {
      copy[1] = gameData[Math.floor(Math.random() * gameData.length)];
    }
    setActorsPair(copy);
  };

  const checkIfMore = () => {
    if (actorsPair[1].propertyValue >= actorsPair[0].propertyValue) {
      setScore(score + 1);
      if (score + 1 > highScore) {
        setHighScore(score + 1);
      }
      getNewActor();
    } else {
      setIsGameOver(true);
    }
  };

  const checkIfLess = () => {
    if (actorsPair[1].propertyValue <= actorsPair[0].propertyValue) {
      setScore(score + 1);
      if (score + 1 > highScore) {
        setHighScore(score + 1);
      }
      getNewActor();
    } else {
      setIsGameOver(true);
    }
  };

  const playAgain = () => {
    setIsGameOver(false);
    setActorsPair(getRandomActors());
    setScore(0);
  };

  return (
    <div
      style={{
        height: "100vh",
        overflow: "auto",
        backgroundColor: "#030613",
      }}
    >
      <Link to="/" style={{ color: "#4A4A4A" }}>
        Back to Home Page
      </Link>
      <GameOverModal isGameOver={isGameOver} playAgain={playAgain} />
      <div
        data-testid="score"
        style={{
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "60px",
          margin: "20px 0",
          color: "#4A4A4A", // choose your desired color here
        }}
      >
        <span>score:</span>
        <span>{score}</span>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          position: "relative",
          size: "",
        }}
      >
        <div
          style={{
            padding: "20px",
            textAlign: "center",
            fontWeight: "bold",
            color: "#4A4A4A",
          }}
        >
          <img
            src={actorsPair[0].icon}
            alt={actorsPair[0].name}
            style={{
              width: "400px",
              height: "auto",
              borderRadius: "50%",
            }}
          />
          <div>
            {actorsPair[0].name} is {actorsPair[0].property}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <div
            style={{
              backgroundColor: "#030613",
              padding: "0 20px",
              fontWeight: "bold",
              fontSize: "60px",
              color: "#4A4A4A",
            }}
          >
            VS
          </div>
        </div>
        <div
          style={{
            padding: "20px",
            textAlign: "center",
            fontWeight: "bold",
            color: "#4A4A4A",
          }}
        >
          <img
            src={actorsPair[1].icon}
            alt={actorsPair[1].name}
            style={{ width: "400px", height: "auto", borderRadius: "50%" }}
          />
          <div>{actorsPair[1].name} is</div>
          <div>
            <button
              onClick={checkIfMore}
              style={{
                margin: "5px",
                backgroundColor: "#008CBA",
                color: "white",
                border: "none",
                padding: "10px 24px",
                borderRadius: "4px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              More
            </button>
            <button
              onClick={checkIfLess}
              style={{
                margin: "5px",
                backgroundColor: "#f44336",
                color: "white",
                border: "none",
                padding: "10px 24px",
                borderRadius: "4px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              Less
            </button>
          </div>
        </div>
      </div>
      <div
        data-testid="high_score"
        style={{
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "2em",
          margin: "20px 0",
          color: "#4A4A4A", // choose your desired color here
        }}
      >
        <span>high score:</span>
        <span>{highScore}</span>
      </div>
    </div>
  );
};

export default Game;
