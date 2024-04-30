import "./signup.css";
import image from "../../assets/signup.png";
import {FcGoogle} from "react-icons/fc";
import {AiOutlineEye, AiFillCheckCircle} from "react-icons/ai";

export const Signup = () => {
    return (
        <div className="signup">
            <div className="contentt">
                <div className="image-signup">
                    <img src={image} alt="signup-image"/>
                </div>
                <div className="sign">
                    <h1>SignUp</h1>
                    <p>Enter your email and password to sign in!</p>

                    <button className="Signup-with-Google"> 
                        <FcGoogle/> Signup with Google
                    </button>


                    <div className="hr">
                        <hr/>
                        <p className="or">or</p>
                        <hr/>
                    </div>
                    <div className="form">
                        <form action="">
                            <h2> Full Name*</h2>
                            <input type="text" placeholder="Enterr your Name"/>
                            <h2>Email*</h2>
                            <input type="email" placeholder="Enter your email"/>
                            <h2>Phone*</h2>
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
                        <input type="button" value="Sign Up" className="submit"/>
                        <p className="text">
                            Already Have Account ? <span className="sign-in">Sign in</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
