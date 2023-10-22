import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "./Form";
// import axios from "axios";

// const BaseURL = "http://localhost:5000/api/v1/login";

function Login() {
  
  const navigation = useNavigate();
  return (
    <div className="my-5">
      <h1 className="text-center" style={{ fontWeight: "700"}}>
        Login
      </h1>

      <form action="">
        <div class="form-group">
          <Form label="Email:" type="email" name="Email" placeholder="Enter Email" onChange={"handleChangeEmail"} />
          <br />
          <Form label="Password :" type="password" placeholder="Enter Password" name="password" onChange={"handleChangePassword"} />
          <p style={{fontSize: "1.3rem", marginTop: "25px", cursor: "pointer", color: "#0bbcf3", }} 
          onClick={() => {navigation("/register");}} > Don't have account? Register here ! </p>

        <button class="btn btn-outline-primary btn-lg" type="submit" onClick={"handleLogin"} >Login</button>
        </div>  
      </form>
    </div>
  );
}

export default Login;
