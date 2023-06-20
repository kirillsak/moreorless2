import React from "react";
import { Link } from "react-router-dom";
import Game from "./Game";
import GameDisplay from "./GameDisplay";
import { actors, games } from "../Constant/index";

const homeStyle = {
  backgroundColor: "#030613",
  color: "white",
  minHeight: "90vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center", // align items to the start (left for row, top for column)
  justifyContent: "center", // justify content to the start (top for column, left for row)
  fontSize: "calc(10px + 2vmin)",
  textAlign: "center",
  padding: "20px", // add some padding so it doesn't stick to the very edge
};

const titleStyle = {
  fontSize: "2em",
  margin: "30px",
  fontWeight: "bold",
};

const rotateStyle = {
  color: "white",
  display: "inline-block",
  transform: "rotate(90deg)",
};
const titleContainerStyle = {
  backgroundColor: "#030613",
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  gap: "20px",
  fontSize: "30px",
  fontWeight: "bold",
  padding: "10px",
};

const Home = () => {
  return (
    <div>
      <div style={titleContainerStyle}>
        <div style={{ color: "red", fontSize: "52px" }}>MORE</div>
        <div style={rotateStyle}>OR</div>
        <div style={{ color: "#320095" }}>LESS</div>
        <div style={{ color: "#FF8700", fontSize: "60px" }}>HOLLY</div>
        <div style={{ color: "#FF8700", fontSize: "20px" }}>EDITION</div>
      </div>
      <div style={homeStyle}>
        <div style={titleStyle}>Choose A Game To Play!</div>
        <GameDisplay games={games} />
      </div>
    </div>
  );
};

export default Home;
