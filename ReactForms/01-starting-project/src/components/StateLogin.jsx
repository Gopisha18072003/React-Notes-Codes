import { useState } from "react";

export default function StateLogin() {
  const [enteredData, setEnteredData] = useState({ email: "", password: "" });
    const [didEdit, setDidEdit] = useState({
        email: false,
        password: false
    })
    
  function handleChange(event) {
    setEnteredData((prevData) => ({
      ...prevData,
      [event.target.name] : event.target.value
    }));
    setDidEdit((prevEdit) => ({
        ...prevEdit,
        [event.target.name]: false
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  function handleInputBlur(identifier) {
    setDidEdit(prevEdit => ({
        ...prevEdit,
        [identifier]: true
    }))
  }

  const emailIsInvlid = didEdit.email && !enteredData.email.includes('@');

  return (
    <form>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onChange={handleChange}
            value={enteredData.email}
            onBlur={() => handleInputBlur("email")}
          />
          <div className="control-error">{emailIsInvlid && <p>Please Enter a valid email address.</p>}</div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={handleChange}
            value={enteredData.password}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button" onClick={handleSubmit}>
          Login
        </button>
      </p>
    </form>
  );
}
