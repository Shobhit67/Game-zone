import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "./Form";
import axios from "axios";

function Login() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const navigation = useNavigate();

  async function handleLogin(event) {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:8000/login", {
        Email,
        Password,
      });

      const { token, message } = response.data;

      if (token) {
        // Store the token in localStorage or sessionStorage
        localStorage.setItem("token", token);

        // Redirect to home or any other authenticated route
        navigation("/home");
      } else {
        // Display alert if email and password don't match
        alert(message || "Invalid email or password");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred during login");
    }
  }
  return (
    <div className="outer-div">
      <h1 className="text-center" style={{ fontWeight: "600", fontSize: "5rem"}}>
        Login
      </h1>

      <form action="POST">
        <div class="form-group">
          <Form
            label="Email:"
            type="email"
            name="Email"
            placeholder="Enter Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}          />
          <br />
          <Form
            label="Password :"
            type="password"
            placeholder="Enter Password"
            name="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}          />
          <p
            style={{
              fontSize: "1.3rem",
              marginTop: "25px",
              cursor: "pointer",
              color: "#0bbcf3",
            }}
            onClick={() => {
              navigation("/register");
            }}
          >
            Don't have account? Register here !
          </p>

          <button
            class="btn btn-outline-primary btn-lg"
            type="submit"
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;

// Shobhit Goyal
// 12345

