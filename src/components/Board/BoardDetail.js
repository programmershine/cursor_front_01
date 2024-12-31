import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../../api/axios';
import Navbar from '../Navbar';
import Footer from '../Footer';

function BoardDetail() {
  const [post, setPost] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchPost();
  }, [id]);

  const fetchPost = async () => {
    try {
      const response = await api.get(`/api/posts/${id}`);
      setPost(response.data);
    } catch (error) {
      console.error('게시글 로딩 실패:', error);
      navigate('/board');
    }
  };

  if (!post) return <div>Loading...</div>;

  return (
    <div className="board-container">
      <Navbar />
      <main className="board-content">
        <div className="post-detail">
          <h2>{post.title}</h2>
          <div className="post-info">
            <span>작성자: {post.author}</span>
            <span>작성일: {new Date(post.createdAt).toLocaleDateString()}</span>
          </div>
          <div className="post-content">
            {post.content}
          </div>
          <div className="post-actions">
            <button onClick={() => navigate('/board')}>목록으로</button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default BoardDetail; 