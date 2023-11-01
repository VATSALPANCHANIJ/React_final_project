import React, { useEffect, useState } from "react";
import axios from "axios";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { ProgressBar } from "react-loader-spinner";
import { Link, NavLink, useLocation, useParams } from "react-router-dom";
import Loader from "./Loader";

const Home = () => {
    const [recentnews, setRecentNews] = useState([]);
    const [featured_products, setfeatured_products] = useState([]);
    const [slider, setSlider] = useState([]);
    const [fruits, setfruits] = useState([]);
    const [bread_Products, setBread_Products] = useState([]);
    const [fresh_fruits, setFresh_fruits] = useState([]);
    const [juicebottle, setJuicebottle] = useState([]);
    // const [loading, setLoading] = useState(true);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate an asynchronous action (e.g., fetching data from an API)
        setTimeout(() => {
            setLoading(false);
        }, 5000);
    }, []);
    // 1
    const fetch_slider = async () => {
        try {
            const res = await axios.get(`http://localhost:3030/Slider_part`);
            setSlider(res.data);
        } catch (err) {
            console.log("Error fetching Slider part", err);
        }

    }
    // 2
    const fetch_fruits_products = async () => {
        try {
            const res = await axios.get(`http://localhost:3030/Our_Furits_section`);
            setfruits(res.data);

        } catch (error) {
            console.log("Error fetching Fruits section", error);
        }
    }
    // 3
    const fetch_Featured_products = () => {
        axios.get(`http://localhost:3030/Featured_products`)
            .then((res) => {
                setfeatured_products(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }
    // 4
    const fetch_Bread_products = async () => {
        try {
            const res = await axios.get(`http://localhost:3030/Bread_Products_section`);
            setBread_Products(res.data);
        } catch (error) {
            console.log("Error fetching Bread section", error);
        }
    }
    // 5
    const fetch_fruits_slider = async () => {
        try {
            const res = await axios.get(`http://localhost:3030/Fruit_juicy`);
            setFresh_fruits(res.data)

        } catch (error) {
            console.log("Error fetching fruits slider section", error);
        }
    }
    // 6
    const fetch_fruits_juice_bottle = async () => {
        try {
            const res = await axios.get(`  http://localhost:3030/Juice_bottle`);
            setJuicebottle(res.data)
        } catch (error) {
            console.log("Error fetching fruits bottle section", error);
        }
    }
    // 7
    const fetch_RecentNews = async () => {
        try {
            const response = await axios.get(`http://localhost:3030/RecentNews`);
            setRecentNews(response.data);
        } catch (error) {
            console.error("Error fetching recent news:", error);
        } finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        fetch_slider();
        fetch_fruits_products();
        fetch_Featured_products();
        fetch_Bread_products();
        fetch_fruits_slider();
        fetch_fruits_juice_bottle();
        fetch_RecentNews();
    }, []);

    return (
        <div className="sweet-loading" style={{ backgroundColor: loading ? '#F5AB1E' : '#FFFFFF', minHeight: '100vh' }}>

            {loading ? (
                <Loader />
            ) : (
                <>{/* Slider part */}
                    <section className="home-slider-6">
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <div className="slider-banner">
                                        <div className="home-slider-main-6">
                                            <div className="home6-slider">

                                                <OwlCarousel
                                                    className="owl-carousel owl-theme"
                                                    loop
                                                    margin={15}
                                                    nav
                                                    items={1}
                                                >
                                                    {slider.map((val) => {
                                                        return (
                                                            <div className="items">
                                                                <div className="img-back" style={{ backgroundImage: `url(${val.img})` }}>
                                                                    <div className="h-s-content">
                                                                        <span className="slider-name">{val.selling_type}</span>
                                                                        <h1>{val.Product_Name}<br /> {val.Price}</h1>
                                                                        <a href="grid-list.html" className="btn btn-style1"><span>Shop now</span></a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                    }
                                                </OwlCarousel>

                                            </div>
                                        </div>
                                        <div className="top-banner">
                                            <div className="right-banner">
                                                <a href="grid-list.html" className="r-banner">
                                                    <img src="image/banner23.jpg" className="img-fluid" alt="banner-image" />
                                                </a>
                                                <div className="banner-r-content1">
                                                    <span className="banner-sale">Fresh vegetable</span>
                                                    <h2>Veg chilli <br /><span className="banner-off">start from $9</span></h2>
                                                    <a href="grid-list.html" className="banner-shop1">Shop now <i className="fa fa-angle-right" /></a>
                                                </div>
                                            </div>
                                            <div className="right-banner">
                                                <a href="grid-list.html" className="r-banner">
                                                    <img src="image/banner24.jpg" className="img-fluid" alt="banner-image" />
                                                </a>
                                                <div className="banner-r-content2">
                                                    <span>Fried rice</span>
                                                    <h2>Served with<br /> chili fish sauce</h2>
                                                    <a href="grid-list.html" className="banner-shop2">Shop now <i className="fa fa-angle-right" /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* vegetable Product */}
                    <section className="featured-product-6  section-b-padding">
                        <div className="container-fulid">
                            <div className="row">
                                <div className="col-12">
                                    <div className="section-title mb-4 mt-2">
                                        <h2>Featured products</h2>
                                    </div>

                                    <OwlCarousel
                                        className="owl-carousel"
                                        loop
                                        margin={15}
                                        nav
                                        items={5}
                                    >
                                        {featured_products.map((val) => (
                                            <div className="items col-12 py-1" key={val.id}>
                                                <div className="tred-pro">
                                                    <div className="tr-pro-img">
                                                        <Link to={'/Product/${`Featured_products`}/${val.id}'}>
                                                            <img className="img-fluid" src={val.Image_1} alt="pro-img1" />
                                                            <img className="img-fluid additional-image" src={val.img_2} alt="additional image" />
                                                        </Link>
                                                    </div>
                                                    <div className="Pro-lable">
                                                        <span className="p-text">New</span>
                                                    </div>
                                                    <div className="pro-icn">
                                                        <div className="row ">
                                                            <Link to={``} className="icn icns"><i className="fa fa-heart" /></Link>
                                                            <Link to={`/Cart`} className="icn"><i className="fa fa-shopping-bag" /></Link>
                                                            <Link to={`/Product/${`Featured_products`}/${val.id}`} href="javascript:void(0)" className="icn"><i className="fa fa-eye" /></Link>
                                                        </div>
                                                    </div>

                                                </div>
                                                <div className="caption">
                                                    <h3><a href="product-style-6.html">{val.Product_Name}</a></h3>
                                                    <div className="rating">
                                                        <i className="fa fa-star c-star" />
                                                        <i className="fa fa-star c-star" />
                                                        <i className="fa fa-star c-star" />
                                                        <i className="fa fa-star-o" />
                                                        <i className="fa fa-star-o" />
                                                    </div>
                                                    <div className="pro-price">
                                                        <span className="new-price">{val.Price}</span>
                                                        <span className="old-price"><del>{val.Old_Price}</del></span>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </OwlCarousel>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* fresh bread section no db*/}
                    <section className="home-banner-area section-b-padding py-3 mt-4">
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <div className="banner-block">
                                        <ul className="banner-ul">
                                            <li className="banner-li">
                                                <div className="banner-area">
                                                    <a href="grid-list.html" className="banner-image">
                                                        <img src="image/home-14/banner1.png" className="img-fluid" alt />
                                                    </a>
                                                    <div className="banner-content">
                                                        <span className="subtitle">Food taste</span>
                                                        <h4 className="title">
                                                            <span>Fresh bread</span>
                                                            <span>bakery shop</span>
                                                        </h4>
                                                        <a href="grid-list.html" className="banner-btn">
                                                            <span className="text">Shop now</span>
                                                            <span className="icon"><i className="fa fa-angle-right" /></span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="banner-li">
                                                <div className="banner-area">
                                                    <a href="grid-list.html" className="banner-image">
                                                        <img src="image/home-14/banner3.png" className="img-fluid" alt />
                                                    </a>
                                                    <div className="banner-content">
                                                        <span className="subtitle">Only today</span>
                                                        <h4 className="title">
                                                            <span>100% fresh &amp; hand</span>
                                                            <span>hand made</span>
                                                        </h4>
                                                        <a href="grid-list.html" className="banner-btn">
                                                            <span className="text">Shop now</span>
                                                            <span className="icon"><i className="fa fa-angle-right" /></span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="banner-li">
                                                <div className="banner-area">
                                                    <a href="grid-list.html" className="banner-image">
                                                        <img src="image/home-14/banner2.png" className="img-fluid" alt />
                                                    </a>
                                                    <div className="banner-content">
                                                        <span className="subtitle">Premium quality</span>
                                                        <h4 className="title">
                                                            <span>Bread &amp; sweet</span>
                                                            <span>bakery shop</span>
                                                        </h4>
                                                        <a href="grid-list.html" className="banner-btn">
                                                            <span className="text">Shop now</span>
                                                            <span className="icon"><i className="fa fa-angle-right" /></span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* teb product start */}
                    <section className="home-product-slider section-b-padding">
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <div className="section-capture mt-4">
                                        <div className="section-title">
                                            <h2>Bread products</h2>
                                        </div>
                                    </div>
                                    <div className="pro-slider-area">
                                        <div className="swiper-container" id="trending-pro-14">
                                            <div className="swiper-wrapper">
                                                <div className="swiper-slide">
                                                    <OwlCarousel
                                                        className="owl-carousel"
                                                        loop
                                                        margin={15}
                                                        nav
                                                        items={4}
                                                    >
                                                        {bread_Products.map(val => (
                                                            <div className="tab-product" key={val.id}>
                                                                <div className="tred-pro">
                                                                    <div className="tr-pro-img">
                                                                        <a href="product-style-3.html">
                                                                            <img src={val.Image_1} alt="pro-img1" className="img-fluid" />
                                                                            <img src={val.Image_2} alt="additional image" className="img-fluid additional-image" />
                                                                        </a>
                                                                    </div>
                                                                    {val.Dis_count && (
                                                                        <div className="Pro-lable">
                                                                            <span className="p-discount">{val.Dis_count}</span>
                                                                        </div>
                                                                    )}
                                                                    <div className="pro-icn">
                                                                        <div className="row ">
                                                                            <Link to={``} className="icn icns"><i className="fa fa-heart" /></Link>
                                                                            <Link to={`/Cart`} className="icn"><i className="fa fa-shopping-bag" /></Link>
                                                                            <Link to={`/Product/${`Bread_Products_section`}/${val.id}`} className="icn"><i className="fa fa-eye" /></Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="tab-caption">
                                                                    <h3><a href="product-style-3.html">{val.Product_Name}</a></h3>
                                                                    <div className="rating">
                                                                        <i className="fa fa-star c-star" />
                                                                        <i className="fa fa-star c-star" />
                                                                        <i className="fa fa-star c-star" />
                                                                        <i className="fa fa-star-o" />
                                                                        <i className="fa fa-star-o" />
                                                                    </div>
                                                                    <div className="pro-price">
                                                                        <span className="new-price">{val.Price}</span>
                                                                        {val.Old_Price && <span className="old-price"><del>{val.Old_Price}</del></span>}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </OwlCarousel>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="swiper-buttons">
                                            <button className="pro-14-swiper-prev"><i className="fa fa-angle-left" /></button>
                                            <button className="pro-14-swiper-next"><i className="fa fa-angle-right" /></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* <!-- teb product end --> */}
                    {/* fruits section */}
                    <section className="home-tab-product section-b-padding">
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <div className="pro-tab">
                                        <div className="section-title mt-5 mb-4">
                                            <h2>Our fruits Products</h2>
                                        </div>
                                        <ul className="nav nav-tabs">
                                            <li className="nav-item">
                                                <a className="nav-link active" data-bs-toggle="tab" href="#home">New Fruits</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" data-bs-toggle="tab" href="#profile">Special product</a>
                                            </li>

                                        </ul>
                                        <div className="tab-content tab-pro-slider">
                                            <div className="tab-pane fade show active" id="home">
                                                <div className="product-tab swiper-container">
                                                    <div className="swiper-wrapper">
                                                        <div className="swiper-slide">
                                                            <OwlCarousel
                                                                className="owl-carousel"
                                                                loop
                                                                margin={10}
                                                                nav
                                                                items={5}
                                                            >
                                                                {
                                                                    fruits.map((val) => {
                                                                        return (

                                                                            <div class="tab-product">
                                                                                <div>
                                                                                    <div className="tred-pro">
                                                                                        <div className="tr-pro-img">
                                                                                            <Link to={`/Product/${val.id}`}>
                                                                                                <img src={val.Image_1} alt="pro-img1" className="img-fluid" />
                                                                                            </Link>
                                                                                            <Link to={`/Product/${val.id}`}>
                                                                                                <img src={val.Image_2} alt="additional image" className="img-fluid additional-image" />
                                                                                            </Link>
                                                                                        </div>

                                                                                        <div className="Pro-lable">
                                                                                            <span className="p-discount">{val.Dis_count}</span>
                                                                                        </div>
                                                                                        <div className="pro-icn">
                                                                                            <div className="row ">
                                                                                                <Link to={``} className="icn icns"><i className="fa fa-heart" /></Link>
                                                                                                <Link to={`/Cart`} className="icn"><i className="fa fa-shopping-bag" /></Link>
                                                                                                <Link to={`/Product/${`Our_Furits_section`}/${val.id}`} className="icn"><i className="fa fa-eye" /></Link>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="tab-caption">
                                                                                        <h3><a href="product-style-3.html">{val.Product_Name}</a></h3>
                                                                                        <div className="rating">
                                                                                            <i className="fa fa-star b-star" />
                                                                                            <i className="fa fa-star b-star" />
                                                                                            <i className="fa fa-star-o" />
                                                                                            <i className="fa fa-star-o" />
                                                                                            <i className="fa fa-star-o" />
                                                                                        </div>
                                                                                        <div className="pro-price">
                                                                                            <span className="new-price">{val.Price}</span>
                                                                                            <span className="old-price"><del>{val.old_price}</del></span>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        )
                                                                    })
                                                                }
                                                            </OwlCarousel>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>
                    </section>
                    {/* jucie section */}
                    {/* check section */}
                    <div className="section-title">
                        <h2>Our Fresh Juice</h2>
                    </div>
                    <section className="home-slider-area">
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <div className="slider-banner">
                                        <div className="main-slider">
                                            <div className="slider-area">
                                                <div className="swiper-container" id="home-slider-16">
                                                    <div className="swiper-wrapper">
                                                        <div className="swiper-slide">
                                                            {/* slider */}
                                                            <OwlCarousel
                                                                className="owl-carousel"
                                                                loop
                                                                margin={0}
                                                                nav
                                                                items={1}
                                                            >
                                                                {fresh_fruits.map((val) => {
                                                                    console.log("done");  // Move this line here
                                                                    return (
                                                                        <div className="slider-block" key={val.id}>
                                                                            <a href="grid-list.html" className="slider-img">
                                                                                <img src={val.Image_1} className="img-fluid" alt="image" />
                                                                            </a>
                                                                            <div className="slider-content">
                                                                                <div className="slider-text">
                                                                                    <span className="subtitle">{val.Product_Name}</span>
                                                                                    <h2 className="title">
                                                                                        <span>{val.Name_1}</span>
                                                                                        <span>{val.Name_2}</span>
                                                                                    </h2>
                                                                                    <a href="grid-list.html" className="btn-style3">Shop now</a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    );
                                                                })}
                                                            </OwlCarousel>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="swiper-pagination" />
                                            </div>
                                        </div>
                                        <div className="slider-side-product">
                                            <div className="swiper-container" id="home-slider-side-pro">
                                                <div className="swiper-wrapper">
                                                    <div class="swiper-slide">
                                                        <OwlCarousel
                                                            className="owl-carousel"
                                                            loop
                                                            margin={10}
                                                            nav
                                                            items={1}
                                                        >{juicebottle.map((val) => {
                                                            return (
                                                                <div className="tab-product">
                                                                    <div className="tred-pro">
                                                                        <div className="tr-pro-img">
                                                                            <a href="product-style-3.html">
                                                                                <img src={val.Image_1} alt="pro-img1" className="img-fluid" />
                                                                                <img src={val.Image_2} alt="additional image" className="img-fluid additional-image" />
                                                                            </a>
                                                                        </div>
                                                                        <div className="Pro-lable">
                                                                            <span className="p-discount">{val.Dis_count}</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="tab-caption">
                                                                        <h3><a href="product-style-3.html">{val.Product_Name}</a></h3>
                                                                        <div className="rating">
                                                                            <i className="fa fa-star c-star" />
                                                                            <i className="fa fa-star c-star" />
                                                                            <i className="fa fa-star c-star" />
                                                                            <i className="fa fa-star-o" />
                                                                            <i className="fa fa-star-o" />
                                                                        </div>


                                                                    </div>
                                                                </div>
                                                            )
                                                        })}
                                                            <div className="swiper-slide">
                                                            </div>
                                                        </OwlCarousel>
                                                    </div>
                                                </div>
                                                <div className="swiper-wrapper">
                                                    <div class="swiper-slide">
                                                        <OwlCarousel
                                                            className="owl-carousel"
                                                            loop
                                                            margin={10}
                                                            nav
                                                            items={1}
                                                        >{juicebottle.map((val) => {
                                                            return (
                                                                <div className="tab-product">
                                                                    <div className="tred-pro">
                                                                        <div className="tr-pro-img">
                                                                            <a href="product-style-3.html">
                                                                                <img src={val.Image_1} alt="pro-img1" className="img-fluid" />
                                                                                <img src={val.Image_2} alt="additional image" className="img-fluid additional-image" />
                                                                            </a>
                                                                        </div>
                                                                        <div className="Pro-lable">
                                                                            <span className="p-discount">{val.Dis_count}</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="tab-caption">
                                                                        <h3><a href="product-style-3.html">{val.Product_Name}</a></h3>
                                                                        <div className="rating">
                                                                            <i className="fa fa-star c-star" />
                                                                            <i className="fa fa-star c-star" />
                                                                            <i className="fa fa-star c-star" />
                                                                            <i className="fa fa-star-o" />
                                                                            <i className="fa fa-star-o" />
                                                                        </div>
                                                                        <div className="pro-price">
                                                                            <span className="new-price">{val.Price}</span>
                                                                            <span className="old-price"><del>{val.Old_Price}</del></span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            )
                                                        })}
                                                            <div className="swiper-slide">
                                                            </div>
                                                        </OwlCarousel>
                                                    </div>
                                                </div>
                                                <div className="swiper-wrapper">
                                                    <div class="swiper-slide">
                                                        <OwlCarousel
                                                            className="owl-carousel"
                                                            loop
                                                            margin={10}
                                                            nav
                                                            items={1}
                                                        >{juicebottle.map((val) => {
                                                            return (
                                                                <div className="tab-product">
                                                                    <div className="tred-pro">
                                                                        <div className="tr-pro-img">
                                                                            <a href="product-style-3.html">
                                                                                <img src={val.Image_1} alt="pro-img1" className="img-fluid" />
                                                                                <img src={val.Image_2} alt="additional image" className="img-fluid additional-image" />
                                                                            </a>
                                                                        </div>
                                                                        <div className="Pro-lable">
                                                                            <span className="p-discount">{val.Dis_count}</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="tab-caption">
                                                                        <h3><a href="product-style-3.html">{val.Product_Name}</a></h3>
                                                                        <div className="rating">
                                                                            <i className="fa fa-star c-star" />
                                                                            <i className="fa fa-star c-star" />
                                                                            <i className="fa fa-star c-star" />
                                                                            <i className="fa fa-star-o" />
                                                                            <i className="fa fa-star-o" />
                                                                        </div>
                                                                        <div className="pro-price">
                                                                            <span className="new-price">{val.Price}</span>
                                                                            <span className="old-price"><del>{val.Old_Price}</del></span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            )
                                                        })}
                                                            <div className="swiper-slide">
                                                            </div>
                                                        </OwlCarousel>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* juicebottle */}
                    <section className="home-product-slider section-t-padding">
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <div className="section-capture">
                                        <div className="section-title">
                                            <h2>Juice products</h2>
                                        </div>
                                    </div>
                                    <div className="pro-slider-area">
                                        <div className="swiper-container" id="trending-pro-16">
                                            <div className="swiper-wrapper">
                                                <div className="swiper-slide">
                                                    <OwlCarousel
                                                        className="owl-carousel"
                                                        loop
                                                        margin={10}
                                                        nav
                                                        items={4}
                                                    >
                                                        {juicebottle.map((val) => {
                                                            return (
                                                                <div className="tab-product" key={val.id}>
                                                                    <div className="tred-pro">
                                                                        <div className="tr-pro-img">
                                                                            <a href="product-style-3.html">
                                                                                <img src={val.Image_1} alt="pro-img1" className="img-fluid" />
                                                                                <img src={val.Image_2} alt="additional image" className="img-fluid additional-image" />
                                                                            </a>
                                                                        </div>
                                                                        <div className="Pro-lable">
                                                                            <span className="p-discount">{val.Dis_count}</span>
                                                                        </div>
                                                                        <div className="pro-icn">
                                                                            <div className="row ">
                                                                                <Link to={``} className="icn icns"><i className="fa fa-heart" /></Link>
                                                                                <Link to={`/Cart`} className="icn"><i className="fa fa-shopping-bag" /></Link>
                                                                                <Link to={`/Product/${`Juice_bottle`}/${val.id}`} className="icn"><i className="fa fa-eye" /></Link>
                                                                            </div>
                                                                        </div>

                                                                    </div>
                                                                    <div className="tab-caption">
                                                                        <div className="rating">
                                                                            <i className="fa fa-star e-star" />
                                                                            <i className="fa fa-star e-star" />
                                                                            <i className="fa fa-star e-star" />
                                                                            <i className="fa fa-star e-star" />
                                                                            <i className="fa fa-star e-star" />
                                                                        </div>
                                                                        <h3><a href="product-style-3.html">{val.Product_Name}(50gm)</a></h3>
                                                                        <div className="pro-price">
                                                                            <span className="new-price">{val.Price}</span>
                                                                            <span className="old-price"><del>{val.Old_Price}</del></span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            );
                                                        })}
                                                    </OwlCarousel>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* jucie section end */}

                    {/* Recent news part */}
                    <section className="home-6-blog section-tb-padding">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-12">
                                    <div className="section-title3">
                                        <h2><span>Recent news</span></h2>
                                    </div>
                                    <OwlCarousel
                                        className="owl-theme"
                                        loop
                                        margin={10}
                                        nav
                                        items={4}
                                    >
                                        {
                                            recentnews.map((val) => (
                                                <div className="blog-area" key={val.id}>
                                                    <div className="blog-6  ">
                                                        <div className="items ">
                                                            <div className="blog-start">
                                                                <div className="blog-image">
                                                                    <a href="blog-style-6-details.html">
                                                                        <img src={val.img} alt="blog-image" className="img-fluid" />
                                                                    </a>
                                                                    <div className="image-link">
                                                                        <a href={val.img_link_1}>{val.img_link_1}</a>
                                                                        <a href={val.img_link_2}>{val.img_link_2}</a>
                                                                    </div>
                                                                </div>
                                                                <div className="blog-content">
                                                                    <div className="blog-title">
                                                                        <h6><a href="#">{val.name}</a></h6>
                                                                    </div>
                                                                    <p className="blog-description">{val.discription}</p>
                                                                    <div className="more-blog">
                                                                        <a href="blog-style-6-details.html" className="read-link">
                                                                            <span>Read more</span>
                                                                            <i className="ti-arrow-right" />
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                    </OwlCarousel>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Banner part  */}
                    <section className="home6-banner-news section-tb-padding">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col">
                                    <div className="b-news">
                                        <div className="full-banner">
                                            <a href="grid-list.html" className="f-b">
                                                <img src="image/home-6.jpg" className="img-fluid" alt="banner-image" />
                                            </a>
                                            <div className="banner-content">
                                                <span className="b-slogan">Top view pasta</span>
                                                <h1>With fried egg and tomatoes</h1>
                                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit doli. Aenean commodo ligula eget dolor...</p>
                                                <a href="grid-list.html" className="btn btn-style1"><span>Shop now</span></a>
                                            </div>
                                        </div>
                                        <div className="latest-deal">
                                            <div className="news-l" style={{ backgroundImage: 'url(image/news-6.jpg)' }}>
                                                <div className="news-content">
                                                    <div className="section-title3">
                                                        <h2><span>Get the latest deals</span></h2>
                                                    </div>
                                                    <p>and receive $20 coupon for first shopping</p>
                                                    <form>
                                                        <input type="text" name="Email" placeholder="Enter your email address" />
                                                        <a href="javascript:void(0)"><i className="ion-paper-airplane" /></a>
                                                    </form>
                                                    <ul className="news-icn">
                                                        <li><a href="javascript:void(0)"><i className="ti-facebook" /></a></li>
                                                        <li><a href="javascript:void(0)"><i className="ti-twitter-alt" /></a></li>
                                                        <li><a href="javascript:void(0)"><i className="ti-instagram" /></a></li>
                                                        <li><a href="javascript:void(0)"><i className="ti-youtube" /></a></li>
                                                        <li><a href="javascript:void(0)"><i className="ti-pinterest" /></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </>
            )}
        </div>
    );
}

export default Home;
