import { Helmet } from 'react-helmet'
import Navbar from '../Components/Header/Navbar'
import Sidebar from '../Components/Header/Sidebar'

const Layout = ({ children, title }) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>

      <header>
        <Navbar />
      </header>

      <main className='absolute top-18 left-56'>
        {children}
      </main>

      <section>
        <Sidebar />
      </section>
    </>
  )
}

export default Layout