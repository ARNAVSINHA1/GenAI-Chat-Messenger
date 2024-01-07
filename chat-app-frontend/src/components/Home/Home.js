import React from 'react';
  import { Link } from 'react-router-dom';
  
 const Home = () => {
   return (
     <div>
       <h1>Welcome to ReX Chat!</h1>
       <Link to="/chat">Start Chatting</Link>
     </div>
   );
  }
  
 export default Home;