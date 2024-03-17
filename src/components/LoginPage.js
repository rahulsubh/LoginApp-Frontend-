import "bootstrap/dist/css/bootstrap.min.css";
import "./css/Style.css";
import { toast } from "react-toastify";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import axios from "axios";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const [error, setError] = useState("");
  const [role, setRole] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (username === "admin" && password === "admin") {
      // Redirect to the Excel upload page
      // window.location.href = '/upload-excel';
      setRole("admin");
      console.log(role);
      navigate("/upload", { state: { role: "admin" }, replace: true });
      toast.success("Login Successful");
    } else if (username === "" || password === "") {
      toast.error("Invalid username or password");
    } else {
      try {
        const response = await axios.post(
          "http://localhost:8080/api/operation",
          { username: username, password: password }
        );

        setRole("user");

        navigate("/upload", { state: { role: "user" }, replace: true });

        toast.success(response.data);
      } catch (error) {
        // Display an error message
        // setError("Invalid username or password");
        // navigate("/upload", { replace: false });
        console.error("Login failed:", error.response.data);
        toast.error("Login Failed");
      }
    }
  };

  return (
    <>
      <div>
        <Navbar heading="Login Page" name="Register" path="/register" />
      </div>

      <div className="container mt-5">
        <div class="row justify-content-center">
          <div class="col-md-6">
            <div class="card">
              <div class="card-body">
                <form onSubmit={handleSubmit}>
                  <div class="form-group">
                    <label for="exampleInputEmail1">Username</label>
                    <div className="input-group">
                      <input
                        class="form-control"
                        type="text"
                        placeholder="Enter the Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                      />
                      <div className="input-group-append">
                        <span className="input-group-text">
                          <i className="fas fa-user"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <div className="input-group">
                      <input
                        class="form-control"
                        type="password"
                        placeholder="Enter the Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                      <div className="input-group-append">
                        <span className="input-group-text">
                          <i className="fas fa-lock"></i>
                        </span>
                      </div>
                    </div>

                    {/* <small id="emailHelp" class="form-text text-muted">
              We'll never share your password with anyone else.
            </small> */}
                  </div>
                  <div className="text-center">
                    <button type="submit" class="btn btn-primary">
                      Login
                    </button>
                  </div>
                  {/* <div className="text-center m-3">
            <Link className="btn btn-warning" to={`/forgotpassword`}>
              Forgot Password
            </Link>
          </div> */}
                </form>
              </div>
              <div class="card-footer text-center">
                <Link className="btn btn-link" to={`/forgotpassword`}>
                  Forgot Password ?
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
