import React from 'react';
import '../style/login.css';

const Login = () => {
    return (<>
    <div className="LoginForm">
      <h1>Welcome</h1>
      <div className="container">
        <div className="login-form">
          <div className="main-div">
            <div className="panel">
              <img
                src="https://mpng.subpng.com/20180328/dew/kisspng-computer-icons-social-media-blog-avatar-material-5abbf0d5b48680.3023774615222663257395.jpg"
                alt=""
              />
            </div>
            <form id="Login">
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail"
                  placeholder="Email Address"
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword"
                  placeholder="Password"
                />
              </div>
              <button type="submit" className="btn btn-primary">Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    </>)
}

export default Login;