import React, { useState, useEffect, useRef,useContext } from 'react';
import AuthContext from '../context/AuthProvider';
import axios from '../api/axios';
const LOGIN_URL = '/auth';

function Login() {
    const {setAuth} = useContext(AuthContext);
    const emailRef = useRef();
    const errRef = useRef();

    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        emailRef.current.focus();
    }, []);

    useEffect(() => {
        setErrMsg('');
    }, [email, pwd]);

    async function handleSubmit(e) {
        e.preventDefault();
        
        try {
            const response = await axios.post(LOGIN_URL, 
                JSON.stringify({email , pwd}),
                {
                    headers: { 'Content-Type': 'application/json'},
                    withCredentials: true
                }
                );
                console.log(JSON.stringify(response?.data));
                const accessToken = response?.data?.accessToken
                const roles = response?.data?.roles;
                setAuth({email , pwd , roles , accessToken})
                setEmail('');
                setPwd('');
                setSuccess(true);
        } catch (err) {
            if(!err?.response){
                setErrMsg("No server response")
            } else if (err.response?.status === 400){
                setErrMsg("Missing email or Password")
            } else if (err.response?.status === 401){
                setErrMsg("Unauthorized");
            } else {
                setErrMsg("Login failed");
            }
            errRef.current.focus();
        }

        
    }

    return (
        <div>
        {success ? (
            <section>
            <h1>You are logged in!</h1>
            <br />
            <p>
                <a href="#">Go to Home</a>
            </p>
            </section>
        ) : (
            <section>
            <p
                ref={errRef}
                className={errMsg ? "errmsg" : "offscreen"}
                aria-live="assertive"
            >
                {errMsg}
            </p>
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email:</label>
                <input
                type="email"
                id="email"
                ref={emailRef}
                autoComplete="off"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
                />
                <label htmlFor="password">Password:</label>
                <input
                type="password"
                id="password"
                autoComplete="off"
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
                required
                />
                <button>Sign In</button>
            </form>
            <p>
                Haven't had any account? <br />
                <span className="toRegisterPage">
                {/* router */}
                <a href="http://localhost:5173/">Sign Up</a>
                </span>
            </p>
            </section>
        )}
        </div>
    );
}

export default Login;
