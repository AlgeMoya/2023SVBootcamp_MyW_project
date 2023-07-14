import React from 'react';

interface NextButtonProps {
  onClick: () => void;
}

const NextButton: React.FC<NextButtonProps> = ({ onClick }) => {
  return (
    <button
      style={{
        width: '233px',
        height: '50px',
        backgroundColor: '#9B8F8F',
        color: '#FFFFFF',
        border: 'none',
        borderRadius: '5px',
        fontSize: '16px',
        fontWeight: 'bold',
        cursor: 'pointer',
      }}
      onClick={onClick}
    >
      다음
    </button>
  );
};

export default NextButton;
