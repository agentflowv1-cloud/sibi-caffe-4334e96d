import React, { useState } from 'react';

function PostUpdates() {
  const [update, setUpdate] = useState('');
  const handleUpdateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUpdate(event.target.value);
  };
  const handlePostUpdate = () => {
    alert(`Update: ${update}`);
  };
  return (
    <div>
      <h1>Post Updates</h1>
      <input type="text" value={update} onChange={handleUpdateChange} placeholder="Update" />
      <button onClick={handlePostUpdate}>Post Update</button>
    </div>
  );
}
export default PostUpdates;