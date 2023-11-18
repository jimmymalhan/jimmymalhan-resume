import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NewsletterModal from './NewsletterModal';
import About from './About';
import Consultancy from './Consultancy';
import Newsletter from './Newsletter';

function App() {
  const [showModal, setShowModal] = useState(false);
  
    useEffect(() => {
      const hasVisited = localStorage.getItem('hasVisited');
      if (!hasVisited) {
        setShowModal(true);
        localStorage.setItem('hasVisited', 'true');
      }
    }, []);
  return (
    <Router>
      <div className="App">
        <Routes>
            <Route path="/" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/consultancy" element={<Consultancy />} />
          <Route path="/newsletter" element={<Newsletter />} />
        </Routes>
            <NewsletterModal onClose={() => setShowModal(false)} isVisible={showModal} />
      </div>
    </Router>
  );
}

export default App;