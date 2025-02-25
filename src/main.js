import './App.css';
import React from 'react';
import { Children, use, useEffect, useState, useContext, useReducer, useRef } from 'react';

// 1. Init State
const initialValue = {
  job: '',
  jobs: [],
};
// => Giá trị khởi tạo của state
// job: Lưu trữ công việc đang nhập vào input
// jobs: Mảng chứa danh sách công việc đã thêm vào


// 2. Actions
const SET_JOB = 'set_job';
const ADD_JOB = 'add_job';
const DELETE_JOB = 'delete_job';
// => SET_JOB: Cập nhật công việc nhập vào input
// => ADD_JOB: Thêm công việc mới vào danh sách 'jobs'
// => DELETE_JOB: Xóa một công việc khỏi danh sách 'jobs'
// => Các action types này giúp xác định loại hành động sẽ được thực hiện trong reducer


// 3. Action Creators: là các hàm giúp tạo action một cách dễ dàng thay vì viết trực tiếp trong component
const setJob = (payload) => ({ type: SET_JOB, payload });
const addJob = (payload) => ({ type: ADD_JOB, payload });
const deleteJob = (payload) => ({ type: DELETE_JOB, payload });

// 4. Reducer
const reducer = (state, action) => {
  console.log('⚡ Action received:', action);
  console.log('🔹 Previous state:', state);

  let newState;
  
  switch (action.type) {
    case SET_JOB:
      newState = { ...state, job: action.payload };
      break;

    case ADD_JOB:
      newState = { ...state, jobs: [...state.jobs, action.payload] };
      break;

    case DELETE_JOB:
      newState = { ...state, jobs: state.jobs.filter((_, index) => index !== action.payload) };
      break;

    default:
      throw new Error('Invalid action');
  }

  console.log('✅ Updated state:', newState);
  return newState;
};

export function App() {
  const [state, dispatch] = useReducer(reducer, initialValue);
  const { job, jobs } = state;

  console.log('🔄 Component Rendered - Current State:', state);

  const handleSubmit = () => {
    if (job.trim()) {
      console.log('🛠 Dispatching ADD_JOB with payload:', job);
      dispatch(addJob(job));
      dispatch(setJob(''));
    }
  };

  return (
    <div style={{ padding: '0 20px' }}>
      <h3>Todo</h3>
      <input
        value={job}
        placeholder="Nhập gì đó..."
        onChange={(e) => dispatch(setJob(e.target.value))}  // Gọi dispatch(setJob('e.target.value'))
        // dispatch gửi action này đến reducer
        // reducer xử lý action được gửi
        // Hàm reducer chỉ hoạt động khi dispatch được gọi
      />
      <button onClick={handleSubmit}>Add</button>
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>
            {job}
            <button
              onClick={() => {
                console.log('🗑 Dispatching DELETE_JOB with index:', index);
                dispatch(deleteJob(index));
              }}
              style={{
                background: 'red',
                color: 'white',
                border: 'none',
                padding: '5px 10px',
                cursor: 'pointer',
              }}
            >
              &times;
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}




export default App;




// 1. Giỏ hàng
/*
import './App.css';
import React from 'react';
import { Children, use, useEffect, useState, useContext, useReducer, useRef } from 'react';


// 1️⃣ Khởi tạo state ban đầu
const initialState = {
  cart: [], // Giỏ hàng ban đầu rỗng
};

// 2️⃣ Định nghĩa các action
const ADD_PRODUCT = "add_product";
const REMOVE_PRODUCT = "remove_product";

// 3️⃣ Xây dựng reducer
const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        cart: [...state.cart, action.payload], // Thêm sản phẩm mới vào giỏ
      };
    case REMOVE_PRODUCT:
      return {
        ...state,
        cart: state.cart.filter((_, index) => index !== action.payload), // Xóa sản phẩm theo index
      };
    default:
      return state;
  }
};

// 4️⃣ Component chính
export function App() {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");

  // Danh sách sản phẩm mẫu
  const products = [
    { id: 1, name: "Laptop", price: 1500 },
    { id: 2, name: "Điện thoại", price: 800 },
    { id: 3, name: "Tai nghe", price: 200 },
  ];

  // Thêm sản phẩm từ input vào giỏ hàng
  const handleAddCustomProduct = () => {
    if (productName && productPrice) {
      const newProduct = { name: productName, price: parseFloat(productPrice) };
      dispatch({ type: ADD_PRODUCT, payload: newProduct });
      setProductName("");
      setProductPrice("");
    }
  };

  // Tính tổng tiền
  const totalPrice = state.cart.reduce((total, product) => total + product.price, 0);

  return (
    <div style={{ padding: "20px" }}>
      <h2>🛍️ Danh sách sản phẩm</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <button
              onClick={() => dispatch({ type: ADD_PRODUCT, payload: product })}
              style={{ marginLeft: "10px" }}
            >
              Thêm vào giỏ
            </button>
          </li>
        ))}
      </ul>

      <h2>🛒 Giỏ hàng</h2>
      <ul>
        {state.cart.map((product, index) => (
          <li key={index}>
            {product.name} - ${product.price}
            <button
              onClick={() => dispatch({ type: REMOVE_PRODUCT, payload: index })}
              style={{ marginLeft: "10px", color: "red" }}
            >
              Xóa
            </button>
          </li>
        ))}
      </ul>

      <h3>💰 Tổng tiền: ${totalPrice}</h3>

      <h2>➕ Thêm sản phẩm tùy chỉnh</h2>
      <input
        type="text"
        placeholder="Tên sản phẩm"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Giá sản phẩm"
        value={productPrice}
        onChange={(e) => setProductPrice(e.target.value)}
      />
      <button onClick={handleAddCustomProduct}>Thêm vào giỏ</button>
    </div>
  );
}


2. Todo List
import './App.css';
import React from 'react';
import { Children, use, useEffect, useState, useContext, useReducer, useRef } from 'react';


// 4️⃣ Component chính
export function App() {
  const [job, setJob] = useState();
  const [jobs, setJobs] = useState([]);
  const focusInput = useRef();

  const handleSubmit = () => {
    setJobs(prev => [...prev, job]);
    setJob('');
    focusInput.current.focus();
  }

  const handleKeyDown = (e) => {
    if(e.key === 'Enter') {
      setJobs(prev => [...prev, job]);
      setJob('');
      focusInput.current.focus();
    }
  }


  return (
    <div>
      <h3>Todo List</h3>
      <input 
        ref={focusInput}
        value={job}
        placeholder='Nhập gì đó...'
        onChange={e => setJob(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleSubmit}>Add</button>

      <ul>
        {jobs.map((job, index) => (
          <li key={index}>{job}</li>
        ))}
      </ul>
    </div>
  );

}

// Todo List
// Ô input nhập công việc
// và có một mảng để lưu công việc
// onChange để lấy dữ liệu nhập từ ô input
// Function để xử lý submit - handleSubmit xử lý thêm sản phẩm và xóa sản phẩm

export default App;
*/

// -------------------------------------------------------------------------------------

/*
import './App.css';
import React, { createContext } from 'react';
import { Children, use, useEffect, useState, useContext, useReducer, useRef } from 'react';


// useContext(): là một hook trong React giúp component có thể truy cập vào dữ liệu từ một Context mà không cần truyền props qua nhiều cấp. 
// Khi nào nên sử dụng useContext():
// -, Khi cần chia sẻ dữ liệu giữa nhiều component mà không muốn truyền qua props
// -, Khi có dữ liệu dùng chung như:
//    +, Chủ đề giao diện
//    +, Thông tin người dùng
//    +, Ngôn ngữ ứng dụng

const AuthContext = createContext();

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);

  // Hàm đăng nhập (giả lập)
  const login = (username) => {
    setUser({name: username});
  };

  // Hàm đăng xuất
  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{user, login, logout}}>
      {children}
    </AuthContext.Provider>
  );

  // Trong đó: 
  // user là trạng thái lưu thông tin người dùng (ban đầu là null)
  // login(username) đặt giá trị user khi đăng nhập
  // logout() đặt lại user về null khi đăng xuất
  // Dùng AuthContext.Provider để chia sẻ dữ liệu cho toàn bộ ứng dụng
}

const LoginButton = () => {
  const {user, login, logout} = useContext(AuthContext);
  const [username, setUsername] = useState();

  const HandleLogin = () => {
    login(username);
    setUsername('');
  }

  return (
    <div style={{textAlign: 'center', marginTop: '20px'}}>
      {user ? (
        <>
          <h3>Xin chào, {user.name}!</h3>
          <button onClick={logout}>Đăng xuất</button>
        </>
      ) : (
        <>
          <input 
            type='text'
            placeholder='Nhập tên...'
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
          <button onClick={HandleLogin}>Đăng nhập</button>
        </>
      )}
    </div>
  );
}


export function App() {
  // Xây dựng hệ thống đăng nhập đơn giản
  // Khi người dùng đăng nhập, giao diện sẽ hiển thị tên người dùng
  // Khi đăng xuất, giao diện trở về trạng thái ban đầu.
  return (
    <AuthProvider>
      <h2 style={{textAlign: 'center'}}>Hệ thống đăng nhập</h2>
      <LoginButton />
    </AuthProvider>
  );
}

*/