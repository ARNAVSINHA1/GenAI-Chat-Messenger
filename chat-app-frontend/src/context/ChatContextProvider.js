import React from 'react';
import { ChatContextProvider } from './ChatContext';
import ChatComponent from './ChatComponent';
const App = () => {
  return (
    <ChatContextProvider>
      <ChatComponent />
    </ChatContextProvider>
  );
};
export default App;
