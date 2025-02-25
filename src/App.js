import React, { useReducer, useRef, useEffect, use, useState, useContext, createContext } from 'react';
import  Test  from './test';
import './App.css';

// React.memo và useCallback là hai công cụ tối ưu hóa - khi ứng dụng có nhiều component con render lại không cần thiết

// 1. React.memo (Ghi nhớ): giúp ghi nhớ kết quả render của một component dựa trên props.
// Nếu props không thay đổi, component sẽ không re-render
// React.memo sẽ re-render nếu như component hoặc props trong component bị thay đổi

// Khi nào dùng React.memo:
// Khi một component con render lại không cần thiết 
// Khi một component nhận props từ chia và không thay đổi thường xuyên


// 2. useCallback: giúp tạo ra một hàm 'ghi nhớ', chỉ thay đổi khi dependency thay đổi

const ThemeContext = createContext('light');  // Tạo một Context có giá trị mặc định là light

const HandleContext = ({children}) => {
  const [theme, setTheme] = useState('light');

  const toggle = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{theme, toggle}}>
      {children}
    </ThemeContext.Provider>
  );
}


const GetContext = () => {
  const {theme, toggle} = useContext(ThemeContext);

  return (
    <div style={{
      background: theme === 'light' ? 'white' : '#333',
      color: theme === 'light' ? 'black' : 'white'
    }}>
      <h2>Chủ đề hiện tại: {theme}</h2>
      <button onClick={toggle}>Chuyển chủ đề</button>
    </div>
  );
}


export function App() {
  // useContext() - chia sẻ dữ liệu giữa nhiều component mà không cần truyển thông qua bất kỳ component nào khác (nghĩa là nó có thể lấy giá trị trực tiếp từ Provider gần nhất)
  // Chức năng: Giúp truyền dữ liệu qua nhiều component mà không cần truyền qua props từng cấp
  // Ví dụ: Một nút bấm có thể thay đổi chủ đề sáng/tối cho toàn bộ trang web.

  // Tưởng tượng: 
  // Có một biến theme lưu trạng thái dark hoặc light.
  // Nếu bạn đổi theme, tất cả component trong ứng dụng sẽ thay đổi màu sắc theo.

  return (
    <HandleContext>
      <GetContext />
    </HandleContext>
  );
}  
export default App;

// I. Component React thực chất là một function, nhưng nó được gọi là component vì:
// -, Nó đóng vai trò như một đơn vị độc lập, tái sử dụng được trong việc xây dựng giao diện người dùng.
// -, Function Component không chỉ là một hàm, mà nó còn tích hợp các tính năng mạnh mẽ của Reat như state, hooks và JSX.


// II. Kiến thức về hooks trong React:
// 1. useState() - Quản lý các state trong function component (dùng để tạo state và cập nhật giá trị state).
// 2. useEffect() - Xử lý side effects
// - Side effect (Hiệu ứng phụ) là bất kỳ hành động nào tương ứng với thế giới bên ngoài phạm vi của component, chẳng hạn như:
// - Side effect là các hành động tương tác với môi trường bên ngoài phạm vi component, chẳng hạn như gọi API, thao tác với DOM, hoặc đăng ký sự kiện.
/* Cú pháp:
    useEffect(() => {
      // logic chạy sau khi component render
    }, [dependency])

    - []: Không truyền dependency (chỉ để là mảng rỗng) thì chỉ chạy một lần duy nhất khi component mount.
    - [dependency]: Truyền dependency - chỉ chạy khi dependency thay đổi
*/
// 3. useContext() - Quản lý state global
// - Dùng để chia sẻ dữ liệu giữa các component mà không cần truyền props qua nhiều cấp. (Truyền trực tiếp từ A -> C mà không phải qua B)
// => Tóm lại:
// 1. useState(): Quản lý state.
// 2. useEffect(): Xử lý side effect (call API, event listener,...).
// 3. useContext(): Quản lý state toàn cục.
// 4. useReducer(): Quản lý state phức tạp, thay thế useState trong một số trường hợp.
// 5. useMemo(): Ghi nhớ giá trị toán nặng để tối ưu hiệu suất. (Ghi nhớ - có props - nếu props mà thay đổi thì nó mới re-render)
// 6. useCallback(): Ghi nhớ hàm để tránh tạo lại không cần thiết. 




