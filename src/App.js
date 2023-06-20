import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Game from "../src/Components/Game";
import Home from "../src/Components/Home";
import { actors, britishFoods } from "./Constant/index";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Actor's Heights" element={<Game gameData={actors} />} />
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
