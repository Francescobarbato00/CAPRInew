import AboutSection from './components/AboutSection';
import AgencyActions from './components/AgencyActions';
import ChatComponent from './components/ChatComponent';
import Footer from './components/Footer';
import Navbar from './components/Navbar';


export default function Home() {
  return (
    <div>
      <Navbar />
      <ChatComponent />
      <AboutSection/>
      <AgencyActions/>
      <Footer/>
    </div>
  );
}
