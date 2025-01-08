import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import BoardDetail from './components/Board/BoardDetail';
import BoardWrite from './components/Board/BoardWrite';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/community/write" element={<BoardWrite />} />
            <Route path="/community/:id" element={<BoardDetail />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App; 