import HeroPage from '@/app/components/HeroPage'
import NavigationBar from '@/app/components/NavigationBar'
import AboutMe from '@/app/components/AboutMe'
import ContactMe from '@/app/components/ContactMe'
import CustomFM from '@/app/components/CustomFMcopy'
import Emblascroll from '@/app/components/embla-autoscrolling'

export default function Home() {
  return (
    <div className="min-h-screen">
      <main>
        <Emblascroll />
        <CustomFM />
        <NavigationBar />
        <HeroPage />
        <AboutMe />
        <ContactMe />
      </main>
    </div>
  );
}
