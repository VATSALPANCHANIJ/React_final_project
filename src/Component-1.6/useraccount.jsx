import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Account = () => {
    const navigate = useNavigate();
    const [UserInformation, setUserInformation] = useState(null);

    const logout = () => {
        alert("done")
        toast.success('All Product Remove from cart page', {
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
        localStorage.removeItem('checkUserLogin');
        navigate('/Login');
    }
    useEffect(() => {
        const storedData = localStorage.getItem('checkUserLogin');

        if (storedData) {
            try {
                const UserInformation = JSON.parse(storedData);
                setUserInformation(UserInformation);
            } catch (error) {
                console.error('Error parsing data from localStorage:', error);
            }
        }
    }, []);
    return (
        <>
            <section className="about-breadcrumb">
                <div className="about-back section-tb-padding" style={{ backgroundImage: 'url(image/about-image.jpg)' }}>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="about-l">
                                    <ul className="about-link">
                                        <h3 className="about-p h2"><span> Your Account</span></h3>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="shipping-area section-tb-padding">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="account-title my">
                                <h1>Welcome {UserInformation ? (
                                    <h5 className='my'>
                                        {UserInformation.firstname} {UserInformation.lastname}
                                    </h5>
                                ) : (
                                    <p>No data available</p>
                                )}
                                </h1>
                            </div>

                            <div className="account-area my justify-content-center text-center">
                                <div className="account">
                                    <h4>My account</h4>
                                    <ul className="page-name my">
                                        <li className="text-center">
                                            <NavLink onClick={() => logout()}>
                                                <h5>
                                                    Logout
                                                </h5>
                                            </NavLink>
                                        </li>
                                    </ul>
                                </div>
                                <div className="account-detail">

                                    <h4>Account details</h4>

                                    {UserInformation ? (
                                        <div>
                                            <ul className="a-details">
                                                <li>
                                                    <h5>
                                                        {UserInformation.firstname} {UserInformation.lastname}
                                                    </h5>
                                                </li>
                                                <li className="mail-register">
                                                    <h5>
                                                        {UserInformation.email}
                                                        <br />
                                                        {UserInformation.password}
                                                    </h5>
                                                </li>
                                            </ul>
                                        </div>
                                    ) : (
                                        <p>No data available</p>
                                    )}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
export default Account;