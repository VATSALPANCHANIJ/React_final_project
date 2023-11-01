import { signInWithPopup } from "firebase/auth";
import { auth, googleAuthProvider } from "./firebase";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Login = () => {
    console.log("done");
    const navigate = useNavigate();

    const handleSubmit = async () => {
        try {
            const result = await signInWithPopup(auth, googleAuthProvider);
            localStorage.setItem('token', result.user.accessToken);
            localStorage.setItem('user', JSON.stringify(result.user));
            navigate('/home');

        } catch (err) {
            console.log(err);
        }
    }
    const user = JSON.parse(localStorage.getItem('user'));
    useEffect(() => {
        if (user) {
            navigate('/home');
        }
    }, [])
    return (
        <>
            <div class="main video-container">

                <div class="container">
                    <div class="login-form">
                        <div class="col-12 login col-md-6 col-lg-4 mx-auto my-5 align-items-center justify-content-center ">
                            <div class="signup_news_wrap shadow text-center">
                                <div class="signup_news_content py-3">
                                    <h4 class="signup_news_title">Sign Up Newsletter</h4>

                                </div>
                                <div class="signup_news_field">
                                    <form action="#!">
                                        <input class="rounded-pill " type="search" placeholder="Enter Your Name" />
                                        <input class="rounded-pill mt-3" type="search" placeholder="Enter Your Email" />
                                        <input class="rounded-pill mt-3" type="email" placeholder="Enter Your Password" />
                                        <button class="btn rounded-pill text-white mt-3" type="button">
                                            Sign Up <i class="fas fa-long-arrow-alt-right"></i>
                                        </button>
                                    </form>
                                </div>
                                <div class="signup_news_terms">
                                    <span>By signing up you agree our
                                        <font>Terms & Privicy</font>
                                    </span>
                                </div>
                                <div
                                    class="signup_news_socials d-flex justify-content-center justify-content-center align-items-center">
                                    <a onClick={handleSubmit} class="social_linked" href="#">
                                        <i class="fa-brands fa-google"></i>
                                    </a>
                                    <a class="social_face" href="#">
                                        <i class="fab fa-facebook-f text-white"></i>
                                    </a>
                                    <a class="social_twitt" href="#">
                                        <i class="fab fa-twitter text-white"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="video-container">
                        <video src="assets/video/close_up_video_of_vegetables (720p).mp4" autoPlay controls playsinline muted
                            loop></video>
                    </div>
                </div>

            </div>
        </>
    )
}
export default Login;