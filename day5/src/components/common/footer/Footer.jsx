import React from "react"
import { footer } from "../../data/Data"
import "../../../assets/css/footer.css"
import { useNavigate } from "react-router-dom";
import { AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai"
import { BsFacebook } from "react-icons/bs"
import { RiInstagramFill } from "react-icons/ri"
const Footer = () => {
  const navigate = useNavigate();

  const handlecontact= () => {
    navigate("/help")
  }
  const handlefooter=()=>
  {
    navigate("/termsandcondition")
  }
  return (
    <>
      <section className='footerContact'>
        <div className='container'>
          <div className='send flex'>
            <div className='text'>
              <h1>Do You Have Questions ?</h1>
              <p>We'll help you to grow your career and growth.</p>
            </div>
            <button className='btn5' onClick={handlecontact}>Contact Us Today</button>
          </div>
        </div>
      </section>

      <footer>
        <div className='container'>
          <div className='box'>
            <div className='logo'>
             
              <h2>Do You Need Help With Anything?</h2>
              <p>Receive updates, hot deals, tutorials, discounts sent straignt in your inbox every month</p>

              <div className='input flex'>
                <input type='text' placeholder='Email Address' />
                <button className="btn9">Subscribe</button>
              </div>
            </div>
          </div>

          {footer.map((val) => (
            <div className='box'>
              <h3>{val.title}</h3>
              <ul>
                {val.text.map((items) => (
                  <li> {items.list} </li>
                ))}
              </ul>
            </div>
          ))}
          
          <div className='social'>
    <div className="footericon">
          <a href={"https://accountscenter.instagram.com/"} target="_blank" rel="noopener noreferrer">
         <BsFacebook  />
      
         </a>
         <a href={"https://www.facebook.com/login.php"} target="_blank" rel="noopener noreferrer">
         <RiInstagramFill />
         </a>
         <a href={"https://twitter.com/i/flow/login"} target="_blank" rel="noopener noreferrer">
         <AiFillTwitterCircle />
         </a>
         <a href={"https://in.linkedin.com/"} target="_blank" rel="noopener noreferrer">
         <AiFillLinkedin  />
         </a>
    </div>
        </div>
          
        </div>
        <div className="Terms" onClick={handlefooter}>
          Terms and Conditions
        </div>
      </footer>
      <div className='legal'>
        <span>© 2024 Portal. Designd By JOBQUEST.</span>
      </div>
    </>
  )
}

export default Footer
