import axios from "axios";
import { useEffect, useState } from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NavLink } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
const AdminProductshow = () => {
    const navigate = useNavigate()

    const [allproductshow, setallproductshow] = useState([]);
    const [marketstatus, setMarketStatus] = useState(["Trending", "latest", "Upcomming", "best"]);
    const [status, setStatus] = useState(["instock", "out of stock"])

    // all product show
    const product = () => {
        axios.get(`http://localhost:3030/AllProduct_show_shop_page`)
            .then((response) => {
                setallproductshow(response.data);
            }).catch((err) => {
                console.log("Error show in allproduct show, admin side so you can solove error: " + err);
                return false;
            });
    }
    // product delete
    const productdelete = (id) => {
        console.log(id);
        axios.delete(`http://localhost:3030/AllProduct_show_shop_page/${id}`)
            .then((response) => {
                toast.success('Successfully delete product', {
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
                product();
            }).catch((err) => {
                console.log('Error deleting product admin side' + err);
                return false;
            });
    }
    // marketstatus change 
    const changeMarketStatus = (id, value) => {
        axios.patch(`http://localhost:3030/AllProduct_show_shop_page/${id}`, {
            Marketstatus: value
        }).then((response) => {
            toast.success(' Status successfully update!')

            product();
        }).catch((err) => {
            console.log("Error updating product admin market status" + err);
        });
    }
    const changeStatus = (id, value) => {
        axios.patch(`http://localhost:3030/AllProduct_show_shop_page/${id}`, {
            status: value
        }).then((response) => {
            toast.success(' Status successfully update!')
            product();
        }).catch((err) => {
            console.log("Error updating product admin instock status" + err);
            return false;
        });
    }
    useEffect(() => {
        product();
        // axios.get(`http://localhost:3030/Marketstatus`)
        // .then((response) => {
        //     // setMarketStatus(response.data)
        // }).catch((error) => {
        //     console.log("Not Found marketstatustype for admin side page no productadd" + error);
        //     return false;
        // });
    }, [])
    return (
        <div className="col-12">
            <div className="card overflow-hidden">
                <div className="card-body py-0 px-3">
                    <div className="table-responsive">
                        <table class="table-striped table text-center ">
                            <thead>
                                <tr>
                                    <th>Product Id</th>
                                    <th>Product Name</th>
                                    <th>Price</th>
                                    <th>Market Status</th>
                                    <th>stock</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            {
                                allproductshow.map((item) => {
                                    return (
                                        <tr>
                                            <td>{item.id}</td>
                                            <td>{item.Product_Name}</td>
                                            <td>${item.Price}</td>
                                            <td>
                                                <select onChange={(e) => changeMarketStatus(item.id, e.target.value)} className='form-control'>
                                                    <option value="">select market status</option>
                                                    {
                                                        marketstatus.map((val) => {
                                                            return (item.Marketstatus === val ?
                                                                <option value={item.Marketstatus} selected>{item.Marketstatus}</option> :
                                                                <option>{val}</option>)
                                                        })
                                                    }
                                                </select>
                                            </td>
                                            <td>
                                                <select onChange={(e) => changeStatus(item.id, e.target.value)} className='form-control'>
                                                    <option>---select status</option>
                                                    {
                                                        status.map((val) => {
                                                            return (item.status === val ?
                                                                <option value={item.status} selected>{item.status}</option> :
                                                                <option>{val}</option>)
                                                        })
                                                    }
                                                </select>
                                            </td>
                                            <td>
                                                <NavLink to={`/admin/Productadd/${item.id}`}>
                                                   
                                                    <button>
                                                        <i class="bi bi-pencil-square"></i>
                                                    </button>

                                                </NavLink>
                                                <button onClick={() => productdelete(item.id)}>
                                                    <i class="bi bi-trash3-fill"></i>
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </table>
                    </div>
                </div>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={1000}
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


    )
}
export default AdminProductshow