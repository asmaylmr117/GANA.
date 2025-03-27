  
import React, { useState } from 'react';
import './App.css';
import Quran from './Quran';
import Azkar from './Azkar';
import Misbaha from './Misbaha';
import Sidebar from './Sidebar';
import backgroundImage from '/img/photo.jpg';
const App = () => {
  const [activeSection, setActiveSection] = useState('quran');
  const [activeSurahIndex, setActiveSurahIndex] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeSidebarSection, setActiveSidebarSection] = useState(null);
  const [activeAzkarContent, setActiveAzkarContent] = useState(null);
  const [count, setCount] = useState(0);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
    setActiveSurahIndex(null);
    setActiveAzkarContent(null);
  };

  const showSurah = (index) => {
    setActiveSurahIndex(index);
  };

  const closeSurah = () => {
    setActiveSurahIndex(null);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    setActiveSidebarSection(null);
  };

  const handleSidebarSectionClick = (section) => {
    if (section === 'logout') {
      closeWindow();
    } else {
      setActiveSidebarSection(activeSidebarSection === section ? null : section);
    }
  };

  const closeWindow = () => {
    window.open('about:blank', '_self').close();
  };

  const handleAzkarClick = (section) => {
    setActiveAzkarContent(section);
  };

  const handleBackToAzkar = () => {
    setActiveAzkarContent(null);
  };

  const handleClick = () => {
    setCount(count + 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="container mx-auto p-4 " class="background-image" style={{
      backgroundImage: `url(${backgroundImage})`
    }} >
      <div className="bg-gray-800 p-4 flex justify-between items-center">
  <div className="flex items-center space-x-2 sm:space-x-4">
    <button className="text-yellow-500 icon" onClick={toggleSidebar}>
      <div className="space-y-1">
        <div className="w-5 h-0.5 bg-white"></div>
        <div className="w-5 h-0.5 bg-white"></div>
        <div className="w-5 h-0.5 bg-white"></div>
      </div>
    </button>
    <h1 className="text-white text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl whitespace-nowrap">
      الطريق إلى الجنة
    </h1>
  </div>
  <div className="flex space-x-2 sm:space-x-4 lg:space-x-8 ml-4">
    <button className="text-yellow-500 text-xs sm:text-sm md:text-base lg:text-lg icon" onClick={() => toggleSection('quran')}>
      القرآن الكريم
    </button>
    <button className="text-yellow-500 text-xs sm:text-sm md:text-base lg:text-lg icon" onClick={() => toggleSection('azkar')}>
      الأذكار
    </button>
    <button className="text-yellow-500 text-xs sm:text-sm md:text-base lg:text-lg icon" onClick={() => toggleSection('misbaha')}>
      المسبحة الإلكترونية
    </button>
  </div>
</div>

      {isSidebarOpen && (
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
          handleSidebarSectionClick={handleSidebarSectionClick}
          closeWindow={closeWindow}
        />
      )}

      {activeSection === 'quran' && (
        <Quran
          activeSurahIndex={activeSurahIndex}
          showSurah={showSurah}
          closeSurah={closeSurah}
        />
      )}

      {activeSection === 'azkar' && (
        <Azkar
          activeAzkarContent={activeAzkarContent}
          handleAzkarClick={handleAzkarClick}
          handleBackToAzkar={handleBackToAzkar}
        />
      )}

      {activeSection === 'misbaha' && (
        <Misbaha
          count={count}
          handleClick={handleClick}
          handleReset={handleReset}
        />
      )}
    </div>
  );
};

export default App;
