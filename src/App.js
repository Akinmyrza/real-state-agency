import './App.css';
import React from 'react';
import Footer from './footer';
import WhatsApp from './assets/svg/whatsapp';
import Facebook from './assets/svg/facebook';
import Instagram from './assets/svg/instagram';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import About from './about';
import Users from './users';
import Home from './home';
import Navbar from './navbar';

function App() {
  return (
    <div className='App'>
      <Router>
        <div>
          {/* A <Routes> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <div>
            <Navbar />
          </div>
          <Routes>
            <Route path='/about' element={<About />}></Route>
            <Route path='/users' element={<Users />}></Route>
            <Route path='/' element={<Home />}></Route>
          </Routes>
        </div>
      </Router>

      <header className='App-header'>
        <h3>Hello World</h3>

        <div>
          <Footer />
        </div>
        <div>
          <WhatsApp width={60} height={60} />
        </div>
        <div>
          <Facebook width={60} height={60} />
        </div>
        <div>
          <Instagram width={60} height={60} />
        </div>
      </header>
    </div>
  );
}

export default App;
