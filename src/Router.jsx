import "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import EventPage from "./Pages/EventPage/EventPage"

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/event/:id" element={<EventPage />} />
    </Routes>
  );
}
