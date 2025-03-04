import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './styles/globals.css';
import { BrowserRouter } from 'react-router-dom';

// entry point (điểm vào) của ứng dụng React.
// Nơi kết nối React với DOM thực tế trên trình duyệt (thông qua lệnh ở dưới)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/react-demo"> {/* Thêm basename */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// Nó chọn phần tử HTML có id = 'root' trong file public/index.html
// 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
