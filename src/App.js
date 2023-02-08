import React from 'react';
import { BrowserRouter,  Route, Routes } from 'react-router-dom'


import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import RoutePage from './pages/RoutePage';

function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/route/*" element={<RoutePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
