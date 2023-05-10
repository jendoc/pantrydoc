import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Main from "./components/Main/Main";
import Footer from "./components/Footer";
import Pantry from "./components/Pantry";
import Recipes from "./components/Recipes";

const handleRouteClick = (evt) => {
  evt.preventDefault();
  console.log(this);
};

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Main handleRouteClick={handleRouteClick} />}
          />
          <Route path="/pantry" element={<Pantry />} />
          <Route path="/recipes" element={<Recipes />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
