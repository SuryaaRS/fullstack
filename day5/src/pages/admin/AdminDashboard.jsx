
import { SidebarDataAdmin } from './SidebarDataAdmin';
import './AdminDashboard.css';
import { BiLogOutCircle } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";
const AdminDashboard = () => {
  const navigate=useNavigate();
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

  const productDetails = 7;  
  const vendorDetails = 7; 


  return (
    <>
      <div id='overview'>
        <nav className="sidebardash">
          <ul className="nav-menu">
            {SidebarDataAdmin.map((item, index) => (
              <li key={index} className="nav-item">
                <a href={item.path} className="nav-link">
                  {item.icon}
                  <span className="nav-text">{item.title}</span>
                </a>
              </li>
            ))}
            <li className="nav-item" style={{ marginTop: '360px' }}>
              <a href="#" className="nav-link">
                <BiLogOutCircle size={30} />
                <span className="nav-text" onClick={handleLogout}>Log Out</span>
              </a>
            </li>
          </ul>
        </nav>

        <div id='navbarcard'>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item dropdown">
                  </li>
                </ul>
                <form className="d-flex">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                  <div id='searchbtn'>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                  </div>
                </form>
              </div>
            </div>
          </nav>

          <div id='spacetable'>
            <div className="containerdash">
              <div className="row justify-content-center">
                <div className="col-md-2">
                  <div className='black-card carddash'>
                    <h5 className="carddash-title">Number of Applicants</h5>
                    <p className="carddash-text">{productDetails}</p>
                  </div>
                </div>

                <div className="col-md-2">
                  <div className='black-card carddash'>
                    <h5 className="carddash-title">Number of Helps/Request</h5>
                    <p className="carddash-text">{vendorDetails}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
