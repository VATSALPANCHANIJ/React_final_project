import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Check if any of the required fields are empty
        if (!firstname || !lastname || !email || !password) {
            toast.error('All fields are required.', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            return;
        }

        try {
            const response = await axios.post(`http://localhost:3030/User_Resigeters_data`, {
                firstname: firstname,
                lastname: lastname,
                email: email,
                password: password
            });

            if (response.data) {
                toast.success('Your account is added to our database.', {
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
                setFirstName("");
                setLastName("");
                setEmail("");
                setPassword("");
            } else {
                toast.error('Your Account is not added to the database', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
            }
        } catch (error) {
            console.error("Error adding account:", error);
            toast.error('Error adding account. Please try again later.', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
    }

    return (
        <section className="section-tb-padding">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="register-area">
                            <div className="register-box">
                                <h1>Create account</h1>
                                <p>Please register below account detail</p>
                                <form onSubmit={handleSubmit}>
                                    <input type="text" name="name" onChange={(e) => setFirstName(e.target.value)} value={firstname} placeholder="First name" />
                                    <input type="text" name="l-name" onChange={(e) => setLastName(e.target.value)} value={lastname} placeholder="Last name" />
                                    <input type="text" name="email" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Email address" />
                                    <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Password" />
                                    <button type="submit" className="btn-style10 w-100 text-center mt-5">Create</button>
                                </form>
                            </div>
                            <div className="register-account">
                                <h4>Already an account holder?</h4>
                                <Link to='/Login' className="ceate-a">Log in</Link>
                                <div className="register-info">
                                    <a href="terms-conditions.html" className="terms-link"><span>*</span> Terms &amp; conditions.</a>
                                    <p>Your privacy and security are important to us. For more information on how we use your data read our <a href="privacy-policy.html">privacy policy</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ToastContainer
                        position="top-center"
                        autoClose={2000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="colored"
                    />
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
            </div>
        </section>
    )
}

export default Register;
