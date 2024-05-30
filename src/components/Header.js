import React from 'react';
import './Header.css';
import star from '../assets/star 1.png';

const Header = () => {
  return (
    <header className="App-header">
      <div className="logo">
        <img src={star} alt="star" className="logo-image" />
        국비 나침반
      </div>
      <div className="auth-buttons">
        <button>로그인</button>
        <button>회원가입</button>
      </div>
    </header>
  );
};

export default Header;
