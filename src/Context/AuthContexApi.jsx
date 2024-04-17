import { createContext, useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AuthContexProvider = createContext()
const AuthContexApi = ({ children }) => {
  const navigate = useNavigate()

  //If the user is already logged in, they cannot go back to the login page
  // useEffect(() => {
  //   const token = localStorage.getItem("accessToken");
  //   token ? navigate("/dashboard") : navigate("/login")
  // }, []);

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
  const forgotPassword = async (event) => {
    event.preventDefault()
    try {
      const response = await fetch("https://pms24.pythonanywhere.com/api/forget-password/", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: forgotEmail }),
      });
      const data = await response.json();
      console.log(data);

      if (!response.ok) {
        toast.error("Email Not Register..!!");
        return
      }

      if (response.ok) {
        toast.success("OTP Send Success..!!");
        setForgotEmail("")
        navigate("/send-otp")
      }

    } catch (error) {
      console.error(error);
      toast.success("Somthing went wrong");

    }
  }

  // send otp
  const [otpInput1, setOtpInput1] = useState("")
  const [otpInput2, setOtpInput2] = useState("")
  const [otpInput3, setOtpInput3] = useState("")
  const [otpInput4, setOtpInput4] = useState("")
  const [otpInput5, setOtpInput5] = useState("")
  const [otpInput6, setOtpInput6] = useState("")
  
  const otpHandelSubmit = async (event) => {
    event.preventDefault()
    try {
      const response = await fetch("https://pms24.pythonanywhere.com/api/forget-password/", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: forgotEmail }),
      });
      const data = await response.json();
      console.log(data);

      if (!response.ok) {
        toast.error("Email Not Register..!!");
        return
      }

      if (response.ok) {
        toast.success("OTP Send Success..!!");
        setForgotEmail("")
        navigate("/send-otp")
      }

    } catch (error) {
      console.error(error);
      toast.success("Somthing went wrong");

    }
  }



  return (
    <AuthContexProvider.Provider value={{ isSidebarOpen, toggleSidebar, logout, setForgotEmail, forgotPassword }}>
      {children}
    </AuthContexProvider.Provider>
  )
}

export default AuthContexApi
// coustom hooks
export const useAuthContext = () => {
  return useContext(AuthContexProvider)
};
