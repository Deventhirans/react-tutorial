import React from "react";
import { useParams } from "react-router-dom";

function User(){
   const {id}= useParams()
    return (
    <><h1>User profile Page</h1>
    <p>User ID is<b>{id}</b></p>
    </>
    )
}

export default User;
