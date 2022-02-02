import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LogIn from "../pages/home/LogIn";
import SignUp from "../pages/home/SignUp";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LogIn />} />
        <Route exact path="/cadastro" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
