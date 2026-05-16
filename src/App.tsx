import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import LinkSocialMedia from './pages/LinkSocialMedia';
import PostUpdates from './pages/PostUpdates';
import SharePromotions from './pages/SharePromotions';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/link-social-media" element={<LinkSocialMedia />} />
        <Route path="/post-updates" element={<PostUpdates />} />
        <Route path="/share-promotions" element={<SharePromotions />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;