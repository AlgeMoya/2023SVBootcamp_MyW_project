import React, { useState } from 'react';

interface LeftBoxGenreProps {
  selectedGenres: string[];
  onGenreClick: (genre: string) => void;
  onGenreSubmit: (genre: string) => void;
}

const LeftBoxGenre: React.FC<LeftBoxGenreProps> = ({ selectedGenres, onGenreClick, onGenreSubmit }) => {
  const [newGenre, setNewGenre] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewGenre(event.target.value);
  };

  const handleAddGenre = () => {
    if (newGenre.trim() !== '') {
      onGenreSubmit(newGenre);
      setNewGenre('');
    }
  };

  const handleGenreClick = (genre: string) => {
    onGenreClick(genre);
  };

  const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleAddGenre();
    }
  };

  const renderGenre = () => {
    if (selectedGenres.length > 0) {
      return selectedGenres.map((genre, index) => (
        <div
          key={index}
          style={{
            width: '78.6px',
            height: '40.1px',
            backgroundColor: selectedGenres.includes(genre) ? '#9B8F8F' : '#E3DDD7',
            borderRadius: '20px',
            margin: '5px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
          }}
          onClick={() => handleGenreClick(genre)}
        >
          <p style={{ color: selectedGenres.includes(genre) ? '#FFFFF' : '#000000' }}>{genre}</p>
        </div>
      ));
    } else {
      return <p></p>;
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.4)',
        marginBottom: '2px',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#C8C0B8', padding: '0 18px' }}>
        <p style={{ color: '#FFFFFF', fontSize: '24px', marginLeft: '-5px' }}>장르</p>
        <div style={{ display: 'flex', alignItems: 'center', marginLeft: 'auto', flex: '1' }}>
          <input
            type="text"
            value={newGenre}
            onChange={handleInputChange}
            onKeyDown={handleInputKeyDown}
            placeholder="원하는 장르를 추가하세요"
            style={{
              width: '100%',
              height: '44px',
              marginLeft: '10px',
              marginRight: '-20px',
              padding: '0 10px',
            }}
          />
          <div
            style={{ color: '#9B8F8F', display: 'flex', alignItems: 'center', cursor: 'pointer', fontSize: '20px' }}
            onClick={handleAddGenre}
          >
            ⨁
          </div>
        </div>
      </div>
      <div style={{ width: '322px', height: 'auto', backgroundColor: '#FFFFFF', display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {renderGenre()}
      </div>
    </div>
  );
};

export default LeftBoxGenre;
