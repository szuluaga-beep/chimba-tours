import { Home } from '@/components'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Testimonials from '@/components/Testimonials'
import Tours from '@/components/Tours'


export default function IndexPage() {
  return (
    <main>
      <Home />
      <Tours />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
