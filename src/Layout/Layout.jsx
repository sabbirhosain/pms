import { Helmet } from 'react-helmet'
import Navbar from '../Components/Header/Navbar'
import Sidebar from '../Components/Header/Sidebar'
import { useAuthContext } from '../Context/AuthContexApi'

const Layout = ({ children, title }) => {
  const { isSidebarOpen } = useAuthContext()
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>

      <header>
        <Navbar />
      </header>

      <main className={`mt-20 ${isSidebarOpen ? "ml-0" : "sm:ml-[250px]"}`}>
        {children}
      </main>

      <section>
        <Sidebar />
      </section>
    </>
  )
}

export default Layout