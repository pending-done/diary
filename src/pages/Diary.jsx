import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import Viewer from "../components/Viewer";
import Button from "../components/Button";
import { DiaryStateContext } from "../hooks/useApp";

const Diary = () => {
  const { id } = useParams();
  const nav = useNavigate();

  return (
    <div>
      <Header
        title="yyy"
        leftChild={<Button onClick={() => nav(-1)} text={"< 뒤로 가기"} />}
        rightChild={
          <Button
            onClick={() => nav(`/edit/${id}`)}
            text="수정 하기"
            type="POSITIVE"
          />
        }
      />

      <Viewer></Viewer>
    </div>
  );
};

export default Diary;
