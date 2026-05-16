import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Menus() {
  const [menus, setMenus] = useState([
    { id: '1', name: 'Menu 1', price: 10, description: 'Description 1' },
    { id: '2', name: 'Menu 2', price: 20, description: 'Description 2' }
  ]);
  const navigate = useNavigate();

  const handleNewMenu = () => navigate('/menu/new');

  return (
    <div className="menus">
      <h1>Menus</h1>
      <button onClick={handleNewMenu}>New Menu</button>
      <ul>
        {menus.map(menu => (
          <li key={menu.id}>{menu.name}</li>
        ))}
      </ul>
    </div>
  );
}
export default Menus;