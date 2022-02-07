import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LogIn from "../pages/home/LogIn";
import SignUp from "../pages/home/SignUp";
import Transaction from "../pages/transaction/Transaction";
import Wallet from "../pages/wallet/Wallet";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LogIn />} />
        <Route exact path="/cadastro" element={<SignUp />} />
        <Route exact path="/carteira" element={<Wallet />} />
        <Route exact path="/entrada" element={<Transaction pageType="entry" />} />
        <Route exact path="/saida" element={<Transaction pageType="exit" />} />
        <Route exact path="/editar/:transactionType/:transactionId" element={<Transaction pageType="edit" />} />
      </Routes>
    </Router>
  );
}

export default App;
