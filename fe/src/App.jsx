import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Layout from './layout/Layout';
import Home from './pages/home/Home';
import Add from './pages/add/Add';

import Detail from './pages/detail/Detail';
import Wishlist from './pages/wishlist/Wishlist';
import BasketProvider from './context/BasketProvider';
import Basket from './pages/basket/Basket';
function App() {


  return (
    <>
    <BasketProvider>
     <HelmetProvider>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="add" element={<Add />} />
          <Route path="basket" element={<Basket/>} />
          <Route path="wishlist" element={<Wishlist/>} />
          <Route path="detail/:id" element={<Detail />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </HelmetProvider>
    </BasketProvider>
    </>
  )
}

export default App
