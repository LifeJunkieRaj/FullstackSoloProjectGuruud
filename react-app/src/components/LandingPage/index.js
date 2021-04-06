import React from "react";
import { Redirect, useHistory } from "react-router-dom";
// import closeup_cafe from "../../site-images/closeup_cafe.jpeg"
import "./LandingPage.css";

const LandingPage = ({ authenticated }) => {
    const history = useHistory();
    if (authenticated) {
        return <Redirect to="/home" />
    }

    return (
        <>
            <div className="landing-background-container">
                    <div className="landing-button-container">
                        <div onClick={() => history.push("/login")}
                            className="landing-button-div login-button"
                        >Log In
                        </div>
                        <div onClick={() => history.push("/signup")}
                            className="landing-button-div login-button"
                        >Sign Up
                        </div>
                    </div>
                    <div className="landing-container">
                        <div className="landing-container-left">
                            <div className="landing-shopping-bag">
                                <i className="fas fa-shopping-bag"></i>
                            <div/>
                            <div className="landing-site-title">
                                <h1>guruud</h1>
                            </div>
                            <div className="landing-tagline">
                                <p>Tired of the 9 to 5 grind.  Want to stop making somebody else rich and be your own boss but don't know where to start... Get guruud!!!</p>
                            </div>
                            <div className="landing-color-divider"></div>
                            <div className="landing-message">
                                <h1>The only place online where the budding entrepreneurs of tomorrow, can get the experienced advice from the successful entrepreneurs of yesterday and today!</h1>
                            </div>
                        </div>
                        <div className="landing-container-right">
                            <div className="landing-logo-img">
                                {/* <img src={closeup_cafe} alt=""/> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
   )
};

export default LandingPage;