import React from "react";
import "./style.css";
const Login = () => {
  return (
    <div className="login">
      <h1>Welcome back Deepu</h1>
      <form>
        <input type="text" placeholder="username" />
        <input type="password" placeholder="password" />
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
