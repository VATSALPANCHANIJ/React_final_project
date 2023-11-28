import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './styles.css'
const AdminLayout = () => {
    const navigate = useNavigate();
    const logout = () => {
        navigate('/');
        localStorage.removeItem('checkUserLogin');

        toast.success('successful logout', {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            style: {
                width: '400px',
            },
        });

    }
    return (

        <>
            <div className='d-flex justify-content-between'>
                <div className='col-12 col-md-3'>
                    <div className="sidebar">
                        <div className="admin-sidebar-logo">
                            <img src='https://vegina-store.myshopify.com/cdn/shop/files/logo-1.svg?v=16961549567594775061' alt="logo" />
                        </div>
                        <div className="admin-sidebar-menu">
                            <ul>
                                <li><NavLink to="/admin/dashborad">Dashboard</NavLink></li>
                                <li><NavLink to="/admin/AdminProductshow">Product</NavLink></li>
                                <li><NavLink to="/admin/Users_detail">Users</NavLink></li>
                                <li><NavLink to="/admin/Category">Categories</NavLink></li>
                                <li><NavLink to="/admin/ProductaddAdmin">Product add</NavLink></li>
                                <li><NavLink onClick={() => logout()}>Logout</NavLink></li>
                                <li><NavLink to="/">User_side</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='col-lg-9'>
                    <div className="line">

                    </div>
                    <Outlet />
                </div>
            </div >
        </>

    )
}

export default AdminLayout