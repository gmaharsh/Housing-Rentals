import React, { useState } from 'react';
import './Auth.css';

import { Link, useHistory } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';
import { auth, provider } from './firebase';
import { GoogleLoginButton } from "react-social-login-buttons";



function Auth() {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [{ }, dispatch] = useStateValue();
    
    
    const registerUsinggmail = e => {
        e.preventDefault();

        auth.signInWithPopup(provider)
            .then(result => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user
                })
                history.push('/property')
            })
            .catch((error) => alert(error.message));
    }



    const signIn = e => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/property')
            })
            .catch(error => {
                alert(error.message)
            })
    }

    const register = e => {
        e.preventDefault();
        
        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                //successfully created new user
                console.log(auth);
                if (auth) {
                    history.push('/');
                }
            })
            .catch(error => {
                alert(error.message)
            })

        //Do some fancy firebase register
    }


    


    //Do some fancy firebase register
    return (
        <div className="auth">
            <div className="login__container">
                <h1>Sign-in</h1>
                    <form>
                        <h5>E-mail</h5>
                        <input
                            type="text"
                            value={email}
                            onChange= {e => setEmail(e.target.value)}
                        />

                        <h5>Password</h5>
                        <input
                            type="password"
                            value={password}
                            onChange= {e => setPassword(e.target.value)}
                        />

                        <button
                            className="login__signInButton"
                            onClick={signIn}
                            type="submit"
                        >Sign In</button>
                    </form>
                    <button
                    className="login__registerButton"
                    onClick={register}
                    >Create your Account</button>
                    <button
                    className="login__registerButton"
                    onClick={registerUsinggmail}
                    >Login Using Gmail</button>
            </div>
        </div>
    )
}

export default Auth
