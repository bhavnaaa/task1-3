import React, { useState } from 'react';
import './App.css';

function App() {
  // State management for various tasks
  const [count, setCount] = useState(0);  // Counter
  const [text, setText] = useState('');   // Two-way binding
  const [searchTerm, setSearchTerm] = useState('');  // Search filter
  const [isVisible, setIsVisible] = useState(true);  // Show/Hide
  const [num1, setNum1] = useState(0);   // Sum calculation
  const [num2, setNum2] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);  // Enable/Disable button
  const [isShowDisabled, setIsShowDisabled] = useState(false); // Show button disable state
  const [items, setItems] = useState([]);  // Dynamic child components

  const itemList = ['Apple', 'Banana', 'Orange', 'Grapes', 'Mango'];
  const filteredItems = itemList.filter(item =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Add dynamic items
  const addItem = () => {
    setItems([...items, `Item ${items.length + 1}`]);
  };

  const arrayToDisplay = ['React', 'JavaScript', 'CSS', 'HTML'];

  return (
    <div className="app">
      {/* Task 1: Display JSX */}
      <h1 className="title">Interactive Task App</h1>

      {/* Task 1.1: Display Array of Records on Screen */}
      <div className="task">
        <h2>Array of Records</h2>
        <ul className="array-list">
          {arrayToDisplay.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Task 2: Counter */}
      <div className="task">
        <h2>Counter</h2>
        <p className="counter-value">Counter: {count}</p>
        <button className="btn" onClick={() => setCount(count + 1)}>Increase</button>
        <button className="btn" onClick={() => setCount(count - 1)}>Decrease</button>
      </div>

      {/* Task 3: Search Filter */}
      <div className="task">
        <h2>Search Filter</h2>
        <input
          className="input-box"
          type="text"
          placeholder="Search items..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <ul>
          {filteredItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Task 4: Show/Hide Element with Enable/Disable Button */}
      <div className="task">
        <h2>Show/Hide Element & Enable/Disable Button</h2>
        <button
          className="btn"
          onClick={() => setIsShowDisabled(!isShowDisabled)}
        >
          {isShowDisabled ? 'Enable' : 'Disable'} Show/Hide Button
        </button>
        <button
          className="btn"
          onClick={() => setIsVisible(!isVisible)}
          disabled={isShowDisabled}
        >
          {isVisible ? 'Hide' : 'Show'}
        </button>
        {isVisible && <p>This element is visible!</p>}
      </div>

      {/* Task 5: Enable/Disable Button */}
      <div className="task">
        <h2>Enable/Disable Button</h2>
        <button className="btn" onClick={() => setIsDisabled(!isDisabled)}>
          {isDisabled ? 'Enable' : 'Disable'}
        </button>
        <button className="btn" disabled={isDisabled}>This button is {isDisabled ? 'Disabled' : 'Enabled'}</button>
      </div>

      {/* Task 6: Two-way Data Binding */}
      <div className="task">
        <h2>Two-way Data Binding</h2>
        <input
          className="input-box"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type something..."
        />
        <p>You typed: {text}</p>
      </div>

      {/* Task 7: Sum of Two Numbers (With Negative Support) */}
      <div className="task">
        <h2>Sum of Two Numbers</h2>
        <input
          className="input-box"
          type="number"
          value={num1}
          onChange={(e) => setNum1(parseFloat(e.target.value))}
          placeholder="Enter a number"
        />
        <input
          className="input-box"
          type="number"
          value={num2}
          onChange={(e) => setNum2(parseFloat(e.target.value))}
          placeholder="Enter another number"
        />
        <p>Sum: {num1 + num2}</p>
      </div>

      {/* Task 8: Dynamically Add Child Components */}
      <div className="task">
        <h2>Add Items</h2>
        <button className="btn" onClick={addItem}>Add Item</button>
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
