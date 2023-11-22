import "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import LoginPage from "./Pages/LoginPage/LoginPage";


export function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="loginPage" element={<LoginPage />} />
    </Routes>
  );
}
