import Navbar from '../components/Navbar';
import HeroBanner from '../components/HeroBanner';
import FeaturedProjects from '../components/FeaturedProjects';
import UpcomingEvents from '../components/UpcomingEvents';
import ResearchGroups from '../components/ResearchGroups';
import FeaturedServices from '../components/FeaturedServices';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroBanner />
        <FeaturedProjects />
        <UpcomingEvents />
        <ResearchGroups />
        <FeaturedServices />
      </main>
      <Footer />
    </div>
  );
};

export default Index;