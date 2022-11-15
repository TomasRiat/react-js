import React from 'react';
import './App.css';
import ItemListContainer from './components/ItemList/ItemListContainer';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import NavBar from './components/NavBar/NavBar';

import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer/>} />
          <Route path="/category/:idCategory" element={<ItemListContainer/>} />
          <Route path="/detail/:idItem" element={<ItemDetailContainer/>} />

          <Route path="*" element={<p>hacer pagina de error 404</p>} />
        </Routes>

        <footer> hacer item de footer</footer>
      </BrowserRouter>
  );
}

export default App;
