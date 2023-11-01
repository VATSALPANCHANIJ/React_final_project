import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Component-1.6/home';
import Layout from './Component/Layout';
import Productshow from './Component-1.6/Productshow';
import Login from './Component-1.6/login';
import Register from './Component-1.6/Resgister';
import Cart from './Component-1.6/Cart';
import Shop from './Component-1.6/Shop';
function App() {
  return (
    <>
      {/* User side web_page  */}
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/Product/:type/:id" element={<Productshow />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Shop" element={<Shop />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
