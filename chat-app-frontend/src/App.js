// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { ChatContextProvider } from './context/ChatContext';
import Home from '/home/arnava/work/GenAI-Chat-Messenger/chat-app-frontend/src/components/Home/Home.js';
// eslint-disable-next-line no-unused-vars
import Chat from '@components/Chat/Chat';
import { useChatContext } from './context/ChatContext';

function App() {
  const { isConnected } = useChatContext();
  return (
    <ChatContextProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          {isConnected && <Route path="/chat" component={Chat} />}
          {!isConnected && <Redirect to="/" />}
        </Switch>
      </Router>
    </ChatContextProvider>
  );
}

export default App;