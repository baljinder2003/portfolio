import React from 'react';
import RandomQuoteMachine from '../Projects/RandomQuoteMachine/RandomQuoteMachine'
import MarkdownPreviwer from '../Projects/Markdown Previwer/MarkdownPreviewer'
import DrumMachine from '../Projects/DrumMachine/DrumMachine'
import JavaScriptCalculator from '../Projects/JavaScript Calculator/JavaScriptCalculator'
import Clock from '../Projects/25clock/25clock'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './navbar.css';
const DDSection = (props) => {
  const list = [];
  for (let i in props.name) {
    list.push(<Link to={`/${props.link[i]}`} key={i}>{props.name[i].replace(/\s+/g, `\u00A0`)}</Link>);
  }
  return (
    <div className="section">
      <span className='title'>{props.gname.replace(' ', `\u00A0`)}</span>
      <div className='content'>
        {list}
      </div>
    </div>
  );
};
const Navbar = () => {
  return (
    <Router>
      <nav id='navbar'>
        <div id="nav-left">
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
                gname='Other Projects' />
            </div>
          </li>
          <li><Link to="/skills">Skills</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

      </nav>

      <div id='projects'>
        <Routes>
          <Route path="/RQM" element={<RandomQuoteMachine />} />
          <Route path="/MP" element={<MarkdownPreviwer />} />
          <Route path="/DM" element={<DrumMachine />} />
          <Route path="/JC" element={<JavaScriptCalculator />} />
          <Route path="/C" element={<Clock />} />
        </Routes>
      </div >
    </Router>
  );
};

export default Navbar;