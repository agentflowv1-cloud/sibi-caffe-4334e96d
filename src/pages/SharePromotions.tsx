import React, { useState } from 'react';

function SharePromotions() {
  const [promotion, setPromotion] = useState('');
  const handlePromotionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPromotion(event.target.value);
  };
  const handleSharePromotion = () => {
    alert(`Promotion: ${promotion}`);
  };
  return (
    <div>
      <h1>Share Promotions</h1>
      <input type="text" value={promotion} onChange={handlePromotionChange} placeholder="Promotion" />
      <button onClick={handleSharePromotion}>Share Promotion</button>
    </div>
  );
}
export default SharePromotions;