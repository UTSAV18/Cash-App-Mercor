import Footer from '@/components/Footer'
import FullScreenArrows from '@/components/FullScreenArrows'
import MiddleSection from '@/components/MiddleSection'
import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <div>
      <FullScreenArrows />
      <Navbar />
      <MiddleSection />
      <Footer />
    </div>
  )
}
