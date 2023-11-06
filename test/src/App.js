import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import NewAccont from './Component-login/NewAccont';
// import Login from './Component-login/Login';
import './App.css';
import Coding from './Component-Qiuz/Coding';

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Routes>
        <Route path="/" exact element={<Login/>} /> 
        <Route path="/Newaccont" element={<NewAccont />} />
      </Routes> */}
        <Coding />
        
      </div>
    </Router>
  );
}

export default App;
