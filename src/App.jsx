import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes'; 
import Header from './components/layout/header';
import Footer from './components/layout/footer';
import "./App.css"
function App() {
  return (
    <Router>
      <Header />
        <Routes />
      <Footer />
    </Router>
  );
}

export default App;
