import "./App.css";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Homepage from "./Components/Homepage";
import BreedInfo from "./Components/BreedInfo";
import MostSearched from "./Components/MostSearched";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/info/:id" element={<BreedInfo />} />
        <Route path="/mostsearched" element={<MostSearched />} />
      </Routes>
    </Router>
  );
}

export default App;
