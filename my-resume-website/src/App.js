import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Routes } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function Home() {
  return <h2>Home</h2>;
}

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

function About() {
  return (
    <div>
      <h2>About Me</h2>
      <AboutTabs />
    </div>
  );
}

function ProjectCarousel() {
  return (
    <Carousel showArrows={true} autoPlay={true} infiniteLoop={true}>
      <div>
        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide1" alt="Project 1" />
        <p className="legend">Project 1</p>
      </div>
      <div>
        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide2" alt="Project 2" />
        <p className="legend">Project 2</p>
      </div>
      <div>
        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide3" alt="Project 3" />
        <p className="legend">Project 3</p>
      </div>
    </Carousel>
  );
}

function Projects() {
  return (
    <div>
      <h2>Projects</h2>
      <ProjectCarousel />
    </div>
  );
}

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

        {/* Update the Switch component to Routes */}
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<ContactForm />} />
          {/* The index route is used for the default path */}
          <Route index element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

class DynamicData extends React.Component {
  state = { data: null };

  componentDidMount() {
    fetch('https://api.github.com/users/github')
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        <h2>Dynamic Data:</h2>
        {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>}
      </div>
    );
  }
}

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '', email: '', message: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    alert('A message was submitted: ' + this.state.message);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Name:
          <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
        </label>
        <label>Email:
          <input type="email" name="email" value={this.state.email} onChange={this.handleChange} />
        </label>
        <label>Message:
          <textarea name="message" value={this.state.message} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default App;
