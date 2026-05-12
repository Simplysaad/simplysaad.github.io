import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import CivilEngineering from "./Pages/CivilEngineering";
import Developer from "./Pages/Developer";
import Writing from "./Pages/Writing";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/dev" element={<Developer />} />
          <Route path="/writing" element={<Writing />} />
          <Route path="/civil" element={<CivilEngineering />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
