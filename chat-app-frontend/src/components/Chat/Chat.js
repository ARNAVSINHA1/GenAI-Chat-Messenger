import React, { createContext, useState } from 'react';

export const ChatContext = createContext();

export const ChatContextProvider = (props) => {
  const [isConnected, setIsConnected] = useState(false);

  return (
    <ChatContext.Provider value={{ isConnected, setIsConnected }}>
      {props.children}
    </ChatContext.Provider>
  );
};

export const useChatContext = () => React.useContext(ChatContext);

export const Chat = () => {
  const { isConnected } = useChatContext();

  return (
    <div>
      {isConnected ? <p>Chat is connected</p> : <p>Chat is not connected</p>}
    </div>
  );
};