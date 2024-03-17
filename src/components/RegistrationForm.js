import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Navbar from "./Navbar";
import { toast } from "react-toastify";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    associateId: "",
    associateName: "",
    password: "",
    email: "",
  });

  // const [uploadStatus, setUploadStatus] = useState("");
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      formData.associateId === "" ||
      formData.email === "" ||
      formData.password === "" ||
      formData.associateName === ""
    ) {
      toast.error("Invalid credentials");
    } else {
      try {
        const response = await axios.post("/api/register", formData);
        // setUploadStatus(response.data);
        toast.success(response.data);
        // Handle success, show message, redirect, etc.
      } catch (error) {
        console.error("Registration failed:", error.response.data);
        // setUploadStatus("Registration failed: ID does not exists");
        toast.error(error.response.data);
        // Handle error, show error message, etc.
      }
    }

    setFormData({
      associateId: "",
      associateName: "",
      password: "",
      email: "",
    });
  };

  return (
    <>
      <div>
        <Navbar heading="Registration Page" name="Login" path="/" />
      </div>
      <div className="container mt-5">
        <div class="row justify-content-center">
          <div class="col-md-6">
            <div class="card">
              <div class="card-body">
                <form onSubmit={handleSubmit}>
                  <div class="form-group">
                    <label for="exampleInputEmail1">Username</label>
                    <input
                      class="form-control"
                      type="text"
                      id="associateId"
                      name="associateId"
                      placeholder="Enter the Username"
                      value={formData.associateId}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div class="form-group">
                    <label for="exampleInputEmail1">Associate Name</label>
                    <input
                      class="form-control"
                      type="text"
                      id="associateName"
                      name="associateName"
                      placeholder="Enter the Associate Name"
                      value={formData.associateName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input
                      class="form-control"
                      type="password"
                      id="password"
                      name="password"
                      placeholder="Enter the Password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">Email</label>
                    <input
                      class="form-control"
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Enter the Email ID"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="text-center">
                    <button type="submit" class="btn btn-primary">
                      Register
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* <p>{uploadStatus}</p> */}

        {/* <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <button type="submit">Register</button>
      </form> */}
      </div>
    </>
  );
};

export default RegistrationForm;
