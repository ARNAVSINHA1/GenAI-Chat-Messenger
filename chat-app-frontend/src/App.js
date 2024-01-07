import React from 'react';
  import { Routes, Route } from 'react-router-dom';
  import Home from './components/Home/Home';
  import Chat from './components/Chat/Chat';
  import Navigation from './components/Shared/Navigation';
  
 const App = () => {
   return (
     <>
       <Navigation />
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/chat" element={<Chat />} />
       </Routes>
     </>
   );
  }
  
 export default App;
  