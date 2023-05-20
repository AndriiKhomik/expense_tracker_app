import React from "react";
import { useGetExpensesQuery } from "./redux/features/expense/expenseSlice";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Expenses from "./pages/Expenses";
import CommonLayout from "./components/CommonLayout";

function App() {
  const { data } = useGetExpensesQuery();
  console.log(data);

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
