import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menus from './pages/Menus';
import MenuForm from './pages/MenuForm';
import MenuDetails from './pages/MenuDetails';
import Home from './pages/Home';
import './styles/app.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu/new" element={<MenuForm />} />
        <Route path="/menu/:id" element={<MenuDetails />} />
        <Route path="/menus" element={<Menus />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;