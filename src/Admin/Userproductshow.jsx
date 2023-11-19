import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Cart from "../Component-1.6/Cart";
const UserProductShown = () => {

    const { userId } = useParams();
    // ^ to take id^
    const navigate = useNavigate();
    const [user, setUser] = useState("");
    const [userCart, setUserCart] = useState([])

    const getUserDetails = () => {
        axios.get(`http://localhost:3030/User_Resigeters_data/${userId}`)
            .then((res) => {
                setUser(res.data)
                console.log(res.data);
            }).catch((err) => {
                console.log(err);
                return false
            })
    }
    const getUserCartDetails = () => {
        axios.get(`http://localhost:3030/user_cart_system?userId=${userId}`)
            .then((res) => {
                setUserCart(res.data);

            }).catch((err) => {
                console.log(err);
                return false;
            })
    }
    useEffect(() => {
        // let admin = JSON.parse(localStorage.getItem('checkAdminLogin'));
        // if (!admin) {
        //     navigate('/admin');
        // }
        getUserDetails()
        getUserCartDetails()
    }, [])
    return (
        <>
            <h2> User number :-  #{user.id}580</h2>
            <h2> User Name :-  {user.firstname} {user.lastname}</h2>
            <h2> User Email :- {user.email}</h2>
            <div className="row justify-content-center">
                <h1>user Product</h1>
            </div>
            <hr />
            <table>
                <thead className="text-center">
                    <th className="col-2"></th>
                    <th className="col-2">Name</th>
                    <th className="col-2">Price</th>
                    <th className="col-2">Quantity</th>
                    <th className="col-2">total</th>
                </thead>
                <tbody>
                    {
                        userCart.length === 0 ? (
                            <h3>user only time pass our web page</h3>
                        ) : (
                            userCart.map((val) => {
                                return (
                                    <tr className="text-center">
                                        <td><img src={val.Image_1} width={200} alt="" /></td>
                                        <td><h4>{val.Product_Name}</h4></td>
                                        <td><h5> only 1 item ${val.price}</h5></td>
                                        <td><h5>{val.quantity}</h5></td>
                                        <td><h5>{val.quantity * val.price}</h5></td>
                                    </tr>
                                )
                            })
                        )

                    }
                </tbody>
            </table>
        </>
    )
}
export default UserProductShown;