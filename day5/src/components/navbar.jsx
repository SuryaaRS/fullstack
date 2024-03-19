import { useState } from 'react';
import '../assets/css/navbar.css';
import { useNavigate } from 'react-router-dom';
// import Footer from './footer';
import { IoIosLogOut } from "react-icons/io";
import Footer from './common/footer/Footer';
import { IoPersonCircle } from "react-icons/io5";
import Swal from "sweetalert2";
const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("Search query:", searchQuery);
    // Add further logic here, such as sending the search query to the server or updating state
  };

  const navigate = useNavigate();

  const handlehome = () => {
    navigate("/hero")
  }

  const handleService = () => {
    navigate("/service")
  }

  const handleAbout = () => {
    navigate("/about")
  }

  const handleContact = () => {
    navigate("/help")
  }

  const handleform = () => {
    navigate("/jobform")
  }
  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will be logged out.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, log me out",
      customClass: {
        popup: "custom-size",
        title: "swal2-title",
        content: "swal2-content",
        confirmButton: "swal2-confirm",
        cancelButton: "swal2-cancel"
      }
    }).then((result) => {
      if (result.isConfirmed) {
        // If user confirms, display success message
        Swal.fire({
          title: "Logged Out!",
          text: "You have been successfully logged out.",
          icon: "success",
          customClass: {
            title: "swal2-title",
            content: "swal2-content",
            confirmButton: "swal2-confirm"
          }
        }).then(() => {
          // After displaying the success message, navigate to the login page
          navigate("/login");
        });
      }
    });
  };
  return (
    <>
      <nav className="navbar">
        <ul className="navbar-list">
          <li className="navbar-item">
            <a href="#" className="navbar-link" onClick={handlehome}>Home</a>
          </li>
          <li className="navbar-item">
            <a href="#" className="navbar-link" onClick={handleAbout}>About</a>
          </li>
          
          <li className="navbar-item">
            <a href="#" className="navbar-link" onClick={handleContact}>Contact</a>
          </li>
        </ul>
        <form onSubmit={handleSearchSubmit} className="search-form">
        <div className="logouticon1">
            <IoPersonCircle />
            </div>
          <div className='logouticon' onClick={handleLogout}>
          <IoIosLogOut />
          </div>
      
        </form>
      </nav>

      <div className="cards-container">
        {/* First row */}
        <div className="work-card">
          <h2 className="work-title">Software Engineer</h2>
          <h3 className="work-company">ABC Tech</h3>
          <p className="work-location">Location: New York, USA</p>
          <p className="work-description">We are looking for a talented software engineer to join our team.</p>
          <button className="apply-button" onClick={handleform}>Apply</button>
        </div>

        <div className="work-card">
          <h2 className="work-title">Web Developer</h2>
          <h3 className="work-company">XYZ Solutions</h3>
          <p className="work-location">Location: San Francisco, USA</p>
          <p className="work-description">Join our team as a web developer and work on exciting projects.</p>
          <button className="apply-button" onClick={handleform}>Apply</button>
        </div>

        <div className="work-card">
          <h2 className="work-title">Data Scientist</h2>
          <h3 className="work-company">Data Insights Inc.</h3>
          <p className="work-location">Location: London, UK</p>
          <p className="work-description">Seeking a data scientist to analyze and interpret complex datasets.</p>
          <button className="apply-button" onClick={handleform}>Apply</button>
        </div>

        {/* Second row */}
        <div className="work-card">
          <h2 className="work-title">UX Designer</h2>
          <h3 className="work-company">Design Innovations</h3>
          <p className="work-location">Location: Paris, France</p>
          <p className="work-description">Join our team to create delightful user experiences.</p>
          <button className="apply-button" onClick={handleform}>Apply</button>
        </div>

        <div className="work-card">
          <h2 className="work-title">Product Manager</h2>
          <h3 className="work-company">Product Ventures</h3>
          <p className="work-location">Location: Berlin, Germany</p>
          <p className="work-description">Looking for an experienced product manager to lead our team.</p>
          <button className="apply-button" onClick={handleform}>Apply</button>
        </div>

        <div className="work-card">
          <h2 className="work-title">Frontend Developer</h2>
          <h3 className="work-company">Tech Solutions Ltd.</h3>
          <p className="work-location">Location: Sydney, Australia</p>
          <p className="work-description">Seeking a frontend developer to work on cutting-edge projects.</p>
          <button className="apply-button" onClick={handleform}>Apply</button>
        </div>

        <div className="work-card">
          <h2 className="work-title">Graphic Designer</h2>
          <h3 className="work-company">Artistry Studios</h3>
          <p className="work-location">Location: Mumbai, India</p>
          <p className="work-description">Join our team to create stunning visuals and graphics.</p>
          <button className="apply-button" onClick={handleform}>Apply</button>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Navbar;
