import './App.css';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import Notice from './components/Notice.js';
import Date from './components/Date.js';
import Main from './Main.js';

function App() {
  return (

    <div className="App">
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/notice" element={<Notice />}/>
        <Route path="/date" element={<Date />}/>
      </Routes>

    </div>
  );
}


export default App;
