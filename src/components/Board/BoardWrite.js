import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../api/axios';
import Navbar from '../Navbar';
import Footer from '../Footer';

function BoardWrite() {
  const [postData, setPostData] = useState({
    title: '',
    content: '',
    author: localStorage.getItem('userName') || ''
  });
  const navigate = useNavigate();

  useEffect(() => {
    const userInfo = sessionStorage.getItem('userInfo');
    if (userInfo) {
      const { userId } = JSON.parse(userInfo);
      setPostData(prev => ({
        ...prev,
        author: userId
      }));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPostData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!postData.author) {
        alert('로그인이 필요합니다.');
        navigate('/login');
        return;
      }
      await api.post('/api/posts', {
        title: postData.title,
        content: postData.content,
        author: localStorage.getItem('userName')
      });
      navigate('/board');
    } catch (error) {
      console.error('게시글 작성 실패:', error);
    }
  };

  return (
    <div className="board-container">
      <Navbar />
      <main className="board-content">
        <h2>글쓰기</h2>
        <form onSubmit={handleSubmit} className="write-form">
          <div className="form-group">
            <label>작성자</label>
            <input
              type="text"
              value={postData.author}
              disabled
              className="author-input"
            />
          </div>
          <div className="form-group">
            <label>제목</label>
            <input
              type="text"
              name="title"
              value={postData.title}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>내용</label>
            <textarea
              name="content"
              value={postData.content}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-actions">
            <button type="submit">등록</button>
            <button type="button" onClick={() => navigate('/board')} className="cancel-btn">
              취소
            </button>
          </div>
        </form>
      </main>
      <Footer />
    </div>
  );
}

export default BoardWrite; 