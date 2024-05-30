import React from 'react';
import './SearchButtons.css';

const SearchButtons = () => {
  return (
    <div className="search-buttons">
      <button className="search-btn">직무 기반 검색</button>
      <button className="search-btn">NCS 기반 검색</button>
      <button className="search-btn">텍스트 검색</button>
    </div>
  );
};

export default SearchButtons;
