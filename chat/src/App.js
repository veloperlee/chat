import './App.css';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import Notice from './page/Notice.js';
import MyCalendar from './page/MyCalendar.js';
import Main from './Main.js';

function App() {
  return (

    <div className="App">
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/notice" element={<Notice />}/>
        <Route path="/Calendar" element={<MyCalendar />}/>
      </Routes>

    </div>
  );
}


export default App;
