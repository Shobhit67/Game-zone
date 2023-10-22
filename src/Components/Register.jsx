import React, { useState } from "react";
import Form from "./Form";
// import axios from "axios";

// const BaseURL = "http://localhost:5000/api/v1/register";

function Register() {

  return (
    <div className="my-5">
      <h1 className="text-center" style={{ fontWeight: "700", }}>
        Create New Account
      </h1>

      <form action="">
        <div class="form-group">
          <Form label="Name:" type="text" name="Name" placeholder="Enter Full Name" onChange={"handleChangeName"} /> <br />
          <Form label="Email:" type="email" name="Email" placeholder="Enter Email" onChange={"handleChangeEmail"} /> <br />
          <Form label="Password :" type="password" placeholder="Enter Password" name="password" onChange={"handleChangePassword"} /> <br />
          <button class="btn btn-outline-primary btn-lg" type="submit" onClick={"handleRegister"} > Register </button>
        </div>
      </form>
    </div>  
  );
}
export default Register;
