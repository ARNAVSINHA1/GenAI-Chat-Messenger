/* eslint-disable react/jsx-no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import { ChatContextProvider as ChatProvider } from './context/ChatContext';
import App from './App';
ReactDOM.render(
  <React.StrictMode>
    <ChatProvider>
      <ChatContext.Consumer>
        {value => <App chatContext={value} />}
      </ChatContext.Consumer>
    </ChatProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
