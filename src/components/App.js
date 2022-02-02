import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "../pages/home/SignUp";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/cadastro" element={<SignUp />}/>
      </Routes>
    </Router>
  );
}

export default App;
