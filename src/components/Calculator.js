import '../style.css';
import React, { useState } from 'react';

const Calculator = () => {
  const [result, setResult] = useState('');

  const handleButtonPress = (value) => {
    setResult(result + value);
  };

  const handleClear = () => {
    setResult('');
  };

  const handleCalculate = () => {
      const calculatedResult = eval(result);
      setResult(calculatedResult.toString());
  };

  return (
    <div className="calculator col-lg-4 mt-3" style={{borderRadius:70,backgroundColor:"black"}}>
      <input type="text" className="result mt-2" value={result} readOnly style={{color:"white",width:450,height:55,fontSize:35,outline:"none",border:"none",backgroundColor:"black"}} />
      <div className="buttons mt-2 text-center" style={{alignItems:"center"}}>
        <button className='bg-dark border text-white' onClick={() => handleButtonPress('7')}>7</button>
        <button className='bg-dark border text-white' onClick={() => handleButtonPress('8')}>8</button>
        <button className='bg-dark border text-white' onClick={() => handleButtonPress('9')}>9</button>
        <button className='bg-warning' onClick={() => handleButtonPress('+')}>+</button>
        <br/>
        <button onClick={() => handleButtonPress('4')}>4</button>
        <button onClick={() => handleButtonPress('5')}>5</button>
        <button onClick={() => handleButtonPress('6')}>6</button>
        <button className='bg-warning' onClick={() => handleButtonPress('-')}>-</button>
        <br/>
        <button onClick={() => handleButtonPress('1')}>1</button>
        <button onClick={() => handleButtonPress('2')}>2</button>
        <button onClick={() => handleButtonPress('3')}>3</button>
        <button className='bg-warning' onClick={() => handleButtonPress('*')}>*
         </button>
        <br/>
        <button onClick={() => handleButtonPress('0')}>0</button>
        <button onClick={handleClear}>C</button>
        <button onClick={handleCalculate}>=</button>
        <button className='bg-warning' onClick={() => handleButtonPress('/')}>/</button>
      </div>
    </div>
  );
};

export default Calculator;
