import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import Viewer from "../components/Viewer";
import Button from "../components/Button";
import { DiaryStateContext } from "../hooks/useApp";
import useDiary from "../hooks/useDiary";
import { getStringedDate } from "../util/getStringedDate";

const Diary = () => {
  const { id } = useParams();
  const nav = useNavigate();
  const currentDiaryItem = useDiary(id);

  if (!currentDiaryItem) {
    return <div>로딩중</div>;
  }

  const { createdDate, emotionId, content } = currentDiaryItem;
  const title = getStringedDate(new Date(createdDate));

  return (
    <div>
      <Header
        title={`${title} 기록`}
        leftChild={<Button onClick={() => nav(-1)} text={"< 뒤로 가기"} />}
        rightChild={
          <Button
            onClick={() => nav(`/edit/${id}`)}
            text="수정 하기"
            type="POSITIVE"
          />
        }
      />

      <Viewer emotionId={emotionId} content={content} />
    </div>
  );
};

export default Diary;
