import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

// Define your Home component
function HomePage() {
  return <h2>Home Component</h2>;
}

// Define your AboutTabs component
function AboutTabs() {
  return (
    <Tabs>
      <TabList>
        <Tab>Biography</Tab>
        <Tab>Skills</Tab>
        <Tab>Experience</Tab>
      </TabList>

      <TabPanel>
        <h2>Biography</h2>
        <p>This is my biography.</p>
      </TabPanel>
      <TabPanel>
        <h2>Skills</h2>
        <p>These are my skills.</p>
      </TabPanel>
      <TabPanel>
        <h2>Experience</h2>
        <p>This is my experience.</p>
      </TabPanel>
    </Tabs>
  );
}

// Define your AboutPage component
function AboutPage() {
  return (
    <div>
      <h2>About Me</h2>
      <AboutTabs />
    </div>
  );
}

// Define your ProjectCarousel component
function ProjectCarousel() {
  return (
    <Carousel showArrows={true} autoPlay={true} infiniteLoop={true}>
      {/* Define your carousel slides here */}
    </Carousel>
  );
}

// Define your ProjectsPage component
function ProjectsPage() {
  return (
    <div>
      <h2>Projects</h2>
      <ProjectCarousel />
    </div>
  );
}

// Define your App component
function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          {/* Add routes for other components */}
          <Route index element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
