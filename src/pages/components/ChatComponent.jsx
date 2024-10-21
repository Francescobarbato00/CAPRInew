import { useState } from 'react';
import { IoCloseSharp } from 'react-icons/io5'; // Icona per la chiusura
import { FaPaperPlane } from 'react-icons/fa'; // Icona per il bottone di invio

const ChatComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [userMessage, setUserMessage] = useState('');
  const [isThinking, setIsThinking] = useState(false); // Stato per mostrare "Sto pensando..."
  const [botResponse, setBotResponse] = useState(''); // Stato per la risposta automatica in casting

  // Funzione per aprire e chiudere la chat
  const handleChatToggle = () => {
    setIsOpen(!isOpen);
  };

  // Funzione per inviare il messaggio
  const sendMessage = () => {
    if (userMessage.trim() === '') return;

    const newMessage = {
      text: userMessage,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      sender: 'user',
    };

    setMessages([...messages, newMessage]);
    setUserMessage('');
    setIsThinking(true); // Mostra "Sto pensando..."

    // Simula una risposta automatica dopo un breve intervallo
    setTimeout(() => {
      const botMessage = 'Grazie per il tuo messaggio! Ti risponderemo a breve.';

      // Inizia il casting della risposta
      startBotResponseCasting(botMessage);
    }, 500);
  };

  // Funzione per simulare la digitazione della risposta del bot
  const startBotResponseCasting = (message) => {
    setBotResponse(''); // Resetto la risposta del bot
    setIsThinking(false); // "Sto pensando..." scompare subito quando inizia il casting
    let index = 0;

    const intervalId = setInterval(() => {
      if (index < message.length) {
        setBotResponse((prev) => prev + message[index]);
        index++;
      } else {
        clearInterval(intervalId);
        const finalMessage = {
          text: message,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          sender: 'bot',
        };
        setMessages((prevMessages) => [...prevMessages, finalMessage]);
        setBotResponse(''); // Resetto la risposta dopo averla inviata
      }
    }, 30); // Tempo tra una lettera e l'altra (30ms)
  };

  return (
    <div className="fixed bottom-4 right-4 flex flex-col items-end z-50">
      {/* Chat Bubble (Mostra solo se la chat è chiusa) */}
      {!isOpen && (
        <div
          className="transition-transform duration-300 transform hover:scale-105 cursor-pointer"
          onClick={handleChatToggle}
        >
          <div className="relative bg-blue-500 text-white p-4 rounded-full shadow-lg hover:shadow-xl z-50">
            <img src="icon.png" alt="Chat Icon" className="w-8 h-8" />
          </div>
        </div>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div
          className={`chat-window mt-4 w-96 sm:w-80 h-[500px] sm:h-[400px] bg-white rounded-lg shadow-lg transition-all duration-300 ease-in-out z-50 flex flex-col border border-gray-200`}
        >
          <div className="flex justify-between items-center bg-blue-500 p-2 rounded-t-lg">
            <p className="text-lg font-bold text-white">Assistente Capri</p>
            <button
              className="text-white hover:text-gray-300 p-1 rounded-full transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <IoCloseSharp className="text-lg" />
            </button>
          </div>

          {/* Chat messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-white">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.sender === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                <div
                  className={`p-2 rounded-lg max-w-xs text-sm ${
                    message.sender === 'user'
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-200 text-black'
                  }`}
                >
                  <p>{message.text}</p>
                  <span className="block text-right text-xs text-gray-400 mt-1">{message.time}</span>
                </div>
              </div>
            ))}

            {/* Mostra "Sto pensando..." quando il bot sta per rispondere */}
            {isThinking && (
              <div className="flex justify-start">
                <div className="p-2 rounded-lg max-w-xs text-sm bg-gray-200 text-black">
                  <p>Sto pensando...</p>
                </div>
              </div>
            )}

            {/* Mostra la risposta in "casting" */}
            {botResponse && (
              <div className="flex justify-start">
                <div className="p-2 rounded-lg max-w-xs text-sm bg-gray-200 text-black">
                  <p>{botResponse}</p>
                </div>
              </div>
            )}
          </div>

          {/* Input message */}
          <div className="flex items-center bg-gray-100 p-2 rounded-b-lg border-t border-gray-300">
            <input
              type="text"
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
              placeholder="Scrivi un messaggio..."
              className="w-full p-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              onKeyPress={(e) => e.key === 'Enter' && sendMessage()} // Invia messaggio con Enter
            />
            <button
              className="ml-2 bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600 transition-colors"
              onClick={sendMessage}
            >
              <FaPaperPlane className="text-lg" />
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        .chat-window {
          opacity: 0;
          transform: translateY(50px);
          animation: fadeInUp 0.5s forwards ease-in-out;
        }

        .chat-window-closing {
          opacity: 1;
          transform: translateY(0px);
          animation: fadeOutDown 0.5s forwards ease-in-out;
        }

        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(50px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeOutDown {
          0% {
            opacity: 1;
            transform: translateY(0);
          }
          100% {
            opacity: 0;
            transform: translateY(50px);
          }
        }

        /* Stile per dispositivi mobili per coprire l'intero schermo */
        @media (max-width: 768px) {
          .chat-window {
            width: 100vw;
            height: 100vh;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            position: fixed;
            border-radius: 0;
            margin: 0;
            padding: 0;
          }
          .flex-1.overflow-y-auto {
            padding-bottom: 10px;
          }
          .flex.items-center.bg-gray-100.p-2 {
            padding: 16px;
            position: relative;
            bottom: 0;
            left: 0;
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default ChatComponent;
