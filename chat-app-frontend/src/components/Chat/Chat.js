import React, { useContext } from 'react';
  import { ChatContext } from '../../context/ChatContext';
  
 const Chat = () => {
   const { messages, sendMessage } = useContext(ChatContext);
   const handleSubmit = (event) => {
    event.preventDefault();
    const message = event.target.message.value;
    sendMessage(message);
    event.target.message.value = '';
  }
   return (
     <div>
       <h1>Chat with ReX</h1>
       <ul>
        {messages.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input type="text" name="message" placeholder="Type your message here" />
        <button type="submit">Send</button>
      </form>
     </div>
   );
  }
  
 export default Chat;
  