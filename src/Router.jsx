import "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import EventPage from "./Pages/EventPage/EventPage";
import WelcomePage from "./Pages/WelcomePage/WelcomePage"

export function Router() {
  return (
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="loginPage" element={<LoginPage />} />
      <Route path="/event/:id" element={<EventPage />} />
      <Route path="/" element={<WelcomePage />} />
    </Routes>
  );
}
