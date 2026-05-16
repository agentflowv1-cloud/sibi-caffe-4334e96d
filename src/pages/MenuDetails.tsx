import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

function MenuDetails() {
  const { id } = useParams();
  const [menu, setMenu] = useState({ id: '', name: '', price: 0, description: '' });

  const sampleMenu = {
    '1': { id: '1', name: 'Menu 1', price: 10, description: 'Description 1' },
    '2': { id: '2', name: 'Menu 2', price: 20, description: 'Description 2' }
  };

  React.useEffect(() => {
    setMenu(sampleMenu[id]);
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