import React, { useState, useEffect } from 'react';
import './RandomQuoteMachine.css'
function getRandomQuote(quotes) {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

const RandomQuoteMachine = () => {
  const [quotesArray, setQuotesArray] = useState([]);
  const [currentQuote, setCurrentQuote] = useState({
    quote: '',
    author: ''
  });

  useEffect(() => {
    const url = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const json = await response.json();
        setQuotesArray(json.quotes);
        setCurrentQuote(getRandomQuote(json.quotes));
      } catch (error) {

        setCurrentQuote({
          quote: "Error is the wife of a good programmer, so much so that this quote is also literally an error.",
          author: "jsonAPI"
        });
      }
    };

    fetchData();
  }, []);

  const handleNewQuote = () => {
    if (quotesArray.length > 0) {
      setCurrentQuote(getRandomQuote(quotesArray));
    }
  };



  return (
    <div id='randomQuoteMachine'>
      <div id="quote-box">
        <div id="quote-content">
          <h1 id="text">{currentQuote.quote || "Loading..."}</h1>
          <h2 id="author">{currentQuote.author}</h2>
        </div>
        <a className='btn btn-primary' href={`https://twitter.com/intent/tweet?text=${currentQuote.quote}`} id="tweet-quote" target="_blank" rel="noopener noreferrer">Tweet Quote</a>
        <button className='btn btn-primary' id="new-quote" onClick={handleNewQuote}>New Quote</button>
      </div>
    </div>
  );
};

export default RandomQuoteMachine;
