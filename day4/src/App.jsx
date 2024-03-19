import {Navigate, Route, Routes} from  "react-router-dom" 
import { lazy } from 'react'
import '../src/App.css'
import LazySuspense from "./components/LazySuspense.jsx"
import Navbar from "./components/navbar.jsx"
import jobform from "./components/jobform.jsx"
import HelpPage from "./components/Help/Help.jsx"
import About from "./components/about/about.jsx"
import Footer from "./components/common/footer/Footer.jsx"
import Hero from "./components/Home/hero/Hero.jsx"
const LazyLogin = lazy(()=> import ("./pages/auth/Login.jsx"))
const LazyRegister = lazy(()=> import ("./pages/auth/Register.jsx"))
const LazyForgotPassword = lazy(()=> import ("./pages/auth/ForgotPassword.jsx"))
const LazyUserLayout = lazy(()=> import ("./pages/user/UserLayout.jsx"))
const LazyAdminlayout = lazy(()=> import ("./pages/admin/Adminlayout.jsx"))
const LazyAdmindashboard = lazy(()=> import ("./pages/admin/dashboard.jsx"))


const UserRoutes=()=>{
  return(
    <LazyUserLayout>
    <Routes>
    <Route path="login" element = {<LazySuspense component={LazyLogin}/>}/>
    <Route path="register" element = {<LazySuspense component={LazyRegister}/>}/>
    <Route path="forgotpassword" element = {<LazySuspense component={LazyForgotPassword}/>}/>
    </Routes>
    </LazyUserLayout>
  )
}


const AdminRoutes=()=>{
  return(
    <LazyAdminlayout>
    <Routes>
    <Route path="admindashboard" element={<LazySuspense component={LazyAdmindashboard}/>}></Route>
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
        <Route path="/admindashboard" element={<LazySuspense component={LazyAdmindashboard}/>}></Route>
        <Route path="/navbar" element={<LazySuspense component={Navbar}/>}></Route>
        <Route path="/jobform" element={<LazySuspense component={jobform}/>}></Route>
        <Route path="/help" element={<LazySuspense component={HelpPage}/>}></Route>
        <Route path="/about" element={<LazySuspense component={About}/>}></Route>
        <Route path="/footer" element={<LazySuspense component={Footer}/>}></Route>
        <Route path="/hero" element={<LazySuspense component={Hero}/>}></Route>

        
        <Route path="/user/*" element={<LazySuspense component={UserRoutes}/>}></Route>
        <Route path="/admin/*" element={<LazySuspense component={AdminRoutes}/>}></Route>
        </Routes>
        )
      }
      
      export default App
