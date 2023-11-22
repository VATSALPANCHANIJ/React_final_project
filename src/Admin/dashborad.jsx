import React from 'react';
import './Dashboard.css'; // Assuming you have a separate CSS file for styles
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
const Dashboard = () => {
    const navigate = useNavigate()
    const [usercnt, setUserCnt] = useState(0);
    const [categorycnt, setCategory] = useState(0);
    const [productcnt, setProduct] = useState(0);
    const [slidercnt, setSlider] = useState(0);
    useEffect(() => {
        // let admin = JSON.parse(localStorage.getItem('checkAdminLogin'));
        // if (!admin) {
        //     navigate('/Login');
        // }
        axios.get(`http://localhost:3030/User_Resigeters_data`).then((res) => {
            setUserCnt(res.data.length)
        }).catch((err) => {
            console.log(err);
            return false
        });
        axios.get(`http://localhost:3030/catogery`).then((res) => {
            setCategory(res.data.length)
        }).catch((err) => {
            console.log(err);
            return false
        });
        axios.get(`http://localhost:3030/AllProduct_show_shop_page`).then((res) => {
            setProduct(res.data.length)
        }).catch((err) => {
            console.log(err);
            return false
        });
        axios.get(`http://localhost:3030/Slider_part`).then((res) => {
            setSlider(res.data.length)
        }).catch((err) => {
            console.log(err);
            return false
        });

    }, []);

    return (
        <div className="dashboard-container">
            <Link to={'/admin/Users_detail'}>
                <div className="dashboard-box">
                    <h1>Users</h1>
                    <span>{usercnt}</span>
                </div>
            </Link>
            <Link to={'/admin/Category'}>
                <div className="dashboard-box">
                    <h1>Category</h1>
                    <span>{categorycnt}</span>
                </div>
            </Link>
            <Link to={'/admin/AdminProductshow'}>
                <div className="dashboard-box">
                    <h1>Products</h1>
                    <span>{productcnt}</span>
                </div>
            </Link>
            <div className="dashboard-box">
                <h1>Slider</h1>
                <span>{slidercnt}</span>
            </div>
        </div>
    )
}

export default Dashboard;
