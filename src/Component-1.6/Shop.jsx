import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Loader from "./Loader";
import { Link } from "react-router-dom";
import axios from "axios";
const Shop = () => {
    const [loading, setLoading] = useState(true);
    const [allProducts, setAllProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const Fetch_AllProducts = async () => {
        try {
            const res = await axios.get("http://localhost:3030/AllProduct_show_shop_page")
            setAllProducts(res.data);
            console.log(res.data);
        } catch (error) {
            console.log(error);
        }

    }
    const recordsPerPage = 12;
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;

    // this is a data showing that time use
    const currentProducts = allProducts.slice(firstIndex, lastIndex);

    const npage = Math.ceil(allProducts.length / recordsPerPage);
    const numbers = [...Array(npage + 1).keys()].slice(1)

    function prePage() {
        if (firstIndex > 0) {
            setCurrentPage(currentPage - 1);
        }
    }

    function changeCPage(id) {
        setCurrentPage(id);
    }
    useEffect(() => {
        Fetch_AllProducts();
        // Simulate an asynchronous action (e.g., fetching data from an API)
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    return (
        <div className="sweet-loading" style={{ backgroundColor: loading ? '#F5AB1E' : '#FFFFFF', minHeight: '100vh' }}>

            {loading ? (
                <Loader />
            ) : (
                <>
                    <section className="section-tb-padding">
                        <div className="container">
                            <div className="row" >
                                <div className="col-lg-3 col-md-4 col-12 ">
                                    <div className="all-filter">
                                        <div className="categories-page-filter " style={{ position: 'fixed', marginTop: '50px' }}>
                                            <h4 className="filter-title">Categories</h4>
                                            <a href="#category-filter" data-bs-toggle="collapse" className="filter-link"><span>Categories </span><i className="fa fa-angle-down" /></a>
                                            <ul className="all-option collapse" id="category-filter">
                                                <li className="grid-list-option">
                                                    <input type="checkbox" />
                                                    <a href="javascript:void(0)">Featured product</a>
                                                </li>
                                                <li className="grid-list-option">
                                                    <input type="checkbox" />
                                                    <a href="javascript:void(0)">Fresh fruits</a>
                                                </li>
                                                <li className="grid-list-option">
                                                    <input type="checkbox" />
                                                    <a href="javascript:void(0)">Fresh vegetable</a>
                                                </li>
                                                <li className="grid-list-option">
                                                    <input type="checkbox" />
                                                    <a href="javascript:void(0)">Organic juice</a>
                                                </li>
                                                <li className="grid-list-option">
                                                    <input type="checkbox" />
                                                    <a href="javascript:void(0)">Special product</a>
                                                </li>
                                                <li className="grid-list-option">
                                                    <input type="checkbox" />
                                                    <a href="javascript:void(0)">All products</a>
                                                </li>

                                            </ul>
                                        </div>
                                        {/* <div className="price-filter">
                                    <h4 className="filter-title">Filter by price</h4>
                                    <a href="#price-filter" data-bs-toggle="collapse" className="filter-link"><span>Filter by price </span><i className="fa fa-angle-down" /></a>
                                    <ul className="all-price collapse" id="price-filter">
                                        <price-range className="price-range">
                                  
                                            <div className="price-input-group group-input">
                                                <div className="price-range-input input-prefix">
                                                    <label className="input-prefix-label">From</label>
                                                    <span className="input-prefix-value">$ <span id="demo1" /></span>
                                                </div>
                                                <span className="price-range-delimeter">-</span>
                                                <div className="price-range-input input-prefix">
                                                    <label className="input-prefix-label">To</label>
                                                    <span className="input-prefix-value">$ <span id="demo2" /></span>
                                                </div>
                                            </div>
                                        </price-range>
                                    </ul>
                                </div> */}
                                    </div>
                                </div>
                                <div className="col-lg-9 col-md-8 col-12">
                                    <div className="grid-list-banner" style={{ backgroundImage: 'url(image/slider17.jpg)' }}>
                                        <div className="grid-banner-content">
                                            <h4>Bestseller</h4>
                                            <p>Praesent dapibus, neque id cursus Ucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, facilisis luc...</p>
                                        </div>
                                    </div>
                                    <div className="grid-4-product">
                                        <div className="grid-pro">
                                            <ul className="grid-product">
                                                {
                                                    currentProducts.map((val) => {
                                                        return (
                                                            <li className="grid-items">
                                                                <div className="tred-pro">
                                                                    <div className="tr-pro-img">
                                                                        <a href="#">
                                                                            <img className="img-fluid" src={val.Image_1} alt="pro-img1" />
                                                                            <img className="img-fluid additional-image" src={val.Image_2} alt="additional image" />
                                                                        </a>
                                                                    </div>
                                                                    <div className="Pro-lable">
                                                                        <span className="p-text">New</span>
                                                                    </div>
                                                                    <div className="pro-icn">
                                                                        <div className="row ">
                                                                            <Link to={``} className="icn icns"><i className="fa fa-heart" /></Link>
                                                                            <Link to={`/Cart`} className="icn"><i className="fa fa-shopping-bag" /></Link>
                                                                            <Link to={`/Product/${`AllProduct_show_shop_page`}//${val.id}`} href="javascript:void(0)" className="icn"><i className="fa fa-eye" /></Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="caption">
                                                                    <h3><a href="product.html">{val.Product_Name}</a></h3>
                                                                    <div className="rating">
                                                                        <i className="fa fa-star c-star" />
                                                                        <i className="fa fa-star c-star" />
                                                                        <i className="fa fa-star c-star" />
                                                                        <i className="fa fa-star-o" />
                                                                        <i className="fa fa-star-o" />
                                                                    </div>
                                                                    <div className="pro-price">
                                                                        <span className="new-price">{val.Price}</span>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        )
                                                    })

                                                }
                                            </ul>
                                        </div>
                                    </div>
                                    <nav className="mt-5">
                                        <h6 className="tex-center col-12 d-flex justify-content-center mb-3" style={{color:'gray'}}>Showing 1 - 12 Product 3 Result More..</h6>
                                        <ul className="pagination justify-content-center">
                                           
                                            {numbers.map((n, i) => (
                                                <li className={`page-link ${currentPage === n ? 'active' : ''}`} key={i}>
                                                    <a href="#" className='page-link' onClick={() => changeCPage(n)}>{n}</a>
                                                </li>
                                            ))}
                                           
                                        </ul>
                                    </nav>
                                </div>
                            </div>

                        </div>
                    </section>
                </>
            )}
        </div>
    );
}
export default Shop;
