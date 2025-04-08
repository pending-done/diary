import React, { useState, useContext } from 'react'
import { DiaryStateContext } from './useApp';

const getMonthlyData = (pivotDate, data) => {

  // 현재 월의 시작 시간 (1일 00:00:00)
  const beginTime = new Date(pivotDate.getFullYear(), pivotDate.getMonth(), 1, 0, 0, 0).getTime();

  // 현재 월의 마지막 날 (23:59:59)
  const endTime = new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1, 0, 23, 59, 59).getTime();


  return data.filter((item) => {
    // item.createdDate가 beginTime과 endTime 사이에 있는지 확인
    return beginTime <= item.createdDate && item.createdDate <= endTime;

  });
}

const useHome = () => {
  const data = useContext(DiaryStateContext);
  const [pivotDate, setPivotDate] = useState(new Date());

  const monthlyData = getMonthlyData(pivotDate, data);

  const onPrevMonth = () => {
    setPivotDate(
      new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1)
    )
  }

  const onNextMonth = () => {
    setPivotDate(
      new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1)
    )
  }


  return {
    monthlyData,
    pivotDate,
    onPrevMonth,
    onNextMonth
  }
}

export default useHome