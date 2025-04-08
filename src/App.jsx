import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import Diary from "./pages/Diary";
import New from "./pages/New";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Notfound from "./pages/Notfound";

function App() {
  const nav = useNavigate();

  const onClickButton = (path) => {
    nav(path);
  };

  return (
    <>
      <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/new"}>New</Link>
        <Link to={"/diary"}>Diary</Link>
      </div>
      <button onclick={() => onClickButton("/new")}>New 페이지</button>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary/:id" element={<Diary />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
}

export default App;
