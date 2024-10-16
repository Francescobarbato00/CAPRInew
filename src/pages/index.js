import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Section from './components/Section';
import NewsSection from './components/NewsSection';
import LineeGuida from './components/LineeGuida';
import ChatComponent from './components/ChatComponent';
import LoghiIstituzioni from './components/LoghiIstituzioni';

export default function Home() {
  return (
    <div>
      <Navbar />
      <ChatComponent/>
      <Hero />
      <NewsSection/>
      <Section/>
      <LoghiIstituzioni />
      <LineeGuida/>
      <Footer/>
    </div>
  );
}
