import "./App.css";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Homepage from "./Components/Homepage";
import BreedInfo from "./Components/BreedInfo";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/info/:id" element={<BreedInfo />} />
      </Routes>
    </Router>
  );
}

export default App;
