
import { MdMail } from "react-icons/md";
import { FaUserLock } from "react-icons/fa6";

import { TbLockCheck } from "react-icons/tb";


import '../../assets/css/Login.css'
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate=useNavigate();
  const handlesignin=()=>
  {
    navigate("/hero")
  }
  const handleLogin=()=>
  {
    navigate("/login")
  }
  return (
    <div className="logincontainer">

    <div className='wrapper'>
      <form action="">
        <h1>Register</h1>
        <div className="input-box">
          <input type="text" placeholder='Username' required/>
          <MdMail className="icon"/>
        </div>
        <div className="input-box">
          <input type="password" placeholder='Password' required/>
          <FaUserLock className="icon"/>
        </div>
        <div className="input-box">
          <input type="password" placeholder='ConfirmPassword' required/>
          <TbLockCheck className="icon" />
        </div>  
        {/* <div className="remember-forgot">
          <label><input type="checkbox" />Remember me</label>
          <a href="#">Forgot password?</a>
          
        </div> */}

        <button type="submit" onClick={handlesignin}>Signin</button>

        <div className="register-link">
          <p>Already have an account? <a href="#" onClick={handleLogin}>Login</a></p>
        </div>
      </form>

    </div>
        </div>
  )
}

export default Login
