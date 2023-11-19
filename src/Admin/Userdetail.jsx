import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
const Users_detail = () => {
    const [user, setUser] = useState();
    useEffect(() => {
        axios.get(`http://localhost:3030/User_Resigeters_data`)
            .then((res) => {
                setUser(res.data)
            })
            .catch((err) => {
                console.log(err, "Error: show user_details_page failed");
                return false
            });
    }, [])
    return (
        <>
            <div className="row justify-content-betweeb">
                <div className="col-2"></div>
                <div className="col-10">
                    <div className="card overflow-hidden">
                        <div className="card-body py-0 px-3">
                            <div className="table-responsive">
                                <table class="table-striped table text-center ">
                                    <thead>
                                        <tr>
                                            <th>User Id</th>
                                            <th>User firstname</th>
                                            <th>User Lastname</th>
                                            <th>User Email</th>
                                            <th>View Cart</th>
                                        </tr>
                                    </thead>
                                    {
                                        user && user.map((val) => {
                                            return (
                                                <tr>
                                                    <td>{val.id}</td>
                                                    <td>{val.firstname}</td>
                                                    <td>{val.lastname}</td>
                                                    <td>{val.email}</td>
                                                    <td>
                                                        <Link to={`/admin/Userproductshow/${val.id}`}>
                                                            <button>view Product</button>
                                                        </Link>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Users_detail;