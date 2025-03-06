import React from 'react';
import { useCalculator } from './useCalculator';

const Calculator = () => {
  const {
    num1, setNum1,
    num2, setNum2,
    result, calculate
  } = useCalculator();

  const resultStyle = {
    color: (typeof result === 'number' && result < 0) ? 'red' : '#00FF00', 
    textShadow: '1px 1px 2px #000'
  };

  return (
    <div 
      className="calculator" 
      style={{
        background: "#1a1a2e url('https://www.transparenttextures.com/patterns/stardust.png') repeat", 
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.4)",
        marginTop: "20px",
        maxWidth: "400px",
        color: "#fff",
        fontFamily: "'Orbitron', sans-serif" 
      }}
    >
      <div style={{ marginBottom: "15px" }}>
        <div style={{ margin: "10px 0" }}>
          <label htmlFor="num1" style={{ marginRight: "10px" }}>
            First Number:
          </label>
          <input
            type="number"
            id="num1"
            placeholder="Enter first number"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
            style={{
              padding: "5px",
              borderRadius: "4px",
              border: "1px solid #ddd"
            }}
          />
        </div>
        <div style={{ margin: "10px 0" }}>
          <label htmlFor="num2" style={{ marginRight: "10px" }}>
            Second Number:
          </label>
          <input
            type="number"
            id="num2"
            placeholder="Enter second number"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
            style={{
              padding: "5px",
              borderRadius: "4px",
              border: "1px solid #ddd"
            }}
          />
        </div>
      </div>

      <div style={{ marginBottom: "15px" }}>
        <button onClick={() => calculate('+')} style={{ marginRight: "5px" }}>+</button>
        <button onClick={() => calculate('-')} style={{ marginRight: "5px" }}>-</button>
        <button onClick={() => calculate('*')} style={{ marginRight: "5px" }}>*</button>
        <button onClick={() => calculate('/')} style={{ marginRight: "5px" }}>/</button>
        <button onClick={() => calculate('**')} style={{ marginRight: "5px" }}>Power</button>
        <button onClick={() => calculate('clear')}>Clear</button>
      </div>

      <div>
        <h3 id="output" style={resultStyle}>Result: {result}</h3>
      </div>
    </div>
  );
};

export default Calculator;