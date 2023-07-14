import React, { useState } from 'react';

interface MiddleBoxEraProps {
  selectedEras: string[];
  onEraClick: (era: string) => void;
  onEraSubmit: (era: string) => void;
}

const MiddleBoxEra: React.FC<MiddleBoxEraProps> = ({ selectedEras, onEraClick, onEraSubmit }) => {
  const [newEra, setNewEra] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewEra(event.target.value);
  };

  const handleAddEra = () => {
    if (newEra.trim() !== '') {
      onEraSubmit(newEra);
      setNewEra('');
    }
  };

  const handleEraClick = (era: string) => {
    onEraClick(era);
  };

  const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleAddEra();
    }
  };

  const renderEras = () => {
    if (selectedEras.length > 0) {
      return selectedEras.map((era, index) => (
        <div
          key={index}
          style={{
            width: '78.6px',
            height: '40.1px',
            backgroundColor: selectedEras.includes(era) ? '#9B8F8F' : '#E3DDD7',
            borderRadius: '20px',
            margin: '5px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
          }}
          onClick={() => handleEraClick(era)}
        >
          <p style={{ color: selectedEras.includes(era) ? '#FFFFF' : '#000000' }}>{era}</p>
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
        <p style={{ color: '#FFFFFF', fontSize: '24px', marginLeft: '-5px' }}>시대</p>
        <div style={{ display: 'flex', alignItems: 'center', marginLeft: 'auto', flex: '1' }}>
          <input
            type="text"
            value={newEra}
            onChange={handleInputChange}
            onKeyDown={handleInputKeyDown}
            placeholder="원하는 시대를 추가하세요"
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
            onClick={handleAddEra}
          >
            ⨁
          </div>
        </div>
      </div>
      <div style={{ width: '322px', height: 'auto', backgroundColor: '#FFFFFF', display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {renderEras()}
      </div>
    </div>
  );
};

export default MiddleBoxEra;
