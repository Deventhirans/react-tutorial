import React from "react"
import { useNavigate } from "react-router-dom";

function Login(){
 const Navigate = useNavigate();
    function onSubmit(){
        Navigate('/Dashboard')


    }
    return(
        <>
    <h1>Login page</h1>
    <button onClick={onSubmit}> Login</button>
    </>
    ); 
}

export default Login;