import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Favorites from "../Pages/Favorites/Favorites";
import HomePage from "../Pages/HomePage/HomePage";


export default function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/Favorites" element={<Favorites />} />
            </Routes>
        </BrowserRouter>
    )
}