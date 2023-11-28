import './productadd.css';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ProductaddAdmin = () => {
    const { id } = useParams()
    const navigate = useNavigate();
    const [categorytype, setCategorytype] = useState([]);
    const [marketstatustype, setMarketstatustype] = useState([]);

    const [catogery, setCatogery] = useState("");
    const [Product_Name, setProduct_Name] = useState("");
    const [Price, setPrice] = useState("");
    const [Image_1, setImage_1] = useState("");
    const [Image_2, setImage_2] = useState("");
    const [Marketstatus, setMarketstatus] = useState("");
    const [status, setStatus] = useState("");

    const [editData, setEditData] = useState("");

    const Product_add_to_view_page = () => {
        // if (!Product_Name || !Price || !Image_1 || !Image_2 || !status || !catogery) {
        //     toast.error('All fields are required');
        //     return;
        // }
        axios.post(`http://localhost:3030/AllProduct_show_shop_page`, {
            Product_Name: Product_Name,
            Price: Price,
            Image_1: Image_1,
            Image_2: Image_2,
            Marketstatus: Marketstatus,
            status: status,
            catogery: catogery
        }).then((response) => {
            resetFields();
            toast.success('Product added successfully to view page');
        }).catch((error) => {
            console.log(error);
            return false;
        })
    }
    const resetFields = () => {
        // Reset all input fields
        setCatogery("");
        setProduct_Name("");
        setImage_1("");
        setImage_2("");
        setMarketstatus("");
        setPrice("");
        setStatus("");
    }
    useEffect(() => {
        // category type is a dynamic code
        axios.get(`http://localhost:3030/catogery`)
            .then((response) => {
                setCategorytype(response.data)
            }).catch((error) => {
                console.log("Not Found category type for admin side page no productadd" + error);
                return false;
            })
        // market status is a dynamic code
        axios.get(`http://localhost:3030/Marketstatus`)
            .then((response) => {
                setMarketstatustype(response.data)
            }).catch((error) => {
                console.log("Not Found marketstatustype for admin side page no productadd" + error);
                return false;
            });
        
    }, [])
    return (
        <>
            <h1 className='text-center'>Add New Product</h1>
            <br /><hr /><br />
            <form style={{ overflow: "hidden" }}>
                {/* category and products name */}
                <div className="row justify-content-center add">
                    <div className="col-5">
                        <label>catogery:</label>
                        <select value={catogery} onChange={(e) => setCatogery(e.target.value)} name="productStatus" required>
                            <option>---seletct value for category---</option>
                            {
                                categorytype.map((item) => {
                                    return (
                                        <option value={item.catogery_name}>{item.catogery_name}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className="col-5">
                        <label>Product Name:</label>
                        <input type="text" value={Product_Name} onChange={(e) => setProduct_Name(e.target.value)} name="productName" required />
                    </div>
                </div>
                {/* Image_1 , Image_2  */}
                <div className="row justify-content-center add">
                    <div className="col-5">
                        <label >Image URL-1:</label>
                        <input type="text" value={Image_1} onChange={(e) => setImage_1(e.target.value)} name="productImage" required />
                    </div>
                    <div className="col-5">
                        <label >Image URL-2:</label>
                        <input type="text" value={Image_2} onChange={(e) => setImage_2(e.target.value)} name="productImage" required />
                    </div>
                </div>
                {/* price and product status select */}
                <div className="row justify-content-center add ">
                    <div className="col-5"><label>Price:</label>
                        <input type="number" value={Price} onChange={(e) => setPrice(e.target.value)} name="productPrice" required />
                    </div>
                    <div className="col-5"><label>Status:</label>
                        <select name="productStatus">
                            <option value="instock">instock</option>
                            <option value="out Of Stock">Out of Stock</option>
                        </select></div>
                </div>
                {/* marketstatus select */}
                {/* <div className="row justify-content-center add">
                    <div className="col-5">
                        <label>Market Status:</label>
                        <select name="productStatus" value={Marketstatus}>
                            <option>--- Select MarketStatus type ---</option>
                            {
                                marketstatustype.map((item) => {
                                    return (
                                        <option value={item.Marketstatus}>{item.Marketstatus}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                </div> */}
                {/* button */}
                <div className="row justify-content-center ">
                    <div className="col-5 text-center">
                        <button type='button' onClick={() => Product_add_to_view_page()}>Add Product</button>
                        &nbsp; &nbsp; &nbsp;
                        <Link to={'/admin/AdminProductshow'}>
                            <button type="button">View product</button>
                        </Link>
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

            </form>

        </>
    )

}
export default ProductaddAdmin;