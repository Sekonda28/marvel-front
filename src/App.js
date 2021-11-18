import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Personnages from "./pages/Personnages";
import Comics from "./pages/Comics";
import Favoris from "./pages/Favoris";
import ComicsByPersonnage from "./pages/ComicsByPersonnage";

const App = () => {
  return (
    <div className = "App">
    <Router>
      <Header />      
      <Routes>
        <Route path = "/comics/:characterId" element = {<ComicsByPersonnage />}></Route>
      </Routes>
      <Routes>
        <Route path="/comics" element={<Comics />}></Route>
      </Routes>
      <Routes>
        <Route path="/favorites" element={<Favoris />}></Route>
      </Routes>
      <Routes>
        <Route path="/" element={<Personnages />}></Route>
      </Routes>

      <Footer />
    </Router></div>
  );
};

export default App;
