import React from "react";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import TodoApp from "./components/TodoApp";

export const App = () => {
  return (
    <HashRouter>
      <div className="todoapp">
        <Routes>
          <Route path="/" element={<TodoApp />} />
          <Route path="/active" element={<TodoApp />} />
          <Route path="/completed" element={<TodoApp />} />
          <Route path="*" element={<Navigate to={"/"} />} />
        </Routes>
      </div>
    </HashRouter>
  );
};
