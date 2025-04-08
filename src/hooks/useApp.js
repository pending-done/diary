import React, { createContext, useReducer, useRef } from 'react'
export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();
const mockData = [
  {
    id: 1,
    createdDate: new Date("2025-04-02").getTime(),
    emotionId: 1,
    content: "1번 일기",
  },
  {
    id: 2,
    createdDate: new Date("2025-04-05").getTime(),
    emotionId: 2,
    content: "2번 일기",
  },
  {
    id: 3,
    createdDate: new Date("2025-03-05").getTime(),
    emotionId: 3,
    content: "3번 일기",
  },
];

const dispatchType = {
  create: "CREATE",
  update: "UPDATE",
  delete: "DELETE",
};

function reducer(state, action) {
  switch (action.type) {
    case dispatchType.create:
      return [...state, action.data];
    case dispatchType.update:
      return state.map((item) =>
        String(item.id) === String(action.data.id) ? action.data : item
      );
    case dispatchType.delete:
      return state.filter((item) => String(item.id) !== String(action.data.id));
    default:
      return state;
  }
}

const useApp = () => {
  const [data, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(4);

  // 새로운 일기 추가
  const onCreate = (createdDate, emotionId, content) => {
    dispatch({
      type: dispatchType.create,
      data: {
        id: idRef.current++,
        createdDate,
        emotionId,
        content,
      },
    });
  };

  const onUpdate = (id, createdDate, emotionId, content) => {
    dispatch({
      type: dispatchType.update,
      data: {
        id,
        createdDate,
        emotionId,
        content,
      },
    });
  };

  const onDelete = (id) => {
    dispatch({
      type: dispatchType.delete,
      data: {
        id,
      },
    });
  };
  return {
    DiaryStateContext,
    DiaryDispatchContext,
    data,
    onCreate,
    onUpdate,
    onDelete,
  }
}

export default useApp