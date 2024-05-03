import axios from "axios";
import { createContext, useState, useContext } from "react";
import { DESIGNATIONS, USER_LIST } from "../API_URL";
import { toast } from "react-toastify";

const AccountsContextProvider = createContext()
const AccountContextApi = ({ children }) => {

  // ================= USER API GET =================

  const [userList, setUserList] = useState([])
  const [userLoading, setUserLoading] = useState(false)

  const UserDataFetch = async () => {
    try {
      setUserLoading(true)
      const response = await axios.get(USER_LIST)
      setUserList(response.data.results)
      setUserLoading(false)
    } catch (error) {
      console.error(error);
      toast.error("Something went wrrong..!!")
    }
  }

  // ================= DESIGNATION API GET =================

  const [designationsList, setDesignationsList] = useState([])
  const [designationsLoading, setDesignationsLoading] = useState(false)

  const DesignationsDataFetch = async () => {
    try {
      setDesignationsLoading(true)
      const response = await axios.get(DESIGNATIONS)
      setDesignationsList(response.data.results)
      setDesignationsLoading(false)
    } catch (error) {
      console.error(error);
      toast.error("Something went wrrong..!!")
    }
  }

  // ================== CATEGORIES API START =================

  const [categoriesList, setCategoriesList] = useState([])
  const [categoriesLoading, setCategoriesLoading] = useState(false)

  const CategoriesDataFetch = async () => {
    try {
      setCategoriesLoading(true)
      const response = await axios.get(DESIGNATIONS)
      setCategoriesList(response.data.results)
      setCategoriesLoading(false)
    } catch (error) {
      console.error(error);
      toast.error("Something went wrrong..!!")
    }
  }

















  return (
    <AccountsContextProvider.Provider value={
      {
        // user
        UserDataFetch, userList, userLoading,
        // designation
        designationsList, designationsLoading, DesignationsDataFetch,
        // categories
        CategoriesDataFetch, categoriesList, categoriesLoading,
      }
    }>
      {children}
    </AccountsContextProvider.Provider>
  )
}

export default AccountContextApi

// coustom hooks
export const useAccountContextApi = () => {
  return useContext(AccountsContextProvider)
};