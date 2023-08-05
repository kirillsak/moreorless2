import { render, fireEvent, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Game from "../Components/Game";
import { actors, games } from "../Constant/index";

const mockGameData = [
  {
    name: "Daniel Radcliffe",
    property: "5 foot 5 inches",
    propertyValue: 165.1,
    icon: actors[0].icon,
  },
  {
    name: "Matthew McConaughey",
    property: "6 foot 0 inches",
    propertyValue: 182.88,
    icon: actors[6].icon,
  },
];

describe("Game", () => {
  const mockGetRandomActors = () => [mockGameData[0], mockGameData[1]];

  test("renders correctly", () => {
    render(
      <Router>
        <Game gameData={mockGameData} getRandomActors={mockGetRandomActors} />
      </Router>
    );
    expect(screen.getByText("score:")).toBeInTheDocument();
    expect(screen.getByText("high score:")).toBeInTheDocument();
  });

  test("updates score when user makes correct guesses", () => {
    render(
      <Router>
        <Game gameData={mockGameData} getRandomActors={mockGetRandomActors} />
      </Router>
    );

    fireEvent.click(screen.getByText("More"));
    expect(screen.getByTestId("score").textContent).toBe("score:1");
  });

  test("Game over modal shows up when user picks wrong answers", () => {
    render(
      <Router>
        <Game gameData={mockGameData} getRandomActors={mockGetRandomActors} />
      </Router>
    );

    fireEvent.click(screen.getByText("Less"));
    expect(screen.getByText("You lose!")).toBeInTheDocument();
  });

  test("Allows replay after losing", () => {
    render(
      <Router>
        <Game gameData={mockGameData} getRandomActors={mockGetRandomActors} />
      </Router>
    );

    fireEvent.click(screen.getByText("Less"));
    expect(screen.getByText("You lose!")).toBeInTheDocument();

    fireEvent.click(screen.getByText("Play again?"));
    expect(screen.getByTestId("score").textContent).toBe("score:0");
  });

  test("High score maintained after losing and restarting game", () => {
    render(
      <Router>
        <Game gameData={mockGameData} getRandomActors={mockGetRandomActors} />
      </Router>
    );
    fireEvent.click(screen.getByText("More"));

    fireEvent.click(screen.getByText("More"));
    expect(screen.getByText("You lose!")).toBeInTheDocument();

    fireEvent.click(screen.getByText("Play again?"));
    expect(screen.getByTestId("score").textContent).toBe("score:0");

    expect(screen.getByTestId("high_score").textContent).toBe("high score:1");
  });
});
