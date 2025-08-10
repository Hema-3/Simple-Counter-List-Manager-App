import React, { useState } from 'react';
import Counter from './Counter';
import ListView from './ListView';
import './App.css';

function App() {
  const [list, setList] = useState([]);

  function handleAddItem(item) {
    setList([...list, item]);
  }

  return (
    <div className="container" style={{ alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
      <Counter onAdd={handleAddItem} />
      <ListView items={list} setItems={setList} />
    </div>
  );
}

export default App;
