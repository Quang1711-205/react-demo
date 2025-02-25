import './App.css';
import React, { createContext, memo } from 'react';
import { Children, use, useEffect, useState, useContext, useReducer, useRef } from 'react';

export function Test() {

  console.log('Re-render');
  console.log('React-demo');
  return (
    <div>
      <h3>Chào mừng bạn đến với trang web</h3>
    </div>
  );
}






export default memo(Test);