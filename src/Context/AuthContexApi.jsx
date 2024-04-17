import { createContext, useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

const AuthContexProvider = createContext()
const AuthContexApi = ({ children }) => {
  const navigate = useNavigate()
  const token = localStorage.getItem("accessToken");

  //If the user is already logged in, they cannot go back to the login page
  useEffect(() => { token ? navigate("/dashboard") : navigate("/login") }, []);

  // sidebar toggole
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => { setIsSidebarOpen(!isSidebarOpen) };

  // logout





  return (
    <AuthContexProvider.Provider value={{ isSidebarOpen, toggleSidebar }}>
      {children}
    </AuthContexProvider.Provider>
  )
}

export default AuthContexApi
// coustom hooks
export const useAuthContext = () => {
  return useContext(AuthContexProvider)
};
