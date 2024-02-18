import Main from "./components/admin/Main";
import Header from "./components/homepage/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Header />} />
          <Route path="/admin" element={<Main />} />
     
    </Routes>
  </BrowserRouter>
  );
}

export default App;
