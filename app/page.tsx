import HeroPage from '@/app/components/HeroPage'
import NavigationBar from '@/app/components/NavigationBar'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <main>
        <NavigationBar />
        <HeroPage />
        
      </main>
    </div>
  );
}
