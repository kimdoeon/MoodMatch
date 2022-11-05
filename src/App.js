import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
// import styled from "styled-components";
import Main from "./components/Main";
import Draw from "./components/Draw";
import PicAndVid from "./components/PicAndVid";
import Recommend from "./components/Recommend";

// import {
//   Main,
//   Draw,
//   PicAndVid,
//   Tab,
//   Test,
// } from './components';

function App(){
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

// const [page,setPage] = useState("Main");
// const onTabNav = (nav) =>{
//   setPage(nav);
// };
{
  /* <Test/>
      {page == "Main" && (
        <Main/>
      )}
      {page == "Draw" && (
        <Draw/>
      )}
      {page == "PicAndVid" && (
        <PicAndVid/>
      )}
    <Tab onTabNav={onTabNav}/> */
}
