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
           

                <div className="col-12" style={{ overflow: "hideen" }}>
                    <div className="card overflow-hidden">
                        <div className="card-body py-0 px-3">
                            <div className="table-responsive">
                                <table class="table-striped table text-center ">
                                    <thead>
                                        <tr>
                                            <th className="col-2">User Id</th>
                                            <th className="col-2">User firstname</th>
                                            <th className="col-2">User Lastname</th>
                                            <th className="col-2">User Email</th>
                                            <th className="col-2">View Cart</th>
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
        </>
    )
}
export default Users_detail;