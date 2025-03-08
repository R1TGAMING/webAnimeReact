import React from "react";
import Home from "./pages/Home";
import DetailAnime from "./pages/DetailAnime";
import SearchAnime from "./pages/SearchAnime";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App(props) {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/anime/:id" element={<DetailAnime />} />
        <Route path="/anime/search" element={<SearchAnime />} />
      </Routes>
    </Router>
  );
}

export default App;
