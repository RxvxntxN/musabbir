import HeroPage from '@/app/components/HeroPage';
import NavigationBar from '@/app/components/NavigationBar';
import AboutMe from '@/app/components/AboutMe';
import ContactMe from '@/app/components/ContactMe';
import Emblascroll from '@/app/components/embla-autoscrolling';

export default function Home() {
  return (
    <div className="min-h-screen">
      <main>
        {/* just my custom component <CustomFM /> */}
        <NavigationBar />
        <HeroPage />
        <AboutMe />
        <Emblascroll />
        <ContactMe />
      </main>
    </div>
  );
}
