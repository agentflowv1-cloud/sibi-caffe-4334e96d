import React, { useState } from 'react';

function LinkSocialMedia() {
  const [facebookLink, setFacebookLink] = useState('');
  const [instagramLink, setInstagramLink] = useState('');
  const handleFacebookLinkChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFacebookLink(event.target.value);
  };
  const handleInstagramLinkChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInstagramLink(event.target.value);
  };
  const handleLinkSocialMedia = () => {
    alert(`Facebook: ${facebookLink}, Instagram: ${instagramLink}`);
  };
  return (
    <div>
      <h1>Link Social Media</h1>
      <input type="text" value={facebookLink} onChange={handleFacebookLinkChange} placeholder="Facebook Link" />
      <input type="text" value={instagramLink} onChange={handleInstagramLinkChange} placeholder="Instagram Link" />
      <button onClick={handleLinkSocialMedia}>Link Social Media</button>
    </div>
  );
}
export default LinkSocialMedia;