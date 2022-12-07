import React from 'react';
import Header from './components/headerComponent/header';
import Main from './components/mainComponent/main';
import Nav from './components/navComponent/nav';
import Footer from './components/footerComponent/footer';
import './style.css';

export default function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-nav">
        <Main />
        <Nav className="pr-3" />
      </div>
      <Footer />
    </div>
  );
}
