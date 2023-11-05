import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import checkUserLogin from "./User_verification";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from "./Loader";

const Productshow = () => {
    const [products_vegetable, setProducts_vegetable] = useState({});
    const [quantity, setQuantity] = useState(1);
    const [product_single, setProduct_single] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const { type, id } = useParams();
    const Featured_products = async () => {
        try {
            let singledata_vegetable = await axios.get(`http://localhost:3030/${type}/${id}`);
            if (singledata_vegetable) {
                setProducts_vegetable(singledata_vegetable.data);
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
            console.log("Fetching problem solving single product section", err);
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

    const AddToCart = (id) => {

        if (!checkUserLogin()) {
            navigate('/login');
        }
        else {
            axios.get(`http://localhost:3030/AllProduct_show_shop_page/${id}`)
                .then((res) => {
                    axios.post(`http://localhost:3030/user_cart_system`, {
                        Image_1: res.data.Image_1,
                        Product_Name: res.data.Product_Name,
                        userId: checkUserLogin().id,
                        price: res.data.Price,
                        quantity: 1,
                    }).then((res) => {
                        setCartItems([...cartItems, {
                            Image_1: res.data.Image_1,
                            Product_Name: res.data.Product_Name,
                            userId: checkUserLogin().id,
                            price: res.data.Price,
                            quantity: 1,
                          }]);
                        toast.success('Product successfully added to cart', {
                            position: "top-center",
                            autoClose: 2000,
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
                    }).catch((err) => {
                        console.log(err);
                        return false;
                    })
                }).catch((err) => {
                    console.log(err);
                    return false;
                })
            navigate('/Cart');
        }

    }
    useEffect(() => {
        Featured_products();
    }, []);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, [])

    return (
        <div className="sweet-loading" style={{ backgroundColor: loading ? '#F5AB1E' : '#FFFFFF', minHeight: '100vh' }}>

            {loading ? (
                <Loader />
            ) : (
                <div className="sweet-loading">

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
                                                <span className="">{products_vegetable.price}</span>
                                                <div className="Pro-lable">
                                                    <span className="p-discount">New</span>
                                                </div>
                                            </div>
                                            <span className="pro-details">Hurry up! only <span className="pro-number">7</span> products left in stock!</span>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer type and</p>
                                            <div className="pro-qty">
                                                <span className="qty">Quantity:</span> &nbsp; &nbsp;
                                                <h4 className="new-price">1</h4>
                                            </div>
                                            <div className="pro-btn align-item-center">
                                                {/* {JSON.stringify(products_vegetable.id)} */}
                                                <button type="button mt-5" onClick={() => AddToCart(products_vegetable.id)} className="btn btn-style10"><i className="fa fa-shopping-bag" /> Add to cart</button>
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

                </div>
            )}
        </div>
    )
}
export default Productshow;