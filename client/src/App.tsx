import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageAdsList from './pages/PageAdsList/PageAdsList';
import PageAdsForm from './pages/PageAdsForm/PageAdsForm';
import PageAdsItem from './pages/PageAdsItem/PageAdsItem';
import React from 'react';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageAdsList />} />
        <Route path="/form/:id?" element={<PageAdsForm />} />
        <Route path="/item/:id" element={<PageAdsItem />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
