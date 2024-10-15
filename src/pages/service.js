import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ChatComponent from './components/ChatComponent';
import PagamentoSezione from './components/PagamentoSezione';

export default function Home() {
  return (
    <div>
      <Navbar />
      <ChatComponent/>
      <PagamentoSezione />
      <Footer/>
    </div>
  );
}
