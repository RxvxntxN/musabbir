import HeroPage from '@/app/components/HeroPage'
import NavigationBar from '@/app/components/NavigationBar'
import AboutMe from '@/app/components/AboutMe'
import ContactMe from '@/app/components/ContactMe'

export default function Home() {
  return (
    <div className="min-h-screen">
      <main>
        <NavigationBar />
        <HeroPage />
        <AboutMe />
        <ContactMe />
      </main>
    </div>
  );
}
