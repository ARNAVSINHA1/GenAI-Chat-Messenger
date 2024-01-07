import { ChatProvider } from './context/ChatContext';
  
 ReactDOM.render(
   <ChatProvider>
     <BrowserRouter>
       <App />
     </BrowserRouter>
   </ChatProvider>,
   document.getElementById('root')
  );