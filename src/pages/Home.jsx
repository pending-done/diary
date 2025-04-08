import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import DiaryList from "../components/DiaryList";
import useHome from "../hooks/useHome";
const Home = () => {
  const { monthlyData, pivotDate, onPrevMonth, onNextMonth } = useHome();

  return (
    <div>
      <Header
        title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`}
        leftChild={<Button text={"<"} onClick={onPrevMonth} />}
        rightChild={<Button text={">"} onClick={onNextMonth} />}
      />
      <DiaryList data={monthlyData} />
    </div>
  );
};

export default Home;
