import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Storia from './components/storia';
import ChatComponent from './components/ChatComponent';

export default function Home() {
  return (
    <div>
      <Navbar />
      <ChatComponent />
      <Storia />
      <Footer/>
    </div>
  );
}
