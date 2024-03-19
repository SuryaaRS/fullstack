
import { MdMail } from "react-icons/md";


import { FaLock } from "react-icons/fa";
// import { IoIosMail } from "react-icons/io";


import '../../assets/css/Login.css'
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate=useNavigate();
  const handleLogin=()=>
  {
    navigate("/hero")
  }
  const handlesignin=()=>
  {
    navigate("/register")
  }
  const handleforgotpassword=()=>
  {
    navigate("/forgotpassword")
  }
  return (
    <div className="logincontainer">

    <div className='wrapper'>
      <form action="">
        <h1>Login</h1>
        <div className="input-box">
          <input type="email" placeholder='EmailAddress' required/>
          <MdMail className="icon"/>
        </div>
        <div className="input-box">
          <input type="password" placeholder='Password' required/>
          <FaLock className="icon"/>
        </div>
        <div className="remember-forgot">
          <label><input type="checkbox" />Remember me</label>
          <a href="#" onClick={handleforgotpassword}>Forgot password?</a>
          
        </div>

        <button type="submit" onClick={handleLogin}>Login</button>

        <div className="register-link">
          <p>Don't have an account? <a href="#" onClick={handlesignin}>Register</a></p>
        </div>
      </form>

    </div>
    </div>
  )
}

export default Login
