import {useState, useRef}  from 'react';

export default function Player() {
  const [enteredPlayerName, setEnteredPlayerName] = useState(undefined);
  const playerName = useRef()

  function handleClick() {
    setEnteredPlayerName(playerName.current.value);
    playerName.current.value = '';
  }

  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ?? 'unknown enitity'}</h2>
      <p>
        <input ref = {playerName} type="text" />
        <button onClick = {handleClick}>Set Name</button>
      </p>
    </section>
  );
}
