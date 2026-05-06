import { Routes, Route } from "react-router-dom";

import MainPage from "./component/page/MainPage";
import PostViewPage from "./component/page/PostViewPage";
import PostWritePage from "./component/page/PostWritePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/post/:postId" element={<PostViewPage />} />
      <Route path="/write" element={<PostWritePage />} />
    </Routes>
  );
}

export default App;
