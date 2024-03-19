
import './form.css';

import Swal from 'sweetalert2';


// Define a custom CSS class for the black card
const backCardStyle = {
  background: 'lightgrey',
  color: 'black', // Text color is set to black for better visibility
};

const MyFormUser = () => {
 

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <div className="card w-25" style={backCardStyle}>
        <div className="card-body">
          <div className="container">
            <h2 className="text-center">Product Form</h2>
            <form>
              <div className="mb-3">
                <label htmlFor="vendorId" className="form-label">Product Id</label>
                <input type="text" className="form-control" id="vendorId" />
              </div>
              <div className="mb-3">
                <label htmlFor="farmName" className="form-label">Product Price</label>
                <input type="text" className="form-control" id="farmName" />
              </div>
              <div className="mb-3">
                <label htmlFor="farmDesc" className="form-label">Product Name</label>
                <input  type="text" className="form-control" id="farmDesc" />
              </div>
              <div className="mb-3">
                <label htmlFor="vendorNum" className="form-label">Category</label>
                <input  type="text" className="form-control" id="vendorNum" />
              </div>
              <div className="mb-3">
                <label htmlFor="vendorNum" className="form-label">Availability Status</label>
                <input  type="text" className="form-control" id="vendorNum" />
              </div>
              <div className="mb-3">
                <label htmlFor="vendorNum" className="form-label">Category Id</label>
                <input  type="text" className="form-control" id="vendorNum" />
              </div>
              <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
              </div>
              <button type="submit" className="btn btn-primary" onClick={handlesaveupdate}>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyFormUser;
