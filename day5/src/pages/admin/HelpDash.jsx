
import { SidebarDataAdmin } from './SidebarDataAdmin';
import './AdminDashboard.css'; // Import your CSS for styling


const HelpDash = () => {
  
  return (
    <>
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
        </ul>
      </nav>
      <div id='navbarcard'>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Home</a>
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
          <div className="row">
            <table className="table table-striped table-bordered">
              <thead>
                <tr>
                  <th>User ID</th>
                  <th>Help Name</th>
                  <th>Help Email</th>
                  <th>Help Message</th>
                </tr>
              </thead>
              {/* <tbody>
               
                 
              </tbody> */}
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default HelpDash;
