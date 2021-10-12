// import React, { useContext } from 'react';
import React from 'react';
import useAuth from '../../hooks/useAuth/useAuth';
// import useFirebase from '../../hooks/useFirebase/useFirebase';


const Login = () => {
    const {googleSignIn}=useAuth();
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
                   <button onClick={googleSignIn} type="submit">signIn with google</button>
            </div>
        </div>
    );
};

export default Login;