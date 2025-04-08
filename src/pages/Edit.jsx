import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import { DiaryDispatchContext, DiaryStateContext } from "../hooks/useApp";

const Edit = () => {
  const { id } = useParams();
  const nav = useNavigate();
  const { onDelete, onUpdate } = useContext(DiaryDispatchContext);
  const data = useContext(DiaryStateContext);
  const [currentDiaryItem, setCurrentDiaryItem] = useState();

  useEffect(() => {
    const currentDiaryItem = data.find(
      (item) => String(item.id) === String(id)
    );

    if (!currentDiaryItem) {
      window.alert("존재하지 않는 일기입니다.");
      nav("/", { replace: true });
    }

    setCurrentDiaryItem(currentDiaryItem);
  }, [id]);

  const onSubmit = (input) => {
    onUpdate(id, input.createdDate.getTime(), input.emotionId, input.content);
    nav("/", { replace: true });
  };

  const onClickDelete = () => {
    if (window.confirm("일기를 삭제할까요?")) {
      onDelete(id);
      nav("/", { replace: true });
    }
  };

  return (
    <div>
      <Header
        title={"일기 수정하기"}
        leftChild={<Button onClick={() => nav(-1)} text={"< 뒤로 가기"} />}
        rightChild={
          <Button onClick={onClickDelete} text="삭제 하기" type="NEGATIVE" />
        }
      />
      <Editor onSubmit={onSubmit} initData={currentDiaryItem} />
    </div>
  );
};

export default Edit;
