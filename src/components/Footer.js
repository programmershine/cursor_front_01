import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>회사 정보</h3>
          <p>상호명: (주)ABC Company</p>
          <p>대표이사: 홍길동</p>
          <p>사업자등록번호: 123-45-67890</p>
        </div>
        <div className="footer-section">
          <h3>연락처</h3>
          <p>주소: 서울특별시 강남구 테헤란로 123</p>
          <p>전화: 02-1234-5678</p>
          <p>이메일: info@abccompany.com</p>
        </div>
        <div className="footer-section">
          <h3>고객지원</h3>
          <p>운영시간: 평일 09:00 - 18:00</p>
          <p>점심시간: 12:00 - 13:00</p>
          <p>토/일/공휴일 휴무</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 ABC Company. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer; 