import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import NutriTree from "./pages/games/NutriTree";
import Nutriplate from "./pages/games/Nutriplate";
import Community from "./pages/community/Community";
import Articles from "./pages/articles/Articles";
import About from "./pages/about/About";
import Home from "./pages/home/Home";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/article" element={<Articles />} />
        <Route path="/community" element={<Community />} />
        <Route path="/nutritree" element={<NutriTree />} />
        <Route path="/nutriplate" element={<Nutriplate />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
