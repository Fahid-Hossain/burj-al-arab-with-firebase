// import React, { useContext } from 'react';
import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth/useAuth';
// import useFirebase from '../../hooks/useFirebase/useFirebase';


const Login = () => {
    const {googleSignIn}=useAuth();
    // useLocation for redirect location
    const location = useLocation();
    // useHistory for redirect page
    const history = useHistory();
    //redirect_url
    const redirect_url = location.state?.from || "/home";

    // googleSignIn handler
    const googleSignInHandler = ()=>{
        googleSignIn()
        .then(result=>{
            history.push(redirect_url);
        })
    }
    return (
        <div style={{width:"20%",margin:"auto"}}>
            <h1>Please Login</h1>
            <div>
                <form action="">
                    <input type="email" placeholder="Enter your email" />
                    <br />
                    <input type="password" placeholder="Enter your password" />
                    <br />
                    <button>Submit</button>
                    <br /><br />
                    <span><b>or </b></span>
                </form>
                   <button onClick={googleSignInHandler} type="submit">signIn with google</button>
            </div>
        </div>
    );
};

export default Login;