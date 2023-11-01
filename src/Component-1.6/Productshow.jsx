import axios from "axios";
import { useEffect, useState } from "react";
import ReactImageMagnify from 'react-image-magnify'
import { useNavigate, useParams } from "react-router-dom";
import checkUserLogin from "./User_verification";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Productshow = () => {
    const [products_vegetable, setProducts_vegetable] = useState({});
    const [quantity, setQuantity] = useState(1);
    const navigate = useNavigate();
    const { type, id } = useParams();
    const Featured_products = async () => {
        try {
            let singledata_vegetable = await axios.get(`http://localhost:3030/${type}/${id}`);
            if (singledata_vegetable) {
                setProducts_vegetable(singledata_vegetable.data);
                console.log(singledata_vegetable.data);
            } else {
                toast.error('Your Account is not found our database', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    style: {
                        width: '400px',
                    },

                });
            }
        } catch (err) {
            console.log("Fetching problem solving vegetable section", err);
        }
    }
    const incrementQuantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    }
    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    }

    const AddTocart = () => {
        if (!checkUserLogin()) {
            toast.error('Your Account is not found our database', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                style: {
                    width: '400px',
                },

            });
        }
        navigate('/Cart');
    }

    useEffect(() => {
        Featured_products();
    }, [id]);
    return (
        <> <section className="section-tb-padding pro-page">
            <div className="container">
                <div className="row">
                    <div className="col-xl-9 col-lg-12 col-md-12 pro-image">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-12 larg-image">
                                <img src={products_vegetable.Image_1} style={{ width: "500px" }} />
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-12 pro-info">

                                <h4>{products_vegetable.Product_Name}</h4>
                                <div className="rating">
                                    <i className="fa fa-star d-star" />
                                    <i className="fa fa-star d-star" />
                                    <i className="fa fa-star d-star" />
                                    <i className="fa fa-star d-star" />
                                    <i className="fa fa-star-o" />
                                </div>
                                <div className="pro-availabale">
                                    <span className="available">Availability:</span>
                                    <span className="pro-instock">In stock</span>
                                </div>
                                <div className="pro-price">
                                    <span className="new-price">{products_vegetable.Price}</span>
                                    <div className="Pro-lable">
                                        <span className="p-discount">New</span>
                                    </div>
                                </div>
                                <span className="pro-details">Hurry up! only <span className="pro-number">7</span> products left in stock!</span>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer type and</p>
                                <div className="pro-qty">
                                    <span className="qty">Quantity:</span>
                                    <div className="plus-minus">
                                        <span>
                                            <a onClick={decrementQuantity}><i class="bi bi-dash plus_dash"></i></a>
                                            <input type="text" name="name" value={quantity} readOnly className="quantity-input" />
                                            <a onClick={incrementQuantity}><i class="bi bi-plus plus_dash"></i></a>
                                        </span>
                                    </div>
                                </div>
                                <div className="pro-btn">
                                    <a href="" className="btn btn-style10"><i className="fa fa-heart" /></a>
                                    <a href="" onClick={() => AddTocart()} className="btn btn-style10"><i className="fa fa-shopping-bag" /> Add to cart</a>
                                    <a href="" className="btn btn-style10">Buy now</a>
                                </div>
                                <div className="share">
                                    <span className="share-lable">Share:</span>
                                    <ul className="share-icn">
                                        <li><a href="javascript:void(0)"><i className="fa fa-facebook" /></a></li>
                                        <li><a href="javascript:void(0)"><i className="fa fa-twitter" /></a></li>
                                        <li><a href="javascript:void(0)"><i className="fa fa-instagram" /></a></li>
                                        <li><a href="javascript:void(0)"><i className="fa fa-pinterest" /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-xl-3 col-lg-12 col-md-12 pro-shipping">
                        <div className="product-service">
                            <div className="icon-title">
                                <span><i className="ti-truck" /></span>
                                <h4>Delivery info</h4>
                            </div>
                            <p>Lorem Ipsum is simply text of the printing typesetting the printing the printing typesetting industry.</p>
                        </div>
                        <div className="product-service">
                            <div className="icon-title">
                                <span><i className="ti-reload" /></span>
                                <h4>30 days returns</h4>
                            </div>
                            <p>Lorem Ipsum is simply text of the printing typesetting the printing the printing typesetting industry.</p>
                        </div>

                    </div>
                </div>
                <ToastContainer
                    position="top-right"
                    autoClose={2000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark"
                />
            </div>
        </section>
        </>
    )
}
export default Productshow;