/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
import { ChatProvider } from './context/ChatContext';
import React from 'react';
import ReactDOM from 'react-dom';
ReactDOM.render(
   <ChatProvider>
     <BrowserRouter>
       <App />
     </BrowserRouter>
   </ChatProvider>,
   document.getElementById('root')
);