import "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import EventPage from "./Pages/EventPage/EventPage"

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="homePage" element={<HomePage />} />
      <Route path="/event/:id" element={<EventPage />} />
    </Routes>
  );
}
