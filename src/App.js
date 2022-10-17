import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Auth/Login";
import SignUp from "./Auth/SignUp";
import Error from "./components/Error/Error";
import Home from "./components/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
