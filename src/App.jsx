import "./App.css";
import Home from "./pages/Home";
import Diary from "./pages/Diary";
import New from "./pages/New";
import Edit from "./pages/Edit";
import { Routes, Route, Link } from "react-router-dom";
import Notfound from "./pages/Notfound";
import Header from "./components/Header";
import Button from "./components/Button";
import useApp from "./hooks/useApp";

function App() {
  const {
    DiaryStateContext,
    DiaryDispatchContext,
    data,
    onCreate,
    onUpdate,
    onDelete,
  } = useApp();

  return (
    <>
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider
          value={{
            onCreate,
            onDelete,
            onUpdate,
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<New />} />
            <Route path="/diary/:id" element={<Diary />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    </>
  );
}

export default App;
