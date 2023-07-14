import React, { useState } from 'react';

interface RightBoxBackgroundProps {
  selectedBackground: string[];
  onBackgroundClick: (background: string) => void;
  onBackgroundSubmit: (background: string) => void;
}

const RightBoxBackground: React.FC<RightBoxBackgroundProps> = ({ selectedBackground, onBackgroundClick, onBackgroundSubmit }) => {
  const [newBackground, setNewBackground] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewBackground(event.target.value);
  };

  const handleAddBackground = () => {
    if (newBackground.trim() !== '') {
      onBackgroundSubmit(newBackground);
      setNewBackground('');
    }
  };

  const handleBackgroundClick = (background: string) => {
    onBackgroundClick(background);
  };

  const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleAddBackground();
    }
  };

  const renderBackgrounds = () => {
    if (selectedBackground.length > 0) {
      return selectedBackground.map((background, index) => (
        <div
          key={index}
          style={{
            width: '78.6px',
            height: '40.1px',
            backgroundColor: selectedBackground.includes(background) ? '#9B8F8F' : '#E3DDD7',
            borderRadius: '20px',
            margin: '5px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
          }}
          onClick={() => handleBackgroundClick(background)}
        >
          <p style={{ color: selectedBackground.includes(background) ? '#FFFFFF' : '#000000' }}>{background}</p>
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
        <p style={{ color: '#FFFFFF', fontSize: '24px', marginLeft: '-5px' }}>배경</p>
        <div style={{ display: 'flex', alignItems: 'center', marginLeft: 'auto', flex: '1' }}>
          <input
            type="text"
            value={newBackground}
            onChange={handleInputChange}
            onKeyDown={handleInputKeyDown}
            placeholder="원하는 배경을 추가하세요"
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
            onClick={handleAddBackground}
          >
            ⨁
          </div>
        </div>
      </div>
      <div style={{ width: '322px', height: 'auto', backgroundColor: '#FFFFFF', display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {renderBackgrounds()}
      </div>
    </div>
  );
};

export default RightBoxBackground;