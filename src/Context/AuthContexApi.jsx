import { createContext, useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FORGET_PASSWORD } from "../API_URL";

const AuthContexProvider = createContext()
const AuthContexApi = ({ children }) => {
  const navigate = useNavigate()

  // sidebar toggole
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => { setIsSidebarOpen(!isSidebarOpen) };

  // logout
  const logout = () => {
    try {
      localStorage.clear();
      sessionStorage.clear();
      toast.success("Logout Success..!!");
      navigate("/login");
    } catch (error) {
      console.error("Error during logout:", error);
      toast.error("Logout failed. Please try again.");
    }
  };


  // forgot password
  const [forgotEmail, setForgotEmail] = useState("")
  const [message, setMessage] = useState([])

  const forgotPassword = async (event) => {
    event.preventDefault()
    try {
      const response = await fetch(`${FORGET_PASSWORD}`, {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: forgotEmail }),
      });
      const data = await response.json();
      if (!response.ok) {
        toast.error("Email Not Register..!!");
        return
      }

      if (response.ok) {
        toast.success("OTP Send Success..!!");
        setMessage(data)
        navigate("/send-otp")
      }

    } catch (error) {
      console.error(error);
      toast.success("Somthing went wrong");

    }
  }

  return (
    <AuthContexProvider.Provider value={{ isSidebarOpen, toggleSidebar, logout, forgotEmail, setForgotEmail, forgotPassword, message }}>
      {children}
    </AuthContexProvider.Provider>
  )
}

export default AuthContexApi
// coustom hooks
export const useAuthContext = () => {
  return useContext(AuthContexProvider)
};
