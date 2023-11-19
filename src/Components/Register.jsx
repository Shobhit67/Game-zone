import React, { useState } from "react";
import Form from "./Form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const [Name, SetName] = useState("");
  const [Password, SetPassword] = useState("");
  const [Email, SetEmail] = useState("");
  const [error, setError] = useState(null); // State to handle errors
  const navigation = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:8000/register", {
        Name,
        Email,
        Password,
      });

      if (response.data === "exist") {
        setError("User Already Exists");
      } else if (response.data === "notexists") {
        navigation("/login", { state: { id: Email } });
      }
    } catch (error) {
      console.error("Registration error:", error);
      setError("An error occurred during registration");
    } finally {
      // Reset form fields
      SetEmail("");
      SetName("");
      SetPassword("");

    }
  }

  return (
    <div className="outer-div">
      <h1 className="text-center" style={{ fontWeight: "600", fontSize: "4rem"}}>
        Create New Account
      </h1>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <Form
            label="Name:"
            type="text"
            name="Name"
            placeholder="Enter Full Name"
            value={Name}
            onChange={(e) => SetName(e.target.value)}
          />
          <br />
          <Form
            label="Email:"
            type="email"
            name="Email"
            placeholder="Enter Email"
            value={Email}
            onChange={(e) => SetEmail(e.target.value)}
          />
          <br />
          <Form
            label="Password :"
            type="password"
            placeholder="Enter Password"
            name="password"
            value={Password}
            onChange={(e) => SetPassword(e.target.value)}
          />
          <br />
          <button className="btn btn-outline-primary btn-lg" type="submit">
            Register
          </button>

          {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
      </form>
    </div>
  );
}

export default Register;
