import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NewsList from './pages/NewsList';
import NewsDetail from './pages/NewsDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NewsList />} />
        <Route path="/news/:category/:id" element={<NewsDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;