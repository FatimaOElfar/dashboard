import './signin.css'
import image from "../../assets/signup.png";
import {FcGoogle} from "react-icons/fc";
import {AiOutlineEye, AiFillCheckCircle} from "react-icons/ai";


export const SignIn = () => {
    return (
<div className="signup">
            <div className="contentt">
                                <div className="signin">
                    <h1>SignIn</h1>
                    <p>Enter your email and password to sign in!</p>

                    <button className='Signup-with-Google'>
                        <FcGoogle/> Signup with Google
                    </button>


                    <div className="hr">
                        <hr/>
                        <p className="or">or</p>
                        <hr/>
                    </div>
                    <div className="form">
                        <form action="">
                            <h2>Email*</h2>
                            <input type="num " placeholder="Enter your phone Nume"/>
                            <h2>Password*</h2>
                            <input
                                type="text"
                                name=""
                                id=""
                                placeholder="Min. 8 characters"
                                className="password"
                            />
                            <span className="icon">
                <AiOutlineEye/>
              </span>
                        </form>
                        <h3>
              <span className="circle">
                <AiFillCheckCircle/>
              </span>{" "}
                            I agree to the <span className="span">Term &Conditions</span>
                        </h3>
                        <input type="button" value="Sign In" className="submit"/>
                        <p className="text">
                        Not registered yet? <span className="sign-in">Create an Account?</span>
                        </p>

                        <p className="rights">&copy; 2023 On Time. All rights reserved.</p>
                    </div>
                </div>
                <div className="image-signin">
                    <img src={image} alt="signin-image"/>
                </div>

            </div>
        </div>
    )
}