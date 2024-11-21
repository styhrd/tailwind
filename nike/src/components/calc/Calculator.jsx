import React, { useState } from 'react';

const Calculator = () => {
  const [input, setInput] = useState(""); // Initialize input as an empty string

  // Function to handle button clicks
  function inputSet(value) {
    switch (value) {
      case 'AC':
        setInput(""); // Clear the input
        break;
      case 'back':
        setInput(input.slice(0, -1)); // Remove the last character
        break;
      case '=':
        try {
          // Replace 'X' with '*' for multiplication
          const equation = input.replace(/X/g, '*');
          // Evaluate the mathematical expression
          const result = eval(equation);
          setInput(result.toString()); // Display result as string
        } catch (error) {
          setInput("Error"); // Handle invalid expressions
        }
        break;
      default:
        setInput(input + value); // Append the value to the input string
        break;
    }
  }

  return (
    <div className='h-full font-poppins w-full p-6 flex flex-col space-y-2'>
      {/* Display */}
      <div className='flex items-center space-x-2 w-full'>
        <div className='w-full bg-gray-200 rounded-xl h-[90px] p-4'>
          <input
            type="text"
            disabled={true}
            value={input} // Display input as string
            className="w-full bg-transparent outline-none text-right text-2xl"
          />
        </div>
      </div>

      {/* Buttons */}
      <div className='flex space-y-2 flex-col'>
        <div className="calcrow">
          <button className="calcbut" onClick={() => inputSet('AC')}>AC</button>
          <button className="calcbut" onClick={() => inputSet('%')}>%</button>
          <button className="calcbut grow" onClick={() => inputSet('back')}>
            <i className="bi bi-backspace"></i>
          </button>
        </div>

        <div className="calcrow">
          <button className="calcbut" onClick={() => inputSet('7')}>7</button>
          <button className="calcbut" onClick={() => inputSet('8')}>8</button>
          <button className="calcbut" onClick={() => inputSet('9')}>9</button>
          <button className="calcbut" onClick={() => inputSet('X')}>X</button>
        </div>

        <div className='calcrow'>
          <button className="calcbut" onClick={() => inputSet('4')}>4</button>
          <button className="calcbut" onClick={() => inputSet('5')}>5</button>
          <button className="calcbut" onClick={() => inputSet('6')}>6</button>
          <button className="calcbut" onClick={() => inputSet('+')}>+</button>
        </div>

        <div className='calcrow'>
          <button className="calcbut" onClick={() => inputSet('1')}>1</button>
          <button className="calcbut" onClick={() => inputSet('2')}>2</button>
          <button className="calcbut" onClick={() => inputSet('3')}>3</button>
          <button className="calcbut" onClick={() => inputSet('-')}>-</button>
        </div>

        <div className='calcrow'>
          <button className="calcbut" onClick={() => inputSet('0')}>0</button>
          <button className="calcbut grow" onClick={() => inputSet('=')}>=</button>
          <button className="calcbut" onClick={() => inputSet('/')}>/</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
