import "./App.css";
import Home from "./pages/Home";
import Favourites from "./pages/Favourites";
import { Routes, Route, HashRouter } from "react-router-dom";
import { MovieProvider } from "./contexts/MovieContext";
import Navbar from "./components/Navbar";
import TopRated from "./pages/TopRated";
import Upcoming from "./pages/Upcoming";

function App() {
  return (
    <MovieProvider>
      <Navbar />
      <main className="main-content">
        <HashRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favourites" element={<Favourites />} />
            <Route path="/toprated" element={<TopRated />} />
            <Route path="/upcoming" element={<Upcoming />} />
          </Routes>
        </HashRouter>
      </main>
    </MovieProvider>
  );
}

export default App;
