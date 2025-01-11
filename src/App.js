import React, { useState } from 'react';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [items, setItems] = useState([]);

  const handleAddItem = () => {
    if (inputValue.trim() !== '') {
      setItems([...items, inputValue]);
      setInputValue(''); // Clear the input field
    }
  };

  return (
    <div className="App">
      <header className="header">
        <h1>Item List Manager</h1>
      </header>
      <main className="main">
        <div className="input-container">
          <input
            type="text"
            className="input-field"
            placeholder="Enter item"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button className="add-button" onClick={handleAddItem}>
            Add Item
          </button>
        </div>
        <ul className="item-list">
          {items.map((item, index) => (
            <li key={index} className="item">
              {item}
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;