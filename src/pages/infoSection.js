import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Comunicazione from './components/Comunicazione';
import NewsSection from './components/NewsSection';



export default function Home() {
  return (
    <div>
      <Navbar />
      <ChatComponent />
      <Comunicazione/>
      <NewsSection/>
      <Footer/>
    </div>
  );
}
