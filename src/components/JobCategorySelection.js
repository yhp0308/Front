import React from 'react';
import './JobCategorySelection.css';

const JobCategorySelection = () => {
  return (
    <div className="job-category-selection">
      <div className="job-category">
        <h3>직업분류 선택 1차</h3>
        <select multiple>
          <option>01. 관리직(임원·부서장)</option>
          <option>02. 경영·행정·사무직</option>
          <option>03. 금융·보험직</option>
          <option>11. 인문·사회과학 연구직</option>
          <option>12. 자연 생명과학 연구직</option>
          <option>13. 정보통신 연구개발직 및 응용기술직</option>
          <option>14. 건설 건축 연구개발직 및 응용기술직</option>
          <option>15. 제조 연구개발직 및 응용기술직</option>
          <option>21. 교육직</option>
          <option>22. 법률직</option>
          <option>23. 사회복지·종교직</option>
          <option>24. 경찰·소방·교도직</option>
          <option>25. 군인</option>
          <option>30. 보건·의료직</option>
          <option>41. 예술·디자인·방송직</option>
          <option>42. 스포츠·레크리에이션직</option>
          <option>51. 미용·예식 서비스직</option>
          <option>52. 여행·숙박·오락 서비스직</option>
          <option>53. 음식 서비스직</option>
          <option>54. 경호·경비직</option>
          <option>55. 돌봄 서비스직(간병·육아)</option>
          <option>56. 청소 및 기타 개인서비스직</option>
          <option>61. 영업·판매직</option>
          <option>61. 건설·채굴직</option>
          <option>62. 기계 설치·정비·생산직</option>
          <option>22. 금속·재료 설치·정비·생산직(판금·단조·주조·용접·도장 등)</option>
          <option>22. 전기·전자 설치·정비·생산직</option>
          <option>22. 정보통신 설치·정비직</option>
          <option>22. 화학·환경 설치·정비·생산직</option>
          <option>22. 섬유·의복 생산직</option>
          <option>22. 인쇄·목재·공예 및 기타 설치·정비·생산직</option>
          <option>22. 제조 단순직</option>
          <option>22. 농림어업직</option>
        </select>
      </div>
      <div className="job-category">
        <h3>직업분류 선택 2차</h3>
        <select multiple></select>
      </div>
      <div className="job-category">
        <h3>직업분류 선택 3차</h3>
        <select multiple></select>
      </div>
    </div>
  );
};

export default JobCategorySelection;
