import { useState, memo, useCallback, useMemo } from 'react';
// memo is wrapped around Component function 
// useMemo is wrapped around normal function which prevents re-execution of function untill input of the function changes

import IconButton from '../UI/IconButton.jsx';
import MinusIcon from '../UI/Icons/MinusIcon.jsx';
import PlusIcon from '../UI/Icons/PlusIcon.jsx';
import CounterOutput from './CounterOutput.jsx';
import { log } from '../../log.js';
import CounterHistory from './CounterHistory.jsx';

function isPrime(number) {
  log(
    'Calculating if is prime number',
    2,
    'other'
  );
  if (number <= 1) {
    return false;
  }

  const limit = Math.sqrt(number);

  for (let i = 2; i <= limit; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}
// this component will re-execute again only if the count changes or internal state changes
// if App component re-executes and no changes occurs in Counter component then the function will not get executed again
const Counter = memo(function Counter({ initialCount }) {
  log('<Counter /> rendered', 1);

  const initialCountIsPrime = useMemo(() => isPrime(initialCount), [initialCount]);

  const [counterChanges, setCounterChanges] = useState([{value: initialCount, id: Math.random()*1000}]);

  // to prevent re-execution of function
  const handleDecrement = useCallback( function handleDecrement() {
    setCounterChanges((prevCounter) => [{value: -1, id: Math.random()*1000 }, ...prevCounter]);
  }, [])

  const handleIncrement = useCallback(function handleIncrement() {
    setCounterChanges((prevCounter) => [{value: 1, id: Math.random()*100 } , ...prevCounter]);
  }, [])

  return (
    <section className="counter">
      <p className="counter-info">
        The initial counter value was <strong>{initialCount}</strong>. It{' '}
        <strong>is {initialCountIsPrime ? 'a' : 'not a'}</strong> prime number.
      </p>
      <p>
        <IconButton icon={MinusIcon} onClick={handleDecrement}>
          Decrement
        </IconButton>
        <CounterOutput values={counterChanges} />
        <IconButton icon={PlusIcon} onClick={handleIncrement}>
          Increment
        </IconButton>
      </p>
      <CounterHistory history={counterChanges}/>
    </section>
  );
})

export default Counter;

// using memo is costly where props change frequently