import React, { useState, useEffect } from 'react';

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSendMessage = () => {
    setMessages([...messages, { text: input, sender: 'user' }]);
    setInput('');
  };

  useEffect(() => {
    // Generate AI response here
    const generateResponse = async () => {
      // Simulate AI response delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const response = 'This is the AI response';
      setMessages([...messages, { text: response, sender: 'ai' }]);
    };

    if (input !== '') {
      generateResponse();
    }
  }, [input]);

  return (
    <div>
      <div className="chat-container">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message ${message.sender === 'user' ? 'user' : 'ai'}`}
          >
            {message.text}
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Type your message..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatBot;
