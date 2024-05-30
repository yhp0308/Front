import React from 'react';
import Header from './components/Header';
import SearchButtons from './components/SearchButtons';
import JobCategorySelection from './components/JobCategorySelection';
import NavigationButtons from './components/NavigationButtons';
import MyPageButton from './components/MyPageButton';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <SearchButtons />
        <JobCategorySelection />
        <NavigationButtons />
        <MyPageButton />
      </main>
    </div>
  );
}

export default App;
