import './App.css';
import React, { useState } from 'react';

function ListView({ items }) {
  const [ascending, setAscending] = useState(true);

  function sortList() {
    const sortedList = [...items].sort((a, b) =>
      ascending ? a - b : b - a
    );
    return sortedList;
  }

  const displayList = sortList();

  return (
    <div style={{ textAlign: 'center' }}>
      <button className="button1" onClick={() => setAscending(!ascending)}>
        Sort ({ascending ? 'Asc' : 'Desc'})
      </button>
      <ul>
        {displayList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListView;
