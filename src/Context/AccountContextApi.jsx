import axios from "axios";
import { createContext, useState, useContext } from "react";
import { DESIGNATIONS, USER_LIST } from "../API_URL";
import { toast } from "react-toastify";
import { ColorRing } from "react-loader-spinner";

const AccountsContextProvider = createContext()
const AccountContextApi = ({ children }) => {

  // coustome loading effect
  const customLoadingText = (
    <div className="custom-loading-text">
      <ColorRing
        visible={true}
        height="50"
        width="50"
        ariaLabel="color-ring-loading"
        wrapperStyle={{}}
        wrapperClass="color-ring-wrapper"
        colors={['#9c27b0', '#9c27b0', '#9c27b0', '#9c27b0', '#9c27b0']}
      />
    </div>
  );

  // ================= USER API GET =================

  const paginationComponentOptions = { noRowsPerPage: true };
  const [userList, setUserList] = useState([])
  const [userLoading, setUserLoading] = useState(false)
  const [userCurrentPage, setUserCurrentPage] = useState(1);

  const UserDataFetch = async () => {
    try {
      setUserLoading(true)
      const response = await axios.get(`${USER_LIST}?page=${userCurrentPage}`)
      setUserList(response.data)
      setUserLoading(false)
    } catch (error) {
      console.error(error);
      setUserLoading(false)
      toast.error("Something went wrrong..!!")
    }
  }

  // ================= DESIGNATION API GET =================

  const [designationsList, setDesignationsList] = useState([])
  const [designationsLoading, setDesignationsLoading] = useState(false)
  const [designationsCurrentPage, setDesignationsCurrentPage] = useState(1);
  const DesignationsDataFetch = async () => {
    try {
      setDesignationsLoading(true)
      const response = await axios.get(`${DESIGNATIONS}?page=${designationsCurrentPage}`)
      setDesignationsList(response.data)
      setDesignationsLoading(false)
    } catch (error) {
      console.error(error);
      setDesignationsLoading(false)
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
      setCategoriesList(response.data)
      setCategoriesLoading(false)
    } catch (error) {
      console.error(error);
      setCategoriesLoading(false)
      toast.error("Something went wrrong..!!")
    }
  }

















  return (
    <AccountsContextProvider.Provider value={
      {
        // user
        UserDataFetch, userList, userLoading, paginationComponentOptions, customLoadingText, userCurrentPage, setUserCurrentPage,
        // designation
        designationsList, designationsLoading, DesignationsDataFetch, designationsCurrentPage, setDesignationsCurrentPage,
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