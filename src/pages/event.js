import AboutSection from './components/AboutSection';
import AgencyActions from './components/AgencyActions';
import Footer from './components/Footer';
import Navbar from './components/Navbar';


export default function Home() {
  return (
    <div>
      <Navbar />
      <AboutSection/>
      <AgencyActions/>
      <Footer/>
    </div>
  );
}
