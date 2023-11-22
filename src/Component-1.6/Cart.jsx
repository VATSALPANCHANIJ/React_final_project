import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import User_verification from "./User_verification";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from "./Loader";

const Cart = () => {
    const [cartData, setCartData] = useState([]);
    const [quantity, setQuantity] = useState(1);
    const [loading, setLoading] = useState(true);
    // const [subtotal, setSubtotal] = React.useState(0);
    //products count
    const totalProductsInCart = cartData.length;

    // single product shown in cart page 
    // and  data is pass to productshow
    const Featured_All_products = async () => {
        try {
            let single_cart_product_data = await axios.get(`http://localhost:3030/user_cart_system`);
            if (single_cart_product_data) {
                setCartData(single_cart_product_data.data);
                console.log(single_cart_product_data.data);
            } else {
                toast.error('product not found', {
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
    // clear cart items
    const clearCart = () => {
        setCartData([]);
        toast.success('All Product Remove from cart page', {
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
    };
    //Product remove our from the cart list delete data
    const removeProductFromCart = async (productId) => {
        try {
            await axios.delete(`http://localhost:3030/user_cart_system/${productId}`);
            setCartData(prevCartData => prevCartData.filter(item => item.id !== productId));
        } catch (error) {
            console.error("Error removing product from cart:", error);
        }
    }
    // product quantity + or - code 
    const Qtychange = (id, quantity, price) => {
        // Make sure price and quantity are valid numbers
        const newPrice = parseFloat(price);
        const newQuantity = parseInt(quantity);
        const totalPrice = parseFloat(newPrice);
        // calculateSubtotal();


        // Calculate the new total price
        if (newQuantity >= 1) {
            // Calculate the new total price
            const newTotalPrice = newPrice * newQuantity;

            const updatedCartItem = cartData.map(item => {
                if (item.id === id) {
                    return { ...item, quantity: newQuantity, newPrice: newTotalPrice, subtotal: newTotalPrice };
                }
                return item;
            });

            setCartData(updatedCartItem);

            axios.patch(`http://localhost:3030/user_cart_system/${id}`, {
                quantity: newQuantity,
                price: newPrice
            }).then((res) => {
                toast.success('Product quantity updated', {
                    position: "top-center",
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
            }).catch((err) => {
                console.error(err);
                alert("Error updating cart.");
            });
        }
    }
    // const calculateSubtotal = () => {
    //     let newSubtotal = 0;
    //     // Iterate over your items and calculate the subtotal
    //     // Assuming `items` is an array containing your items
    //     items.forEach((val) => {
    //         newSubtotal += val.price * val.quantity;
    //     });
    //     setSubtotal(newSubtotal);
    // };


    useEffect(() => {
        Featured_All_products();
    }, []);

    useEffect(() => {
        // Simulate an asynchronous action (e.g., fetching data from an API)
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, []);

    //  not show product other users can not access

    useEffect(() => {
        axios.get(`http://localhost:3030/user_cart_system?userId=${User_verification().id}`)
            .then((res) => {
                setCartData(res.data);
            }).catch((err) => {
                console.error(err);
                return false;
            });
    }, [])

    return (
        <div className="sweet-loading" style={{ backgroundColor: loading ? '' : '', minHeight: '100vh' }}>

            {loading ? (
                <Loader />
            ) : (
                <>
                    <section className="cart-page section-tb-padding">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-9 col-xs-12 col-sm-12 col-md-12 col-lg-8">
                                    <div className="cart-area">
                                        <div className="cart-details">
                                            <div className="cart-item">
                                                <span className="cart-head">My cart:</span>
                                                <span className="c-items">{totalProductsInCart} Product</span>
                                            </div>
                                            {
                                                cartData.map((val) => {
                                                    console.log(cartData);
                                                    return (
                                                        <div className="cart-all-pro">
                                                            <div className="cart-pro justiy-content-center ">
                                                                <div className="cart-pro-image">
                                                                    <a href=""><img src={val.Image_1} className="img-fluid cart_page_image" alt="image" /></a>
                                                                </div>
                                                                <div className="pro-details">
                                                                    <h4><a href="#">{val.name}</a></h4>

                                                                </div>
                                                            </div>

                                                            <div className="qty-item">
                                                                <div className="center">
                                                                    <div className="pro-qty text-center">
                                                                        <span className="qty">Quantity:</span>
                                                                        <input type='number' value={val.quantity} onChange={(e) => Qtychange(val.id, e.target.value, val.price)} />
                                                                        <button className="pro-remove text-center" onClick={() => removeProductFromCart(val.id)}>Remove</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="all-pro-price">
                                                                <span>{val.price * val.quantity}</span>
                                                            </div>
                                                        </div>
                                                    )
                                                })

                                            }
                                        </div>
                                    </div>

                                    <div className="cart-area">
                                        <div className="cart-details">
                                            <div className="other-link">
                                                <ul className="c-link">
                                                    <li className="cart-other-link"><Link to={'/'} className="btn btn-style10">Update cart</Link></li>
                                                    <li className="cart-other-link"><Link to={'/Shop'} className="btn btn-style10">Continue shopping</Link></li>
                                                    <li className="cart-other-link"><a onClick={clearCart} className="btn btn-style10">Clear cart</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-xs-12 col-sm-12 col-md-12 col-lg-4">
                                    <div className="cart-total">
                                        <div className="cart-price">
                                            <span>Subtotal</span>
                                            {/* <span className="total">${subtotal}</span> */}
                                        </div>
                                        <div className="cart-info">
                                            <h4>Shipping info</h4>
                                            <form>
                                                <label>Country</label>
                                                <select className="form-select" aria-label="Default select example">
                                                    <option>---</option>
                                                    <option selected>India</option>
                                                    <option>Afghanistan</option>
                                                    <option>Åland Islands</option>
                                                    <option>Albania</option>
                                                    <option>Algeria</option>
                                                    <option>Andorra</option>
                                                    <option>Angola</option>
                                                    <option>Anguilla</option>
                                                    <option>Antigua &amp; Barbuda</option>
                                                    <option>Argentina</option>
                                                    <option>Armenia</option>
                                                    <option>Aruba</option>
                                                    <option>Ascension Island</option>
                                                    <option>Australia</option>
                                                    <option>Azerbaijan</option>
                                                    <option>Bahamas</option>
                                                    <option>Bahrain</option>
                                                </select>
                                                <label>Zip/postal code</label>
                                                <input type="text" name="code" placeholder="Zip/postal code" />
                                            </form>
                                            <a href="javascript:void(0)" className="btn btn-style10 cart-calculate">Calculate</a>
                                        </div>
                                        <div className="shop-total">
                                            <span>Total</span>
                                            {/* <span className="total-amount">{subtotal}</span> */}
                                        </div>
                                        <a className="check-link btn btn-style10">Checkout</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section >
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
                </>
            )}
        </div>
    )
}
export default Cart;