import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './styles/menuDetails.css';
function MenuDetails() {
  const { id } = useParams();
  const [menu, setMenu] = useState({ id: '', name: '', price: 0, description: '' });
  useEffect(() => {
    axios.get(`https://example.com/api/menus/${id}`)
      .then(response => setMenu(response.data))
      .catch(error => console.error(error));
  }, [id]);
  return (
    <div className="menu-details">
      <h1>{menu.name}</h1>
      <p>Price: {menu.price}</p>
      <p>Description: {menu.description}</p>
    </div>
  );
}
export default MenuDetails;