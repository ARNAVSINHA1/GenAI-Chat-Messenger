import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container">
      <h1 className="text-center">Welcome to ReX Chat!</h1>
      <div className="row justify-content-center">
        <div className="col-md-6 text-center">
          <Link to="/chat" className="btn btn-primary btn-lg">Start Chatting</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;