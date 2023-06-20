import React from "react";

const GameOverModal = ({ isGameOver, playAgain }) => {
  if (!isGameOver) return null;

  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        textAlign: "center",
        transform: "translate(-50%, -50%)",
        backgroundColor: "#030613",
        padding: "20px",
        borderRadius: "20px",
        textAlign: "center",
        zIndex: 9999,
        width: "50%",
        height: "50%",
      }}
    >
      <p style={{ color: "white", fontSize: "90px" }}>You lose!</p>
      <button
        onClick={playAgain}
        style={{
          margin: "5px",
          backgroundColor: "#008CBA",
          color: "white",
          border: "none",
          padding: "10px 24px",
          borderRadius: "4px",
          cursor: "pointer",
          fontWeight: "bold",
          padding: "10px 20px", // Increase button size
          fontSize: "90px", // Increase button text size
        }}
      >
        Play again?
      </button>
    </div>
  );
};

export default GameOverModal;
