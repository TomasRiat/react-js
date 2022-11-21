import React from 'react';
import './App.css';
import ItemListContainer from './components/ItemList/ItemListContainer';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import NavBar from './components/NavBar/NavBar';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import DetailCart from './components/DetailCart/DetailCart';
import { CartContextProvider } from './context/cartContext';

function App() {
  return (
    <div className="app-container">
      <CartContextProvider>
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path="/" element={<ItemListContainer/>} />
            <Route path="/category/:idCategory" element={<ItemListContainer/>} />
            <Route path="/detail/:idItem" element={<ItemDetailContainer/>} />
            <Route path="/cart" element={<DetailCart/>} />

            <Route path="*" element={<p>ERROR 404: esta pagina no existe</p>} />
          </Routes>

          <Footer/>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
