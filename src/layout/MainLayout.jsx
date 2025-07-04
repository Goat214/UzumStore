
import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

function MainLayout() {
  return (
   <>
   <Header />
   <main className='main flex-grow'>
    <Outlet/>
   </main>
   <Footer/>
   </>
  )
}

export default MainLayout
