import React, {useState} from 'react';
import styled from 'styled-components';
import Choice from '../components/Choice';
import data from '../data/choice-data.json';

type ImageProps = {
    url: string
}

const Image = styled.div<ImageProps>`
    position: absolute;
    top: 0;
    left: 0;
    width:100vw;
    min-height: 100vh;
    background-size: cover;
    background-repeat: no-repeat;
    background: url(${ props => props.url });
    background-attachment: fixed;
`

export default function ChociePage() {
    const [visible, setVisible] = useState(false);
    return(
        <div>
            <Image url={data.url}>
                {visible ? "": <div className="w-full h-16 absolute left-0 top-3.5 bg-white/60" />}
                {visible ? "": <div className="w-full h-16 absolute left-0 bottom-0 bg-white/60" />}
                <button 
                    className="animate-pulse animate-infinite absolute inset-x-2/4 inset-y-2/4 text-left text-7xl text-white"
                    onClick={() => {
                        setVisible(!visible)
                    }}
                > 
                    {visible ? "": "click!"}
                </button>
                {visible ? <Choice story={data.story} question={data.question} choices={data.choices} /> : "click!"}
            </Image>
        </div>
    );
}