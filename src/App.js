import React, {useEffect, useState} from 'react'
import './App.css';

function App() {

  const [title, setTitle]= useState("Calculator");

  const [result, setResult]= useState("");

  useEffect(() => {
    document.title= title;
  }, [title]);

  const handleClick = (e) => {
    // console.log(result.concat(e.target.name));
    setResult(result.concat(e.target.name));
  };
  
  const clear = () => {
    setResult("");
  };

  const backspace = () => {
    // console.log(result.slice(0, result.length-1))
    setResult(result.slice(0, result.length-1));
  };

  const calculate = ()  => {
    try {
      setResult(eval(result).toString());
      
    }
    catch(err) {
      setResult("Error")
    }
  };

  return (
    <div>
    <div><h1>Calculator</h1></div>
      <div className="container">
        <form>
          <input type="text" value={result}></input>
        </form>
        <div className="keypad">
          <button onClick={clear} className="highlight" id="clear">Clear</button>
          <button onClick={backspace} className="highlight" id="backspace">C</button>
          <button name="/" onClick={handleClick} className="highlight">&divide;</button>
          <button name="7" onClick={handleClick}>7</button>
          <button name="8" onClick={handleClick}>8</button>
          <button name="9" onClick={handleClick}>9</button>
          <button name="*" onClick={handleClick} className="highlight">&times;</button>
          <button name="4" onClick={handleClick}>4</button>
          <button name="5" onClick={handleClick}>5</button>
          <button name="6" onClick={handleClick}>6</button>
          <button name="-" onClick={handleClick} className="highlight">&ndash;</button>
          <button name="1" onClick={handleClick}>1</button>
          <button name="2" onClick={handleClick}>2</button>
          <button name="3" onClick={handleClick}>3</button>
          <button name="+" onClick={handleClick} className="highlight">+</button>
          <button name="0" onClick={handleClick}>0</button>
          <button name="." onClick={handleClick}>.</button>
          <button name="=" onClick={calculate} className="highlight" id="result">=</button>
        </div>
      </div>
      </div>
  );
}

export default App;
