import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Expenses from "./pages/Expenses";
import CommonLayout from "./components/CommonLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<CommonLayout />}>
        <Route index element={<Home />} />
        <Route path="/expenses" element={<Expenses />} />
      </Route>
    </Routes>
  );
}

export default App;
