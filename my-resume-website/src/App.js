import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import About from './About';
import Consultancy from './Consultancy';
import Newsletter from './Newsletter';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </a>
        </header>
        <nav>
          <ul>
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/consultancy">Consultancy</Link>
            </li>
            <li>
              <Link to="/newsletter">Newsletter</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/consultancy" element={<Consultancy />} />
          <Route path="/newsletter" element={<Newsletter />} />
          <Route index element={<About />} /> {/* This sets "About" as the default page */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
