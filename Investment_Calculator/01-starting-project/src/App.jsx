import {useState} from 'react';
import Result from './components/Result';
import Header from './components/Headers';
import UserInput from './components/UserInput';
function App() {

  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  });

  const  inputIsValid = userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setUserInput(prevUserInput => {
        return {
            ...prevUserInput,
            [inputIdentifier]: +newValue
        };
    });
  }

  
  return (
    <>
      <Header />
      <UserInput onChangeInput = {handleChange} />
      {!inputIsValid && <p className="center">Please enter a duration greater than zero.</p>}
      {inputIsValid && <Result input = {userInput} /> }
    </>
  )
}

export default App
