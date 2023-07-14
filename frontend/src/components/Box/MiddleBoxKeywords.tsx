import React from 'react';

interface MiddleBoxKeywordsProps {
  selectedKeywords: string[];
  onKeywordClick: (keyword: string) => void;
}

const MiddleBoxKeywords: React.FC<MiddleBoxKeywordsProps> = ({ selectedKeywords, onKeywordClick }) => {
  const handleKeywordClick = (keyword: string) => {
    onKeywordClick(keyword);
  };

  return (
    <div style={{ flex: '1', overflow: 'auto' }}>
      <div style={{ width: '100%', height: '526px', backgroundColor: '#FFFFFF' }}>
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
    </div>
  );
};

export default MiddleBoxKeywords;
