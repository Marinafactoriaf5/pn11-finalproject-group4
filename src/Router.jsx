import "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";

export function Router() {
    return (
        <Routes>
            <Route path= "/" element={<HomePage />} />
        </Routes>
    );
}