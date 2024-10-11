import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Comunicazione from './components/Comunicazione';
import NewsSection from './components/NewsSection';
import UploadTest from './components/UploadTest';


export default function Home() {
  return (
    <div>
      <Navbar />
      <Comunicazione/>
      <NewsSection/>
      <Footer/>
      <UploadTest />
    </div>
  );
}
