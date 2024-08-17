import {useState} from 'react';
import './App.css'

function App() {
  const [input,setInput] =useState('');
  const [result,setResult]=useState('');

  const handleClick = (value) => {
    setInput(input+value);
  };

  const handleClear = () =>{
    setInput('');
    setResult('');
  };

  function handleDelete() {
    setInput(input.slice(0,-1));
    setResult('');
  };

  const handleCalculate = () =>{
    try {
      const calcResult = eval(input);
      if (calcResult=='Infinity' || calcResult == 'NaN'){
        setResult('Error');
      }
      else{
        setResult(calcResult);
      }
    } 
    catch (e){
      setResult("Error");
      console.log(e.message);
    }
  }
  return (
    <>
    <h1 id="title">Calculator</h1>
    <div className="calculator">
      <div className="screen">
        <div className="input">{input}</div>
        <div className="result">{result}</div>
      </div>
      <div className="buttons">
        <div>
          <button id="reset" onClick={handleClear}>AC</button>
          <button id="backspace" onClick={handleDelete}>DEL</button>
          <button onClick={() => handleClick('%')}>%</button>
          <button onClick={() => handleClick('/')}>÷</button>
        </div>
        <div>
          <button onClick={() => handleClick('7')}>7</button>
          <button onClick={() => handleClick('8')}>8</button>
          <button onClick={() => handleClick('9')}>9</button>
          <button onClick={() => handleClick('*')}>x</button>
        </div>
        <div>
          <button onClick={() => handleClick('4')}>4</button>
          <button onClick={() => handleClick('5')}>5</button>
          <button onClick={() => handleClick('6')}>6</button>
          <button onClick={() => handleClick('-')}>-</button>
        </div>
        <div>
          <button onClick={() => handleClick('3')}>3</button>
          <button onClick={() => handleClick('2')}>2</button>
          <button onClick={() => handleClick('1')}>1</button>
          <button onClick={() => handleClick('+')}>+</button>
        </div>
        <div>
          <button onClick={() => handleClick('00')}>00</button>
          <button onClick={() => handleClick('0')}>0</button>
          <button onClick={() => handleClick('.')}>.</button>
          <button id="eval" onClick={handleCalculate}>=</button>
        </div>
      </div>
    </div>
    </>

  )
}

export default App
