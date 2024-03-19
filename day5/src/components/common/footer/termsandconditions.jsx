
import { useNavigate } from 'react-router-dom';
import '../../../assets/css/termsandcondition.css'

const termsandconditions= () => {
const navigate=useNavigate();
const handleterms=()=>{
    navigate("/hero")
}

  return (
    <div className='terms-whole'>

    <div className="terms-card-container">
      <div className="terms-card">
        <div className="terms-card-content">
          <h1 className="terms-heading">Terms and Conditions</h1>
          <p>Welcome to OnlineJobManagement!</p>
          
          <h2 className="terms-subheading">1. Acceptance of Terms</h2>
          <p className="terms-paragraph">
            By accessing or using OnlineJobManagement, you agree to comply with and be bound by these terms and conditions.
            If you do not agree to these terms, please do not use the platform.
          </p>
          
          <h2 className="terms-subheading">2. Services Provided</h2>
          <p className="terms-paragraph">
            OnlineJobManagement provides a platform for users to manage job listings, applications, and related activities.
            We do not guarantee the accuracy or availability of job listings, nor do we guarantee employment.
          </p>
          
          <h2 className="terms-subheading">3. User Responsibilities</h2>
          <p className="terms-paragraph">
            Users are responsible for the accuracy of the information they provide on OnlineJobManagement.
            Users must not engage in any activity that may disrupt the platform or compromise the security of other users.
          </p>
          
          <h2 className="terms-subheading">4. Privacy Policy</h2>
          <p className="terms-paragraph">
            Our Privacy Policy governs the collection, use, and disclosure of personal information provided by users.
            By using OnlineJobManagement, you consent to the terms of our Privacy Policy.
          </p>
          
          <h2 className="terms-subheading">5. Modification of Terms</h2>
          <p className="terms-paragraph">
            OnlineJobManagement reserves the right to modify these terms and conditions at any time.
            Users will be notified of any changes, and continued use of the platform constitutes acceptance of the modified terms.
          </p>
          
          <h2 className="terms-subheading">6. Termination</h2>
          <p className="terms-paragraph">
            OnlineJobManagement reserves the right to terminate or suspend access to the platform for users who violate these terms and conditions.
          </p>
          
          <h2 className="terms-subheading">7. Contact Us</h2>
          <p className="terms-paragraph">
            If you have any questions or concerns about these terms and conditions, please contact us at support@onlinejobmanagement.com.
          </p>
          
          <h2 className="terms-subheading">Terms and Conditions</h2>
          <p className="terms-paragraph">
            This section contains the detailed terms and conditions of using OnlineJobManagement.
            Please read through them carefully before proceeding.
          </p>
          
          <p className="terms-last-updated">
            Last updated: [Date]
          </p>
        </div>
        <div className="terms-card-footer">
          <button className="agree-button" onClick={handleterms}>I Agree</button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default termsandconditions;
