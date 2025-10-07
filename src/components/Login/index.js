import React, { useState } from "react";
import Swal from "sweetalert2";

const Login = ({ setIsAuthenticated }) => {
  const validUsers = [
    { email: "aris.angelo.don@outlook.com", password: "TheArisAngelo" },
    { email: "donflorentino2@gmail.com", password: "TAA2025" },
    { email: "admin@gmail.com", password: "admin123" },
  ];

  const [email, setEmail] = useState("aris.angelo.don@outlook.com");
  const [password, setPassword] = useState("TheArisAngelo");

  const handleLogin = (e) => {
    e.preventDefault();

    const userExists = validUsers.some(
      (user) => user.email === email && user.password === password
    );

    if (userExists) {
      Swal.fire({
        timer: 1500,
        showConfirmButton: false,
        willOpen: () => {
          Swal.showLoading();
        },
        willClose: () => {
          localStorage.setItem("is_authenticated", true);
          setIsAuthenticated(true);

          Swal.fire({
            icon: "success",
            title: "Successfully logged in!",
            showConfirmButton: false,
            timer: 1500,
          });
        },
      });
    } else {
      Swal.fire({
        timer: 1500,
        showConfirmButton: false,
        willOpen: () => {
          Swal.showLoading();
        },
        willClose: () => {
          Swal.fire({
            icon: "error",
            title: "Error!",
            text: "Incorrect email or password.",
            showConfirmButton: true,
          });
        },
      });
    }
  };

  return (
    <div className="wrapper">
      <div className="small-container">
        <form onSubmit={handleLogin}>
          <h1>Admin Login</h1>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="aris.angelo.don@outlook.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            placeholder="qwerty"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input style={{ marginTop: "12px" }} type="submit" value="Login" />
        </form>
      </div>
    </div>
  );
};

export default Login;
