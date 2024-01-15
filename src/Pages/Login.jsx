import React from 'react'
import '../Pages/CSS/LoginSignup.css'
import image from './shoppers.jpg'
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <div>
      <div id="login-page">
        <div className="login">
          <h2 className="login-title">Login</h2>
          <form className="form-login">
            <label htmlFor="email">E-mail</label>
            <div className="input-email">
              <i className="fas fa-envelope icon"></i>
              <input type="email" name="email" placeholder="Enter your e-mail" required />
            </div>
            <label htmlFor="password">Password</label>
            <div className="input-password">
              <i className="fas fa-lock icon"></i>
              <input type="password" name="password" placeholder="Enter your password" required />
            </div>
            <div className="checkbox">
              <label htmlFor="remember">
                <input type="checkbox" name="remember" />
                Remember me
              </label>
            </div>
            <button type="submit"><i className="fas fa-door-open"></i> Sign in</button>
          </form>

          <p className="message">Not registered? <Link to='/signup'>Create an account</Link></p>
        </div>
        <div className="background">
          <img src={image} alt='Shopper' width="1000" height="631" />
        </div>
      </div>
    </div>
  )
}

export default Login