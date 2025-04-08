import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import Diary from "./pages/Diary";
import New from "./pages/New";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Notfound from "./pages/Notfound";
import { getEmotionImage } from "./util/get-emotion-image";
import Header from "./components/Header";
import Button from "./components/Button";

function App() {
  const nav = useNavigate();

  const onClickButton = (path) => {
    nav(path);
  };

  return (
    <>
      <Header
        title={"Header"}
        leftChild={<Button text={"left"} />}
        rightChild={<Button text={"right"} />}
      />
      <Button text={"123"} type={"POSITIVE"} onClick={() => {}} />
      <Button text={"123"} type={"NEGATIVE"} onClick={() => {}} />
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
