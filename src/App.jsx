import Header from "./components/homepage/Home";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Header />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
     
    </Routes>
  </BrowserRouter>
  );
}

export default App;
