import { useState } from 'react';

export function useCalculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  function calculate(operation) {
    if (operation === 'clear') {
      setNum1("");
      setNum2("");
      setResult("");
      return;
    }
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (isNaN(n1) || isNaN(n2)) {
      setResult("Invalid input");
      return;
    }

    let res;
    switch (operation) {
      case '+':
        res = n1 + n2;
        break;
      case '-':
        res = n1 - n2;
        break;
      case '*':
        res = n1 * n2;
        break;
      case '/':
        res = n2 !== 0 ? n1 / n2 : "Error";
        break;
      case '**':
        res = 1;
        for (let i = 0; i < n2; i++) {
          res *= n1;
        }
        break;
      default:
        res = "Unknown operation";
    }
    setResult(res);
  }

  return {
    num1, setNum1,
    num2, setNum2,
    result,
    calculate
  };
}