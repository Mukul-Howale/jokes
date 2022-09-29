import React from 'react';
import Jokes from './components/Jokes'
import './styles/App.css';

function App() {
  return (
    <div className="app">
      <Jokes
        punch = "It's hard to explain puns to kleptomaniacs because they always take things literally."
      />
      <Jokes
        setup = "How did the hacker escape the police?"
        punch = "He just ransomware!"
      />
      <Jokes
        setup = "Why don't pirates travel on mountain roads?"
        punch = "Scurvy."
      />
      <Jokes
        setup = "I got my daughter a fridge for her birthday."
        punch = "I can't wait to see her face light up when she opens it."
      />
      <Jokes
        setup = "What's the best thing about Switzerland?"
        punch = "I don't know, but the flag is a big plus!"
      />
    </div>
  );
}

export default App;
