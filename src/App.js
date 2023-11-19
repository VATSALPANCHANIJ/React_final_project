import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// admin site all actions
import AdminLayout from './Admin/Adminlayout/AdminLayout';
import Dashboard from './Admin/dashborad';
import AdminProductshow from './Admin/productshow';
// import AdminLogin from './Admin/login';
import Users_detail from './Admin/Userdetail';
import UserProductShown from './Admin/Userproductshow';
import Category from './Admin/CategoryAdd';


// user side all actions
import Home from './Component-1.6/home';
import Layout from './Component/Layout';
import Productshow from './Component-1.6/Productshow';
import Login from './Component-1.6/login';
import Register from './Component-1.6/Resgister';
import Cart from './Component-1.6/Cart';
import Shop from './Component-1.6/Shop';
import Account from './Component-1.6/useraccount';
function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          {/* User side web_page  */}
          <Route path="/" element={<Home />} />
          <Route path="/Product/:type/:id" element={<Productshow />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/Account" element={<Account />} />

        </Route>

        <Route element={<AdminLayout />} >
          {/* admin side Layout */}
          <Route path='/admin/dashborad' element={<Dashboard />} ></Route>
          <Route path='/admin/AdminProductshow' element={<AdminProductshow />} ></Route>
          <Route path='/admin/Users_detail' element={<Users_detail />} ></Route>
          <Route path='/admin/Category' element={<Category />} ></Route>
          <Route path='/admin/Userproductshow/:userId' element={<UserProductShown />} ></Route>
        </Route>
        {/* <Route path='/admin/Login' element={<AdminLogin />} ></Route> */}

      </Routes>
    </>
  );
}

export default App;
