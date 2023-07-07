import React from 'react';

export default function SelectBox() {
    return (
        <div className="w-7/12 h-12">
            <button 
                className="w-7/12 h-12 bg-beige-white absolute inset-x-80 text-17 font-light text-center text-black"
                style={{ boxShadow: "0px 4px 4px 0 rgba(0,0,0,0.25)" }}
            >
                받아들인다.
            </button>
            <button 
                className="w-[81px] h-12 bg-choice absolute inset-x-80 text-25 font-light text-center text-black"
                style={{ boxShadow: "0px 4px 4px 0 rgba(0,0,0,0.25)" }}
            >
                A
            </button>
        </div>
    );
}