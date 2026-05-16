import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function MenuForm() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const sampleMenus = [
      { id: '1', name: 'Menu 1', price: 10, description: 'Description 1' },
      { id: '2', name: 'Menu 2', price: 20, description: 'Description 2' }
    ];
    sampleMenus.push({ id: `${sampleMenus.length + 1}`, name, price, description });
    navigate('/');
  };

  return (
    <div className="menu-form">
      <h1>New Menu</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
        </label>
        <label>
          Price:
          <input type="number" value={price} onChange={(event) => setPrice(Number(event.target.value))} />
        </label>
        <label>
          Description:
          <textarea value={description} onChange={(event) => setDescription(event.target.value)} />
        </label>
        <button type="submit">Create Menu</button>
      </form>
    </div>
  );
}
export default MenuForm;