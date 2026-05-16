import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Welcome to our restaurant!</h1>
      <p>Reserve a table by clicking the link below.</p>
      <Link to="/reserve">Reserve a Table</Link>
    </div>
  );
}

export default Home;