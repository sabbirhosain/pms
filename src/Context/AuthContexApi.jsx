import { createContext, useContext, useState } from "react"

const AuthContexProvider = createContext()
const AuthContexApi = ({ children }) => {
  // sidebar toggole
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => { setIsSidebarOpen(!isSidebarOpen) };
  console.log(isSidebarOpen);







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
