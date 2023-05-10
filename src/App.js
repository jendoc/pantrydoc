import "./App.css";
import { Route, Routes } from "react-router-dom";
import Main from "./components/Main/Main";
import Footer from "./components/Footer";

const handleRouteClick = (evt) => {
  evt.preventDefault();
  console.log(this);
};

function App() {
  return (
    <div className="App">
      <>
        <Main handleRouteClick={handleRouteClick} />
        <Footer />
      </>
    </div>
  );
}

export default App;
