import { useState } from 'react';

const Calculator = () => {
  const [amount, setAmount] = useState('');
  const [rate, setRate] = useState('');
  const [result, setResult] = useState(null);

  const calculate = () => {
    const calculatedResult = parseFloat(amount) * parseFloat(rate);
    setResult(calculatedResult);
  };

  return (
    <div>
      <h1>Money Calculator</h1>
      <label>
        Amount:
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </label>
      <br />
      <label>
        Rate:
        <input
          type="number"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
        />
      </label>
      <br />
      <button onClick={calculate}>Calculate</button>
      <br />
      {result !== null && (
        <p>Result: {result.toFixed(2)}</p>
      )}
    </div>
  );
};


export default Calculator;