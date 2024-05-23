import {useRef, useState} from 'react';

export default function Login() {
  const [emailIsInvlid, setEmailIsInvalid] = useState()
  function handleSubmit(event) {
    event.preventDefault();
    console.log("Submitted");
  }
  const email = useRef();
  const password = useRef();
  
  const enteredData = {email: "", password: ""};

  function handleSubmit(event) {
    event.preventDefault()
    enteredData = {email: email.current.value, password: password.current.value};
    const emailIsVlid = enteredData.email.includes('@');

    if(!eventIsValid) {
      setEmailIsInvalid(true)
      return 
    }
    
    setEmailIsInvalid(false);
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" />
          <div className='contol-error'>Please Enter a valid email address.</div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button" onClick={handleSubmit}>Login</button>
      </p>
    </form>
  );
}
