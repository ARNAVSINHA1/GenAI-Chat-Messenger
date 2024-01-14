// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Navigate, Routes } from 'react-router-dom';
import { ChatContextProvider } from './components/Chat/Chat';
import Home from '/home/arnava/work/GenAI-Chat-Messenger/chat-app-frontend/src/components/Home/Home.js';
import { Chat as ChatComponent } from './components/Chat/Chat';
import { useChatContext } from './components/Chat/Chat';

function App() {
  const { isConnected } = useChatContext();
  return (
    <ChatContextProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          {isConnected && <Route path="/chat" element={<ChatComponent />} />}
          {!isConnected && <Navigate to="/" replace />}
        </Routes>
      </Router>
    </ChatContextProvider>
  );
}

export default App;