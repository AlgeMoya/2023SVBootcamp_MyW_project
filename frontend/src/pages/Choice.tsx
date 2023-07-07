import React from 'react';
import styled from 'styled-components';

type ImageProps = {
    url: string
}

const Image = styled.div<ImageProps>`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background: url(${ props => props.url });
`

export default function Choice() {
    return(
        <>
        <Image url='/images/dall.png'>
            <div className="w-full h-16 absolute left-0 top-3.5 bg-white/60" />
            <div className="w-full h-16 absolute left-0 bottom-0 bg-white/60" />
            <p className="absolute inset-x-2/4 inset-y-2/4 text-left text-5xl text-white">click!</p>
        </Image>
        </>
    );
}