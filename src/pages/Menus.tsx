import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './styles/menus.css';
function Menus() {
  const [menus, setMenus] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios.get('https://example.com/api/menus')
      .then(response => setMenus(response.data))
      .catch(error => console.error(error));
  }, []);
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