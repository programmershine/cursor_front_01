import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../../api/axios';
import Navbar from '../Navbar';
import Footer from '../Footer';

function BoardList() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await api.get('/board/posts');
      setPosts(response.data);
    } catch (error) {
      console.error('게시글 로딩 실패:', error);
    }
  };

  return (
    <div className="board-container">
      <Navbar />
      <main className="board-content">
        <h2>게시판</h2>
        <div className="board-header">
          <button onClick={() => navigate('/board/write')} className="write-btn">
            글쓰기
          </button>
        </div>
        <table className="board-table">
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>글쓴이</th>
              <th>작성일</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post.id} onClick={() => navigate(`/board/${post.id}`)}>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.author}</td>
                <td>{new Date(post.createdAt).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
      <Footer />
    </div>
  );
}

export default BoardList; 