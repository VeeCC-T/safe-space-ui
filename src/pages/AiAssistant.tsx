import { useState } from 'react';
import { Bot, Send, User } from 'lucide-react';
import { toast } from 'sonner';

export default function AiAssistant() {
  const [messages, setMessages] = useState([
    { from: 'ai', text: 'Hello! I am your AI Digital Safety Assistant. How can I help you today? You can ask me questions about online safety, how to handle harassment, or for advice on securing your accounts.' },
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim() === '') return;

    const newMessages = [...messages, { from: 'user', text: input }];
    setMessages(newMessages);
    setInput('');

    // Mock AI Response
    setTimeout(() => {
        const aiResponse = "Thank you for your question. While I am still in development, a trained professional will review your query and we will update my knowledge base. For immediate help, please visit the Resources tab.";
        setMessages(prev => [...prev, { from: 'ai', text: aiResponse }]);
        toast.info("This is a demo. AI responses are not yet functional.")
    }, 1500);
  };

  return (
    <div className="flex h-[75vh] flex-col">
        <div className='mb-6 text-center flex-shrink-0'>
            <Bot className='mx-auto text-pink-500' size={40}/>
            <h2 className='mt-2 text-3xl font-bold tracking-tight text-pink-900'>AI Safety Assistant</h2>
            <p className='mt-2 text-md text-gray-600'>Get instant advice on digital safety questions.</p>
        </div>

      <div className="flex-grow overflow-y-auto rounded-xl bg-white p-4 border border-pink-100 shadow-inner space-y-4">
        {messages.map((msg, index) => (
          <div key={index} className={`flex items-start gap-3 ${msg.from === 'user' ? 'justify-end' : ''}`}>
            {msg.from === 'ai' && <div className='flex-shrink-0 w-8 h-8 rounded-full bg-pink-500 flex items-center justify-center text-white'><Bot size={20} /></div>}
            <div className={`max-w-xs rounded-lg px-4 py-2 ${msg.from === 'user' ? 'rounded-br-none bg-pink-600 text-white' : 'rounded-bl-none bg-gray-100 text-gray-800'}`}>
              <p className="text-sm">{msg.text}</p>
            </div>
             {msg.from === 'user' && <div className='flex-shrink-0 w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-gray-600'><User size={20} /></div>}
          </div>
        ))}
      </div>

      <div className="mt-4 flex items-center gap-2 flex-shrink-0">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Ask about online safety..."
          className="w-full rounded-full border border-pink-200 bg-white px-5 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-pink-400"
        />
        <button
          onClick={handleSend}
          className="rounded-full bg-pink-600 p-3 text-white shadow-md transition-transform hover:scale-110 active:scale-95 disabled:bg-gray-400"
          disabled={!input.trim()}
        >
          <Send size={22} />
        </button>
      </div>
    </div>
  );
}
