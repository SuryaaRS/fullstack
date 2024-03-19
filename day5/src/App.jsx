import {Navigate, Route, Routes} from  "react-router-dom" 
import { lazy } from 'react'
import '../src/App.css'
import LazySuspense from "./components/LazySuspense.jsx"

const LazyLogin = lazy(()=> import ("./pages/auth/Login.jsx"))
const LazyRegister = lazy(()=> import ("./pages/auth/Register.jsx"))
const LazyForgotPassword = lazy(()=> import ("./pages/auth/ForgotPassword.jsx"))
const LazyUserLayout = lazy(()=> import ("./pages/user/UserLayout.jsx"))
const LazyNavbar= lazy(()=> import ("./components/navbar.jsx"))
const LazyJobForm= lazy(()=> import ("./components/jobform.jsx"))
const LazyHero= lazy(()=> import ("./components/Home/hero/Hero.jsx"))
const LazyFooter= lazy(()=> import ("./components/common/footer/Footer.jsx"))
const LazyAbout= lazy(()=> import ("./components/about/about.jsx"))
const LazyAdminlayout = lazy(()=> import ("./pages/admin/Adminlayout.jsx"))
const LazyHelp = lazy(()=> import ("./components/Help/Help.jsx"))
const LazyAdmindashboard = lazy(()=> import ("./pages/admin/AdminDashboard.jsx"))
const LazyUserdash = lazy(()=> import ("./pages/admin/UserDash.jsx"))
const LazyHelpdash = lazy(()=> import ("./pages/admin/HelpDash.jsx"))
const LazyJobdash = lazy(()=> import ("./pages/admin/JobDash.jsx"))
const LazyTermsAndConditions = lazy(()=> import ("./components/common/footer/termsandconditions.jsx"))



const UserRoutes=()=>{
  return(
    <LazyUserLayout>
    <Routes>
    <Route path="login" element = {<LazySuspense component={LazyLogin}/>}/>
    <Route path="register" element = {<LazySuspense component={LazyRegister}/>}/>
    <Route path="forgotpassword" element = {<LazySuspense component={LazyForgotPassword}/>}/>
    <Route path="navbar" element = {<LazySuspense component={LazyNavbar}/>}/>
    <Route path="jobform" element = {<LazySuspense component={LazyJobForm}/>}/>
    <Route path="hero" element = {<LazySuspense component={LazyHero}/>}/>
    <Route path="footer" element = {<LazySuspense component={LazyFooter}/>}/>
    <Route path="about" element = {<LazySuspense component={LazyAbout}/>}/>
    <Route path="help" element = {<LazySuspense component={LazyHelp }/>}/>
    <Route path="termsandcondition" element = {<LazySuspense component={LazyTermsAndConditions}/>}/>
    </Routes>
    </LazyUserLayout>
  )
}


const AdminRoutes=()=>{
  return(
    <LazyAdminlayout>
    <Routes>
    <Route path="admindashboard" element={<LazySuspense component={LazyAdmindashboard}/>}></Route>
    <Route path="userdash" element={<LazySuspense component={LazyUserdash}/>}></Route>
    <Route path="helpdash" element={<LazySuspense component={LazyHelpdash }/>}></Route>
<Route path="jobdash" element = {<LazySuspense component={LazyJobdash}/>}/>
    </Routes>
    </LazyAdminlayout>
  )
}


function App() {
  return (

    <Routes>
        <Route exact path="/" element={<Navigate to="/login"/>}></Route>
        <Route path="/login" element={<LazySuspense component={LazyLogin}/>}></Route>
        <Route path="/register" element={<LazySuspense component={LazyRegister}/>}></Route>
        <Route path="/forgotpassword" element={<LazySuspense component={LazyForgotPassword}/>}></Route>
        <Route path="/navbar" element={<LazySuspense component={LazyNavbar}/>}></Route>
        <Route path="/jobform" element={<LazySuspense component={LazyJobForm}/>}></Route>
        <Route path="/help" element={<LazySuspense component={LazyHelp }/>}></Route>
        <Route path="/about" element={<LazySuspense component={LazyAbout}/>}></Route>
        <Route path="/footer" element={<LazySuspense component={LazyFooter}/>}></Route>
        <Route path="/hero" element={<LazySuspense component={LazyHero}/>}></Route>
        {/* <Route path="/admind" element={<LazySuspense component={AdminDashboard}/>}></Route> */}
        <Route path="/admindashboard" element={<LazySuspense component={LazyAdmindashboard}/>}></Route>
        <Route path="/userdash" element={<LazySuspense component={LazyUserdash}/>}></Route>
        <Route path="/helpdash" element={<LazySuspense component={LazyHelpdash }/>}></Route>
        <Route path="/jobdash" element={<LazySuspense component={LazyJobdash }/>}></Route>
        <Route path="/termsandcondition" element={<LazySuspense component={LazyTermsAndConditions}/>}></Route>
              
        <Route path="/user/*" element={<LazySuspense component={UserRoutes}/>}></Route>
        <Route path="/admin/*" element={<LazySuspense component={AdminRoutes}/>}></Route>
        </Routes>
        )
      }
      
      export default App
