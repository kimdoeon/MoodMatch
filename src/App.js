import React from "react";
import { Routes, Route } from "react-router-dom";

import Main from "./components/Main";
import Draw from "./components/Draw";
import PicAndVid from "./components/PicAndVid";
import Recommend from "./components/Recommend";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/draw" element={<Draw />} />
        <Route path="/picAndVid" element={<PicAndVid />} />
        <Route path="/recommend" element={<Recommend />} />
      </Routes>
    </div>
  );
}

export default App;
