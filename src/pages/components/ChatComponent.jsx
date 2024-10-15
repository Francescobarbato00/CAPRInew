import { useState, useEffect } from 'react';
import { FaComments } from 'react-icons/fa'; // Icona per la chat
import { IoCloseSharp } from 'react-icons/io5'; // Icona più estetica per la "X"

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
    }, 30); // Tempo più veloce tra una lettera e l'altra (30ms)
  };

  return (
    // Aggiunta sm:left-1/2 sm:transform sm:-translate-x-1/2 per centrare su mobile
    <div className="fixed bottom-4 right-4 sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:w-full sm:max-w-sm flex flex-col items-end sm:items-center z-50">
      {/* Chat Bubble (Mostra solo se la chat è chiusa) */}
      {!isOpen && (
        <div
          className="transition-transform duration-300 transform hover:scale-105 cursor-pointer"
          onClick={handleChatToggle}
        >
          <div className="relative bg-blue-500 text-white p-4 rounded-full shadow-lg hover:shadow-xl z-50">
            <FaComments className="text-white text-2xl" /> {/* Icona della chat */}
          </div>
        </div>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div
          className={`mt-4 p-4 w-96 sm:w-full sm:max-w-sm h-[500px] sm:h-[400px] bg-white rounded-lg shadow-lg transition-all duration-300 ease-in-out z-50 flex flex-col`}
        >
          <div className="flex justify-between items-center border-b pb-2 mb-4">
            <p className="text-lg font-bold text-blue-500">Assistente Virtuale Capri</p>
            <button
              className="text-gray-400 hover:text-gray-600 p-1 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <IoCloseSharp className="text-lg" /> {/* Icona X più estetica */}
            </button>
          </div>

          {/* Chat messages */}
          <div className="flex-1 overflow-y-auto mb-4 space-y-4">
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
                      ? 'bg-blue-500 text-white sm:bg-gray-100 sm:text-black' // Testo nero per utenti su mobile
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
          <div className="flex items-center border-t pt-2">
            <input
              type="text"
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
              placeholder="Scrivi un messaggio..."
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
              onKeyPress={(e) => e.key === 'Enter' && sendMessage()} // Invia messaggio con Enter
            />
            <button
              className="ml-2 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
              onClick={sendMessage}
            >
              Invia
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatComponent;
