import { ThreeDots } from 'react-loader-spinner';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "tw-elements-react/dist/css/tw-elements-react.min.css";
import "tw-elements"
import "./App.css"


import PrivateRoute from './PrivateRoute.jsx';
import axios from 'axios';
import Login from './Pages/Auth/Login.jsx';
import Register from './Pages/Auth/Register.jsx';
import Forgot from './Pages/Auth/Forgot.jsx';
import SendOTP from './Pages/Auth/SendOTP.jsx';
import NewPassword from './Pages/Auth/NewPassword.jsx';
import Dashboard from './Pages/Dashboard/Dashboard.jsx';
import UserList from './Pages/Users/UserList.jsx';
import Designations from './Pages/Designations/Designations.jsx';
import Categories from './Pages/Categories/Categories.jsx';





function App() {
  const AUTH_TOKEN = localStorage.getItem('accessToken');
  axios.defaults.baseURL = import.meta.env.VITE_API_URL;
  axios.defaults.headers.common['Authorization'] = "Bearer " + AUTH_TOKEN;
  axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
  return (
    <>
      <ToastContainer position="top-right" autoClose={1000} />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<Forgot />} />
        <Route path="/send-otp" element={<SendOTP />} />
        <Route path="/reset-password" element={<NewPassword />} />

        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/user-list" element={<UserList />} />
          <Route path="/designations" element={<Designations />} />
          <Route path="/categories" element={<Categories />} />
        </Route>
      </Routes>
    </>
  )
}

export default App