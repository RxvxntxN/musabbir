import HeroPage from '@/app/components/HeroPage'
import NavigationBar from '@/app/components/NavigationBar'
import AboutMe from '@/app/components/AboutMe'

export default function Home() {
  return (
    <div className="min-h-screen">
      <main>
        <NavigationBar />
        <HeroPage />
        <AboutMe />
      </main>
    </div>
  );
}
