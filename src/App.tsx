import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menus from './pages/Menus';
import MenuForm from './pages/MenuForm';
import MenuDetails from './pages/MenuDetails';
import './styles/app.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menus />} />
        <Route path="/menu/new" element={<MenuForm />} />
        <Route path="/menu/:id" element={<MenuDetails />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;