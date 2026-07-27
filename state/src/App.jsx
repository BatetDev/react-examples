import { useState } from 'react';
import './App.css';

const COLORS = ['green', 'blue', 'purple', 'red'];

function App() {
  const [backgroundColor, setBackgroundColor] = useState(COLORS[0]);
  const [count, setCount] = useState(0);

  const onButtonClick = (color) => () => {
    if (color !== backgroundColor) {
      setBackgroundColor(color);
      setCount(count + 1);
    }
  };

  return (
    <div
      className="App"
      style={{
        backgroundColor,
      }}
    >
      <h1>BG color change count: {count}</h1>

      {COLORS.map((color) => (
        <button
          type="button"
          key={color}
          onClick={onButtonClick(color)}
          className={backgroundColor === color ? 'selected' : ''}
        >
          {color}
        </button>
      ))}
    </div>
  );
}

export default App;
