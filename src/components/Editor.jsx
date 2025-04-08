import React, { useEffect, useState } from "react";
import "./Editor.css";
import EmotionItem from "./EmotionItem";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const emotionList = [
  {
    emotionId: 1,
    emotionName: "완전좋음",
  },
  {
    emotionId: 2,
    emotionName: "좋음",
  },
  {
    emotionId: 3,
    emotionName: "보통",
  },
  {
    emotionId: 4,
    emotionName: "별로",
  },
  {
    emotionId: 5,
    emotionName: "끔찍함",
  },
];

const getStringedDate = (targetDate) => {
  let year = targetDate.getFullYear();
  let month = targetDate.getMonth() + 1;
  let date = targetDate.getDate();

  if (month < 10) {
    month = `0${month}`;
  }

  if (date < 10) {
    date = `0${date}`;
  }

  return `${year}-${month}-${date}`;
};

const Editor = ({ initData, onSubmit }) => {
  const [input, setInput] = useState({
    createdDate: new Date(),
    emotionId: 3,
    content: "",
  });

  const nav = useNavigate();

  useEffect(() => {
    if (initData) {
      console.log("initData", initData);
      setInput({
        ...initData,
        createdDate: new Date(Number(initData.createdDate)),
      });
    }
  }, [initData]);

  const onChangeInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === "createdDate") {
      value = new Date(value);
    }

    setInput({
      ...input,
      [name]: value,
    });
  };

  const onClickSubmitButton = () => {
    onSubmit(input);
  };

  return (
    <div className="Editor">
      <section className="date_section">
        <h4>오늘의 날짜</h4>
        <input
          type="date"
          value={getStringedDate(input.createdDate)}
          name="createdDate"
          onChange={onChangeInput}
        />
      </section>
      <section className="emotion_section">
        <h4>오늘의 감정</h4>
        <div className="emotion_list_wrapper">
          {emotionList.map((item) => (
            <EmotionItem
              key={item.emotionId}
              {...item}
              isSelected={item.emotionId === input.emotionId}
              onClick={() => {
                const e = {
                  target: {
                    name: "emotionId",
                    value: item.emotionId,
                  },
                };

                onChangeInput(e);
              }}
            />
          ))}
        </div>
      </section>
      <section className="content_section">
        <h4>오늘의 일기</h4>
        <textarea
          placeholder="오늘 어땠나요?"
          name="content"
          value={input.content}
          onChange={onChangeInput}
        ></textarea>
      </section>
      <section className="button_section">
        <Button text={"취소하기"} onClick={() => nav(-1)} />
        <Button
          text={"작성완료"}
          type="POSITIVE"
          onClick={onClickSubmitButton}
        />
      </section>
    </div>
  );
};

export default Editor;
