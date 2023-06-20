import React from "react";
import { actors, games } from "../Constant/index";
import Game from "./Game";
import { Link } from "react-router-dom";

const cardContainerStyle = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "space-around",
};

const cardStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  border: "1px solid #ddd",
  borderRadius: "4px",
  padding: "10px",
  margin: "10px",
  boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
  width: "200px",
};

const imgStyle = {
  width: "100%",
  height: "auto",
};

const GameDisplay = ({ games }) => {
  return (
    <div style={cardContainerStyle}>
      {Object.entries(games).map(([gameTitle, gameData]) => (
        <Link
          to={`/${gameTitle}`}
          key={gameTitle}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div key={gameTitle} style={cardStyle}>
            <img src={gameData[6].icon} style={imgStyle} />
            <h2>{gameTitle}</h2>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default GameDisplay;
