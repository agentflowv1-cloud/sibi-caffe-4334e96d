import React, { useState } from 'react';

function Reserve() {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [tableSize, setTableSize] = useState('');
  const [reservation, setReservation] = useState({});

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const reservationData = { name, date, time, tableSize };
    setReservation(reservationData);
  };

  return (
    <div>
      <h1>Reserve a Table</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
        </label>
        <br />
        <label>
          Date:
          <input type="date" value={date} onChange={(event) => setDate(event.target.value)} />
        </label>
        <br />
        <label>
          Time:
          <input type="time" value={time} onChange={(event) => setTime(event.target.value)} />
        </label>
        <br />
        <label>
          Table Size:
          <select value={tableSize} onChange={(event) => setTableSize(event.target.value)}>
            <option value="2">2</option>
            <option value="4">4</option>
            <option value="6">6</option>
          </select>
        </label>
        <br />
        <button type="submit">Reserve</button>
      </form>
      {reservation && (
        <div>
          <h2>Reservation Details</h2>
          <p>Name: {reservation.name}</p>
          <p>Date: {reservation.date}</p>
          <p>Time: {reservation.time}</p>
          <p>Table Size: {reservation.tableSize}</p>
        </div>
      )}
    </div>
  );
}
export default Reserve;