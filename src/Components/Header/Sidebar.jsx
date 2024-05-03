import { NavLink } from "react-router-dom"
import { useAuthContext } from "../../Context/AuthContexApi"
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { PiSubtitles } from "react-icons/pi";
import { MdOutlineCategory } from "react-icons/md";
import { MdProductionQuantityLimits } from "react-icons/md";
import { RiGalleryLine } from "react-icons/ri";
import { FaTransgenderAlt } from "react-icons/fa";
import { GrAttachment } from "react-icons/gr";
import { RiCoupon5Line } from "react-icons/ri";
import { TbBrandShazam } from "react-icons/tb";
import { LiaHashtagSolid } from "react-icons/lia";
import { GiAcousticMegaphone } from "react-icons/gi";
import { TbShoppingBagPlus } from "react-icons/tb";
import { TbSitemapOff } from "react-icons/tb";




const Sidebar = () => {
  const { isSidebarOpen } = useAuthContext()
  return (
    <>
      <nav className={`bg-white shadow-lg h-full fixed top-14 left-0 ${isSidebarOpen ? "block sm:hidden" : "hidden sm:block"} py-8 font-[sans-serif] overflow-y-auto min-w-[250px]`}>
        <ul className="mt-0">
          <li>
            <NavLink to={"/"} className="text-black hover:text-blue-600 text-sm flex items-center hover:bg-blue-50 rounded px-4 py-3 transition-all">
              <MdOutlineDashboardCustomize className="w-[18px] h-[18px] mr-4" />
              <span>Dashboard</span>
            </NavLink>
          </li>
        </ul>
        <div className="mt-3">
          <h6 className="text-blue-600 text-sm font-bold px-4">Accounts</h6>
          <ul className="mt-3">
            <li>
              <NavLink to={"/user-list"} className="text-black hover:text-blue-600 text-sm flex items-center hover:bg-blue-50 rounded px-4 py-3 transition-all">
                <FaRegUserCircle className="w-[18px] h-[18px] mr-4" />
                <span>User List</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/designations"} className="text-black hover:text-blue-600 text-sm flex items-center hover:bg-blue-50 rounded px-4 py-3 transition-all">
                <PiSubtitles className="w-[18px] h-[18px] mr-4" />
                <span>Designation</span>
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="mt-3">
          <h6 className="text-blue-600 text-sm font-bold px-4">Products</h6>
          <ul className="mt-3">
            <li>
              <NavLink to={"/categories"} className="text-black hover:text-blue-600 text-sm flex items-center hover:bg-blue-50 rounded px-4 py-3 transition-all">
                <MdOutlineCategory className="w-[18px] h-[18px] mr-4" />
                <span>Categories</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={""} className="text-black hover:text-blue-600 text-sm flex items-center hover:bg-blue-50 rounded px-4 py-3 transition-all">
                <MdProductionQuantityLimits className="w-[18px] h-[18px] mr-4" />
                <span>Product</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={""} className="text-black hover:text-blue-600 text-sm flex items-center hover:bg-blue-50 rounded px-4 py-3 transition-all">
                <RiGalleryLine className="w-[18px] h-[18px] mr-4" />
                <span>Gallary</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={""} className="text-black hover:text-blue-600 text-sm flex items-center hover:bg-blue-50 rounded px-4 py-3 transition-all">
                <FaTransgenderAlt className="w-[18px] h-[18px] mr-4" />
                <span>Gender</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={""} className="text-black hover:text-blue-600 text-sm flex items-center hover:bg-blue-50 rounded px-4 py-3 transition-all">
                <GrAttachment className="w-[18px] h-[18px] mr-4" />
                <span>Attachments</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={""} className="text-black hover:text-blue-600 text-sm flex items-center hover:bg-blue-50 rounded px-4 py-3 transition-all">
                <RiCoupon5Line className="w-[18px] h-[18px] mr-4" />
                <span>Coupons</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={""} className="text-black hover:text-blue-600 text-sm flex items-center hover:bg-blue-50 rounded px-4 py-3 transition-all">
                <TbBrandShazam className="w-[18px] h-[18px] mr-4" />
                <span>Brands</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={""} className="text-black hover:text-blue-600 text-sm flex items-center hover:bg-blue-50 rounded px-4 py-3 transition-all">
                <LiaHashtagSolid className="w-[18px] h-[18px] mr-4" />
                <span>Tags</span>
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="mt-3">
          <h6 className="text-blue-600 text-sm font-bold px-4">Customer</h6>
          <ul className="mt-3">
            <li>
              <NavLink to={""} className="text-black hover:text-blue-600 text-sm flex items-center hover:bg-blue-50 rounded px-4 py-3 transition-all">
                <GiAcousticMegaphone className="w-[18px] h-[18px] mr-4" />
                <span>Customers</span>
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="mt-3">
          <h6 className="text-blue-600 text-sm font-bold px-4">Orders</h6>
          <ul className="mt-3">
            <li>
              <NavLink to={""} className="text-black hover:text-blue-600 text-sm flex items-center hover:bg-blue-50 rounded px-4 py-3 transition-all">
                <TbShoppingBagPlus className="w-[18px] h-[18px] mr-4" />
                <span>Orders List</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={""} className="text-black hover:text-blue-600 text-sm flex items-center hover:bg-blue-50 rounded px-4 py-3 transition-all">
                <TbSitemapOff className="w-[18px] h-[18px] mr-4" />
                <span>Orders Items</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>

    </>
  )
}

export default Sidebar