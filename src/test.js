import './App.css';
import React, { createContext, memo } from 'react';
import { Children, use, useEffect, useState, useContext, useReducer, useRef } from 'react';

export function Test() {
  const [count, setCount] = useState();

  const handleSubmit = () => {
    setCount(prev => prev + 1);
  }

  return (
    <div>
      <h3>Count: {count}</h3>
      <button onClick={handleSubmit}>Tăng</button>
    </div>
  );
}






export default memo(Test);