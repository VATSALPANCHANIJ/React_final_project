import React from "react";
import './Header.css';
import { Link, NavLink } from "react-router-dom";
const Header = () => {
    // const totalProductsInCart = cartData.length;
    return (
        <>
            <div>
                {/* top notificationbar start */}
                <section className="top1">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <ul className="top-home">
                                    <li className="top-home-li">
                                        {/* currency start */}
                                        <div className="currency">
                                            <span className="currency-head">currency:</span>
                                            <div className="currency-drop">
                                                <div className="eur">
                                                    <img className="img-fluid" src="image/c-icon1.png" alt />
                                                    <span className="cur-name">EUR</span>
                                                </div>
                                                <ul className="all-currency">
                                                    <li>
                                                        <a href="javascript:void(0)">
                                                            <img className="img-fluid" src="image/c-icon4.png" alt />
                                                            <span className="cur-name">AFN</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:void(0)">
                                                            <img className="img-fluid" src="image/c-icon2.png" alt />
                                                            <span className="cur-name">BDT</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:void(0)">
                                                            <img className="img-fluid" src="image/c-icon3.png" alt />
                                                            <span className="cur-name">CAD</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:void(0)">
                                                            <img className="img-fluid" src="image/c-icon1.png" alt />
                                                            <span className="cur-name">EUR</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:void(0)">
                                                            <img className="img-fluid" src="image/c-icon5.png" alt />
                                                            <span className="cur-name">GBP</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:void(0)">
                                                            <img className="img-fluid" src="image/c-icon6.png" alt />
                                                            <span className="cur-name">INR</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:void(0)">
                                                            <img className="img-fluid" src="image/c-icon7.png" alt />
                                                            <span className="cur-name">SAR</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:void(0)">
                                                            <img className="img-fluid" src="image/c-icon8.png" alt />
                                                            <span className="cur-name">USD</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        {/* currency end */}
                                        {/* mobile search start */}
                                        <div className="r-search">
                                            <a href="#r-search-modal" className="search-popuup" data-bs-toggle="modal"><i className="fa fa-search" /></a>
                                            <div className="modal fade" id="r-search-modal">
                                                <div className="modal-dialog">
                                                    <div className="modal-content">
                                                        <div className="modal-body">
                                                            <div className="m-drop-search">
                                                                <input type="text" name="search" placeholder="Search products, brands or advice" />
                                                                <a href="search.html" className="search-btn"><i className="fa fa-search" /></a>
                                                            </div>
                                                            <button type="button" className="close" data-bs-dismiss="modal"><i className="ion-close-round" /></button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* mobile search end */}
                                    </li>
                                    <li className="top-home-li t-content">
                                        {/* offer text start */}
                                        <div className="top-content">
                                            <p className="top-slogn"><span className="top-c">Free shipping</span> orders from all item</p>
                                        </div>
                                        {/* offer text end */}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                {/* top notificationbar end */}
                {/* header start */}
                <header className="header-area">
                    <div className="header-main-area">
                        <div className="container">
                            <div className="row justify-content-between align-items-center">
                                <div className="col">
                                    <div className="header-main">
                                        {/* logo start */}
                                        <div className="header-element logo">
                                            <a href="index1.html">
                                                <img src="image/logo1.png" alt="logo-image" className="img-fluid" />
                                            </a>
                                        </div>
                                        {/* logo end */}
                                        {/* search start */}
                                        <div className="header-element search-wrap">
                                            <input type="text" name="search" placeholder="Search product." />
                                            <a href="search.html" className="search-btn"><i className="fa fa-search" /></a>
                                        </div>
                                        {/* search end */}
                                        {/* header-icon start */}
                                        <div className="header-element right-block-box">
                                            <ul className="shop-element">
                                                <li className="side-wrap nav-toggler">
                                                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent">
                                                        <span className="line" />
                                                    </button>
                                                </li>
                                                <li className="side-wrap user-wrap">
                                                    <div className="acc-desk">
                                                        <div className="user-icon">
                                                            <Link to={'/Account'} className="user-icon-desk">
                                                                <span><i className="icon-user" /></span>
                                                            </Link>
                                                        </div>
                                                        <div className="user-info">
                                                            <span className="acc-title">Account</span>
                                                            <div className="account-login">
                                                                <Link to='/Register'>Register</Link>
                                                                <Link to='/Login'>Log in</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="acc-mob">
                                                        <a href="account.html" className="user-icon">
                                                            <span><i className="icon-user" /></span>
                                                        </a>
                                                    </div>
                                                </li>
                                                <li className="side-wrap wishlist-wrap">
                                                    <Link to='/admin/dashborad'>

                                                        <a href="" className="header-wishlist">
                                                            <span className="wishlist-icon"><i className="icon-heart" /></span>
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li className="side-wrap cart-wrap">
                                                    <div className="shopping-widget">
                                                        <div className="shopping-cart">
                                                            <a href="javascript:void(0)" className="cart-count">
                                                                <span className="cart-icon-wrap">
                                                                    <Link to='/Cart'>
                                                                        <span className="cart-icon"><i className="icon-handbag" /></span>
                                                                    </Link>
                                                                </span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        {/* header-icon end */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <section className="menu-area">
                            <div className="container">
                                <div className="row">
                                    <div className="col">
                                        <div className="top-menu">
                                            {/* megamenu start */}
                                            <div className="header-element megamenu-content">
                                                <div className="mainwrap">
                                                    <ul className="main-menu">
                                                        <li className="menu-link parent">
                                                            <NavLink to='/' className="link-title">
                                                                <span className="sp-link-title">Home</span>
                                                            </NavLink>
                                                        </li>
                                                        <li className="menu-link parent">
                                                            <NavLink to='/Shop' className="link-title">
                                                                <span className="sp-link-title">Shop</span>
                                                            </NavLink>
                                                        </li>
                                                        <li className="menu-link parent">
                                                            <a href="" className="link-title">
                                                                <span className="sp-link-title">Collection</span>
                                                                <i className="fa fa-angle-down" />
                                                            </a>
                                                            <a href="#collapse-top-banner-menu" data-bs-toggle="collapse" className="link-title link-title-lg">
                                                                <span className="sp-link-title">Collection</span>
                                                                <i className="fa fa-angle-down" />
                                                            </a>
                                                            <ul className="dropdown-submenu banner-menu collapse" id="collapse-top-banner-menu">
                                                                <li className="menu-banner">
                                                                    <a href="#" className="menu-banner-img"><img src="image/menu-banner01.jpg" alt="menu-image" className="img-fluid" /></a>

                                                                </li>
                                                                <li className="menu-banner">
                                                                    <a href="#" className="menu-banner-img"><img src="image/menu-banner02.jpg" alt="menu-image" className="img-fluid" /></a>

                                                                </li>
                                                                <li className="menu-banner">
                                                                    <a href="#" className="menu-banner-img"><img src="image/menu-banner03.jpg" alt="mneu image" className="img-fluid" /></a>

                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li className="menu-link parent">
                                                            <a href="" className="link-title">
                                                                <span className="sp-link-title">Pages</span>
                                                            </a>
                                                        </li>
                                                        <li className="menu-link parent">
                                                            <NavLink to='/Cart'>
                                                                <a href="" className="link-title">
                                                                    <span className="sp-link-title">Cart</span>
                                                                </a>
                                                            </NavLink>
                                                            {/* <NavLink to='/Shop' className="link-title">
                                                                <span className="sp-link-title">Shop</span>
                                                            </NavLink> */}
                                                        </li>
                                                        <li className="menu-link parent">
                                                            <a href="javascript:void(0)" className="link-title">
                                                                <span className="sp-link-title">Feature</span>
                                                            </a>
                                                        </li>
                                                        <li className="menu-link">
                                                            <a href="javascript:void(0)" className="link-title">
                                                                <span className="sp-link-title">Buy vegist <span className="hot">Hot</span></span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            {/* megamenu end */}
                                            {/* hotline start */}
                                            <div className="hotline">
                                                <a href="javascript:void(0)"><img src="image/icon_contact.png" className="img-fluid" alt="image-icon" /></a>
                                                <div className="image-content">
                                                    <span className="hot-l">Hotline:</span>
                                                    <span>0123 456 789</span>
                                                </div>
                                            </div>
                                            {/* hotline end */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </header>
            </div>
        </>
    )
}
export default Header