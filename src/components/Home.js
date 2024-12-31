import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

function Home() {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className="home-container">
      <Navbar />
      <main className="main-content">
        <section className="welcome-section">
          <h1>환영합니다</h1>
          <p>저희 웹사이트를 방문해 주셔서 감사합니다.</p>
          <button className="logout-btn" onClick={handleLogout}>로그아웃</button>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Home; 