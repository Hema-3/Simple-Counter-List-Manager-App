import './App.css';
import React, { useState } from 'react';

function Counter({ onAdd }) {
  const [initial, setInitial] = useState(0);

  function increaseInitial() {
    setInitial(initial + 1);
  }

  function decreaseInitial() {
    setInitial(initial - 1);
  }

  function addElement() {
    if (initial > 0) {
      onAdd(initial);
    }
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>{initial}</h1>
      <div>
        <button className="button1" onClick={increaseInitial}>+</button>
        <button className="button1" onClick={decreaseInitial}>-</button>
      </div>
      <div>
        <button className="button2" onClick={addElement}>Add to List</button>
      </div>
    </div>
  );
}

export default Counter;
