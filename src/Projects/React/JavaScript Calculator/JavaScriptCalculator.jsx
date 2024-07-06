import React, { useState } from 'react';
import './JavaScriptCalculator.css';

const JavaScriptCalculator = () => {
  const [expression, setExpression] = useState('0');
  const [result, setResult] = useState('0');
  const [ini, setInit] = useState(true);

  function initialize() {
    setExpression(() => '0');
    setResult(() => '0');
    setInit(() => true);
  }
  function evaluate() {
    let evaluatedExpression = eval(expression).toString();
    setExpression(() => evaluatedExpression);
    setResult(() => evaluatedExpression);
    setInit(() => true); 
  }
  function deleteLast() {
    let newExpression = expression.slice(0, -1) || '0';
    setExpression(() => newExpression);
    setInit(() => false); 
  }
  function click(v) {
    switch (v) {
      case 'E': evaluate(); break;
      case 'A': initialize(); break;
      case 'C': deleteLast(); break;
    }
    if (/[0-9]/g.test(v)) {
      setInit(() => false);
      setExpression(prev => (prev === '0' ? v : prev + v));
    }
    else if (/[*/+-]/.test(v)) {
      setInit(false);
      setExpression(prev => {
        const regex = /[+\-*/]+$/;
        const match = prev.match(regex);
        if (!match) return prev + v;
        const lastOps = match[0];
        if (v === '-' && lastOps.length === 1) return prev + v;
        return prev.slice(0, -lastOps.length) + v;
      });
    }
    else if (v == '.') {
      setInit(() => false)
      const parts = expression.split(/[-+*/]/);
      const lastPart = parts[parts.length - 1];
      if (!lastPart.includes('.')) {
        setExpression(prev => prev + '.');
      }
    }
  }
  return (
    <div id="calculatorbackground">
      <div id="calculator">
        <div id="display">
          <div id="Expression">{ini ? '' : expression}</div>
          <div id="Answere">{ini ? result : ''}</div>
        </div>
        <div onClick={() => click('A')} id="clear">AC</div>
        <div onClick={() => click('C')} id="back">{'<-'}</div>
        <div onClick={() => click('/')} id="divide">/</div>
        <div onClick={() => click('*')} id="multiply">x</div>
        <div onClick={() => click('7')} id="seven">7</div>
        <div onClick={() => click('8')} id="eight">8</div>
        <div onClick={() => click('9')} id="nine">9</div>
        <div onClick={() => click('-')} id="subtract">-</div>
        <div onClick={() => click('4')} id="four">4</div>
        <div onClick={() => click('5')} id="five">5</div>
        <div onClick={() => click('6')} id="six">6</div>
        <div onClick={() => click('+')} id="add">+</div>
        <div onClick={() => click('1')} id="one">1</div>
        <div onClick={() => click('2')} id="two">2</div>
        <div onClick={() => click('3')} id="three">3</div>
        <div onClick={() => click('E')} id="equals">=</div>
        <div onClick={() => click('0')} id="zero">0</div>
        <div onClick={() => click('.')} id="decimal">.</div>
      </div>
    </div>
  );
};

export default JavaScriptCalculator;
