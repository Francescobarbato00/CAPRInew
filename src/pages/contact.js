import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import ChatComponent from './components/ChatComponent';

export default function Home() {
  return (
    <div>
      <Navbar />
      <ChatComponent/>
      <ContactForm/>
      <Footer/>
    </div>
  );
}
