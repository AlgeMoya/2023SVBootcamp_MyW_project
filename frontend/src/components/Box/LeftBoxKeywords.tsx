import React from 'react';

interface LeftBoxKeywordsProps {
  selectedKeywords: string[];
  onKeywordClick: (keyword: string) => void;
}

const LeftBoxKeywords: React.FC<LeftBoxKeywordsProps> = ({ selectedKeywords, onKeywordClick }) => {
  const handleKeywordClick = (keyword: string) => {
    onKeywordClick(keyword);
  };

  return (
    <div style={{ width: '100%', height: '526px', backgroundColor: '#FFFFFF', overflow: 'auto' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {selectedKeywords.length > 0 ? (
          selectedKeywords.map((keyword, index) => (
            <div
              key={index}
              style={{
                minWidth: '78.6px',
                height: '40.1px',
                backgroundColor: '#E3DDD7',
                borderRadius: '20px',
                margin: '5px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer',
              }}
              onClick={() => handleKeywordClick(keyword)}
            >
              <p style={{ color: '#000' }}>{keyword}</p>
            </div>
          ))
        ) : (
          <div style={{ height: '40.1px' }} />
        )}
      </div>
    </div>
  );
};

export default LeftBoxKeywords;
