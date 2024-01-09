import React, { useContext, useState } from 'react';
import ChatContext from './ChatContext';

const ChatBox = () => {
   const {messages, sendMessage} = useContext(ChatContext);
   const [inputValue, setInputValue] = useState('');

   const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(inputValue);
    setInputValue('');
   };

   return (
    <div className="chatbox">
        {messages.map((message, index) => (
          <div key={index}>{message}</div>
        ))}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button type="submit">Send</button>
        </form>
    </div>
   );
};

export default ChatBox;