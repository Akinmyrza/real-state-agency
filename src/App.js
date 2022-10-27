import './App.css';
import React from 'react';
import Footer from './footer';
import WhatsApp from './assets/svg/whatsapp';
import Facebook from './assets/svg/facebook';
import Instagram from './assets/svg/instagram';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './about';
import Home from './home';
import Navbar from './navbar';
import Contacts from './contacts';
import Service from './service';
import News from './news/news';

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

            <Route path='/news' element={<News />}></Route>
            <Route path='/service' element={<Service />}></Route>
            <Route path='/contacts' element={<Contacts />}></Route>
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
          <WhatsApp width={20} height={20} />
        </div>
        <div>
          <Facebook width={20} height={20} />
        </div>
        <div>
          <Instagram width={20} height={20} />
        </div>
      </header>
    </div>
  );
}

export default App;
