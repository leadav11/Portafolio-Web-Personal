import { Outlet } from 'react-router-dom'
import { Footer } from './Footer'
import { Navbar } from './Navbar'
import { PageTransition } from './PageTransition'
import { ScrollProgressBar } from '../ui/ScrollProgressBar'

export function MainLayout() {
  return (
    <>
      <ScrollProgressBar />
      <Navbar />
      <PageTransition>
        <main>
          <Outlet />
        </main>
      </PageTransition>
      <Footer />
    </>
  )
}
