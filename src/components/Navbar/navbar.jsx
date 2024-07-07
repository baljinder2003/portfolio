import React from 'react';
import './navbar.css';
import { BrowserRouter as Router, Route, Link, Routes, useLocation } from 'react-router-dom';

import Home from '../FrontPage/home/home';

import RandomQuoteMachine from '../../Projects/React/RandomQuoteMachine/RandomQuoteMachine';
import MarkdownPreviwer from '../../Projects/React/Markdown Previwer/MarkdownPreviewer';
import DrumMachine from '../../Projects/React/DrumMachine/DrumMachine';
import JavaScriptCalculator from '../../Projects/React/JavaScript Calculator/JavaScriptCalculator';
import Clock from '../../Projects/React/25clock/25clock';

import SurveyForm from '../../Projects/ResponsiveWebDesign/SurveyForm/surveyform'

const DDSection = (props) => {
  const list = [];
  for (let i in props.name) {
    list.push(<Link to={`/${props.link[i]}`} key={i}>{props.name[i].replace(/\s+/g, `\u00A0`)}</Link>);
  }
  return (
    <div className="section">
      <span className='title'>{props.gname.replace(/\s+/g, `\u00A0`)}</span>
      <div className='content'>
        {list}
      </div>
    </div>
  );
};

const Navbar = () => {
  const location = useLocation();
  return (
    <nav id='navbar'>
      <div id="nav-left" className={location.pathname === '/' ? 'hidden' : ''}>
        <img src="https://picsum.photos/40/40" alt="Baljinder Singh" id="dp" />
      </div>
      <ul id="nav-right">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li className="dropdown">Projects
          <div className="dropdown-content">
            <DDSection
              gname='React'
              name={['Random Quote Machine', "Markdown Previewer", 'Drum Machine', 'JavaScript Calculator', '25 + 5 Clock']}
              link={['RQM', 'MP', 'DM', 'JC', 'C']} />
            <DDSection
              gname='Responsive Web Design'
              name={['Survey Form']}
              link={['SF']} />
          </div>
        </li>
        <li><Link to="/skills">Skills</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='SF' element={<SurveyForm/>}/>
          <Route path="/RQM" element={<RandomQuoteMachine />} />
          <Route path="/MP" element={<MarkdownPreviwer />} />
          <Route path="/DM" element={<DrumMachine />} />
          <Route path="/JC" element={<JavaScriptCalculator />} />
          <Route path="/C" element={<Clock />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
