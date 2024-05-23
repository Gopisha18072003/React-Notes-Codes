import { useState } from 'react';

import Counter from './components/Counter/Counter.jsx';
import Header from './components/Header.jsx';
import { log } from './log.js';

function App() {
  log('<App /> rendered');

  const [enteredNumber, setEnteredNumber] = useState(0);
  const [chosenCount, setChosenCount] = useState(0);

  function handleChange(event) {
    setEnteredNumber(+event.target.value);
  }

  function handleSetClick() {
    setChosenCount(enteredNumber);
    // **** state scheduling and state batching ****
    // setChosenCount((prevNumber) => prevNumber+1);
    setEnteredNumber(0);
  }

  return (
    <>
      <Header />
      <main>
        <section id="configure-counter">
          <h2>Set Counter</h2>
          <input type="number" onChange={handleChange} value={enteredNumber} />
          <button onClick={handleSetClick}>Set</button>
        </section>
        {/* ** using key to reset the counter component ** */}
        <Counter key={chosenCount} initialCount={chosenCount} />
        {/* <Counter initialCount={0} /> */}
        {/* every component have it's own copy of state  */}
      </main>
    </>
  );
}

export default App;


// Using million.js for Optimizing react app
// 1. npm install million
// 2. open visualViewport.config.js ...