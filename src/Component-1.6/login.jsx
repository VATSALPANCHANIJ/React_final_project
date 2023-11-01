import axios from "axios"
import { useState } from "react"
import { Link, } from "react-router-dom"
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState("")
    const navigate = useNavigate();
    const handle_submit = async () => {
        try {
            let users_add = await axios.get(`http://localhost:3030/User_Resigeters_data?email=${email}&password=${password}`);
            if (users_add.data.length === 0) {
                console.log("done");
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
                navigate('/Login');
                return false;
            }
            localStorage.setItem('checkUserLogin', JSON.stringify(users_add.data[0]));
            setEmail("");
            setPassword("");
            navigate('/');
        } catch (error) {
            console.log(error);
            return false;
        }

    }
    return (
        <>
            <section className="section-tb-padding">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="login-area">
                                <div className="login-box">
                                    <h1>Login</h1>
                                    <p>Please login below account detail</p>
                                    <form>
                                        <label>Email address</label>
                                        <input type="text" name="email" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Email address" />
                                        <label>Password</label>
                                        <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Password" />
                                        <Link onClick={() => handle_submit()} className="btn-style10 w-100 text-center mt-5">Sign in</Link>

                                        <a href="forgot-password.html" className="re-password">Forgot your password?</a>
                                    </form>
                                </div>
                                <div className="login-account">
                                    <h4>Don't have an account?</h4>
                                    <Link to='/Register' className="ceate-a">Create account</Link>
                                    <div className="login-info">
                                        <a href="terms-conditions.html" className="terms-link"><span>*</span> Terms &amp;
                                            conditions.</a>
                                        <p>Your privacy and security are important to us. For more information on how we use
                                            your data read our <a href="privacy-policy.html">privacy policy</a></p>
                                    </div>
                                </div>
                            </div>
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

            </section>

        </>
    )
}
export default Login;