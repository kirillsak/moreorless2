import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Game from "../src/Components/Game";
import Home from "../src/Components/Home";
import { actors, britishFoods } from "./Constant/index";

function App() {
  const defaultRandomActors = (gameData) => {
    const actor1 = gameData[Math.floor(Math.random() * gameData.length)];
    let actor2 = actor1;
    while (actor2 === actor1) {
      actor2 = gameData[Math.floor(Math.random() * gameData.length)];
    }
    return [actor1, actor2];
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/Actor's Heights"
            element={
              <Game
                gameData={actors}
                getRandomActors={() => defaultRandomActors(actors)}
              />
            }
          />
          <Route
            path="/Top British Foods"
            element={<Game gameData={britishFoods} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
