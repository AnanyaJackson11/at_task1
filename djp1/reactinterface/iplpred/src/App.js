import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  const handleMessageSubmit = async (e) => {
    e.preventDefault();
    
    if (!message) return;

    // Adding the user message to chat history
    const userMessage = { sender: 'User', text: message };
    setChatHistory([...chatHistory, userMessage]);

    // Simulating an AI model response (replace with actual LLM API call)
    const modelResponse = { sender: 'AI', text: `Response to: ${message}` };
    setChatHistory(prev => [...prev, modelResponse]);

    // Clear the message input after sending
    setMessage('');
  };

  return (
    <div className="app-container">
      <div className="chat-box">
        <div className="chat-history">
          {chatHistory.map((entry, index) => (
            <div key={index} className={entry.sender === 'User' ? 'user-message' : 'ipl-predictor-message'}>
              <p><strong>{entry.sender}:</strong> {entry.text}</p>
            </div>
          ))}
        </div>

        <form onSubmit={handleMessageSubmit} className="chat-input-form">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
            className="chat-input"
          />
          <button type="submit" className="send-button">Send</button>
        </form>
      </div>
    </div>
  );
};

export default App;
