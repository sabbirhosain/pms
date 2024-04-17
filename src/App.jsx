import { Suspense, lazy } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "tw-elements-react/dist/css/tw-elements-react.min.css";
import "tw-elements"
import PrivateRoute from './PrivateRoute.jsx';


const Login = lazy(() => import("./Pages/Auth/Login.jsx"))
const Register = lazy(() => import("./Pages/Auth/Register.jsx"))
const ForgotPassword = lazy(() => import("./Pages/Auth/Forgot.jsx"))
const SendOTP = lazy(() => import("./Pages/Auth/SendOTP.jsx"))
const NewPassword = lazy(() => import("./Pages/Auth/NewPassword.jsx"))
const Dashboard = lazy(() => import("./Pages/Dashboard/Dashboard.jsx"))
const UserList = lazy(() => import("./Pages/Users/UserList.jsx"))

const LazyLoaderRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/send-otp" element={<SendOTP />} />
      <Route path="/reset-password" element={<NewPassword />} />

      <Route element={<PrivateRoute />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/user-list" element={<UserList />} />
      </Route>
    </Routes>
  )
}


function App() {
  return (
    <>
      <ToastContainer position="top-right" autoClose={1000} />
      <Suspense fallback={
        <div className="h-screen flex items-center justify-center">
          <ThreeDots visible={true} height="30" width="60" color="#25D366" radius="9" ariaLabel="three-dots-loading" wrapperStyle={{}} wrapperClass="" />
        </div>
      }>
        <LazyLoaderRoutes />
      </Suspense>
    </>
  )
}

export default App