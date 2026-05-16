import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './styles/menuForm.css';
function MenuForm() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    axios.post('https://example.com/api/menus', { name, price, description })
      .then(() => navigate('/'))
      .catch(error => console.error(error));
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