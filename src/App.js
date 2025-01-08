import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import PrivateRoute from './components/PrivateRoute';
import BoardList from './components/Board/BoardList';
import BoardDetail from './components/Board/BoardDetail';
import BoardWrite from './components/Board/BoardWrite';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route path="/board" element={<BoardList />} />
          <Route path="/board/:id" element={<BoardDetail />} />
          <Route path="/board/write" element={<BoardWrite />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
