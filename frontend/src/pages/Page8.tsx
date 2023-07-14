import React, { useState } from 'react';
import LeftBoxGenre from '../components/Box/LeftBoxGenre';
import LeftBoxKeywords from '../components/Box/LeftBoxKeywords';
import MiddleBoxEra from '../components/Box/MiddleBoxEra';
import MiddleBoxKeywords from '../components/Box/MiddleBoxKeywords';
import RightBoxBackground from '../components/Box/RightBoxBackground';
import RightBoxKeywords from '../components/Box/RightBoxKeywords';

const Page8: React.FC = () => {
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [selectedLeftKeywords, setSelectedLeftKeywords] = useState<string[]>([]);
  const [selectedMiddleEra, setSelectedMiddleEra] = useState<string[]>([]);
  const [selectedMiddleKeywords, setSelectedMiddleKeywords] = useState<string[]>([]);
  const [selectedRightBackground, setSelectedRightBackground] = useState<string[]>([]);
  const [selectedRightKeywords, setSelectedRightKeywords] = useState<string[]>([]);

  const handleGenreClick = (genre: string) => {
    setSelectedGenres((prevGenres) => {
      if (prevGenres.includes(genre)) {
        return prevGenres.filter((g) => g !== genre);
      } else {
        return [...prevGenres, genre];
      }
    });
  };

  const handleLeftKeywordClick = (keyword: string) => {
    setSelectedLeftKeywords((prevKeywords) => {
      if (prevKeywords.includes(keyword)) {
        return prevKeywords.filter((k) => k !== keyword);
      } else {
        return [...prevKeywords, keyword];
      }
    });
  };

  const handleMiddleEraClick = (era: string) => {
    setSelectedMiddleEra((prevEra) => {
      if (prevEra.includes(era)) {
        return prevEra.filter((e) => e !== era);
      } else {
        return [...prevEra, era];
      }
    });
  };

  const handleMiddleKeywordClick = (keyword: string) => {
    setSelectedMiddleKeywords((prevKeywords) => {
      if (prevKeywords.includes(keyword)) {
        return prevKeywords.filter((k) => k !== keyword);
      } else {
        return [...prevKeywords, keyword];
      }
    });
  };

  const handleRightBackgroundClick = (background: string) => {
    setSelectedRightBackground((prevBackgrounds) => {
      if (prevBackgrounds.includes(background)) {
        return prevBackgrounds.filter((b) => b !== background);
      } else {
        return [...prevBackgrounds, background];
      }
    });
  };
  

  const handleRightKeywordClick = (keyword: string) => {
    setSelectedRightKeywords((prevKeywords) => {
      if (prevKeywords.includes(keyword)) {
        return prevKeywords.filter((k) => k !== keyword);
      } else {
        return [...prevKeywords, keyword];
      }
    });
  };

  const handleLeftKeywordSubmit = (keyword: string) => {
    setSelectedLeftKeywords((prevKeywords) => [...prevKeywords, keyword]);
  };

  const handleMiddleKeywordSubmit = (keyword: string) => {
    setSelectedMiddleKeywords((prevKeywords) => [...prevKeywords, keyword]);
  };

  const handleRightKeywordSubmit = (keyword: string) => {
    setSelectedRightKeywords((prevKeywords) => [...prevKeywords, keyword]);
  };

  const handleNextPageClick = () => {
    // Handle next page logic here
  };

  return (
    <div
      style={{
        position: 'absolute',
        top: '100px',
        bottom: '100px',
        left: '100px',
        right: '100px',
        height: '80vh',
        marginBottom: '0.1%',
        backgroundColor: '#E3DDD7',
        padding: '50px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <div style={{ display: 'flex', flex: '1' }}>
        <div style={{ flex: '1', marginRight: '50px', overflow: 'auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <LeftBoxGenre
              selectedGenres={selectedGenres}
              onGenreClick={handleGenreClick}
              onGenreSubmit={handleLeftKeywordSubmit}         />
            <LeftBoxKeywords
              selectedKeywords={selectedLeftKeywords}
              onKeywordClick={handleLeftKeywordClick}
            />
          </div>
        </div>
        <div style={{ flex: '1', marginRight: '50px', overflow: 'auto' }}>
          <MiddleBoxEra
            selectedEras={selectedMiddleEra}
            onEraClick={handleMiddleEraClick}
            onEraSubmit={handleMiddleKeywordSubmit}
          />
          <MiddleBoxKeywords
            selectedKeywords={selectedMiddleKeywords}
            onKeywordClick={handleMiddleKeywordClick}
          />
        </div>
        <div style={{ flex: '1', overflow: 'auto' }}>
          <RightBoxBackground
            selectedBackground={selectedRightBackground}
            onBackgroundClick={handleRightBackgroundClick}
            onBackgroundSubmit={handleRightKeywordSubmit}
          />
          <RightBoxKeywords
            selectedKeywords={selectedRightKeywords}
            onKeywordClick={handleRightKeywordClick}
          />
        </div>
      </div>
      <button
        style={{
          width: '233px',
          height: '50px',
          marginLeft: 'auto',
          backgroundColor: '#9B8F8F',
          color: '#FFFFFF',
          borderRadius: '10px',
          fontSize: '20px',
          cursor: 'pointer',
        }}
        onClick={handleNextPageClick}
      >
        다음
      </button>
      <div
        style={{
          position: 'absolute',
          top: '-37px',
          fontWeight: 'bold',
          fontFamily: 'Inria Serif',
          left: '0',
          width: '100%',
          height: '0%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '55px',
          color: '#6B3A18',
          backgroundColor: 'transparent',
        }}
      >
        Sketch Story
      </div>
    </div>
  );
};

export default Page8;
