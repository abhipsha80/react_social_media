// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route,Link } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import PostForm from './components/PostForm';
import PostFeed from './components/PostFeed';

const App = () => {
  return (
    <Router>
    <div className="App">
      <div className="auth-wrapper">
        <div className="auth-inner">
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route path="/sign-in" element={<Login />} />
            <Route path="/sign-up" element={<Signup />} />
          </Routes>
        </div>
      </div>
    </div>
  </Router>
  );
};

export default App;
