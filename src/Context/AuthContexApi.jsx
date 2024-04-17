import { createContext, useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

const AuthContexProvider = createContext()
const AuthContexApi = ({ children }) => {
  const token = localStorage.getItem("accessToken");
  useEffect(() => { token ? navigate("/dashboard") : navigate("/login") }, []);
  const navigate = useNavigate()
  // sidebar toggole
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => { setIsSidebarOpen(!isSidebarOpen) };







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
