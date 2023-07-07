import React from 'react';
import SelectBox from './SelectBox';

export default function Choice() {
    return (
    <div className='flex flex-col space-y-4'>
        <div className="w-7/12 h-[453px]">
            <div
                className="w-7/12 h-2/5 absolute inset-x-80 top-[115.5px] bg-[#fdf9f6]"
                style={{
                    boxShadow: "0px 4px 4px 0 rgba(0,0,0,0.25), 0px 4px 4px 0 rgba(0,0,0,0.25), 0px 4px 4px 0 rgba(0,0,0,0.25)",
                }}
            />
                <p className="w-[749px] h-[420px] absolute left-[382px] top-[149px] text-xl text-left text-black">
                    <span className="w-[749px] h-[420px] text-xl text-left text-black">
                        이블린과 해럴드는 눈길을 브랜든에게 돌렸다. "어떤 방법이 있을까요?" 해럴드가 물었다.
                        <br/>
                        "우리 주위에는 탐사 임무를 위해 보낸 우주선이나 시설이 있을 것이다. 그런 곳에서 추가 연료를
                        구할 수 있을지도 몰라."
                        <br/>
                        "하지만 우리는 화성의 표면에서 멀리 떨어져 있잖아요." 이블린이 말했다. "우리가 가까운 시설에
                        도달할 시간은 없을 텐데요."
                        <br/>
                        "그렇다면 우리는 이 우주선에서 대기하며 구조 대기를 요청해야 합니다." 해럴드가 제안했다.
                        "우리가 발신할 수 있는 신호를 어떻게든 보내야 합니다."
                        <br/>
                        이블린과 해럴드는 주저하고 있었지만, 브랜든은 단호하게 말했다. "너희들은 돌아갈 수 있는
                        방법을 찾으려고 하지만, 우리가 죽는 것보다는 시도해 보는 게 낫지 않을까? 우리는 우주에
                        도전한 사람들이야. 실패를 두려워하지 말자."
                    </span>
                </p>
        </div>

        <div
            className="w-7/12 h-12 rounded-[20px] absolute inset-x-80 bg-choice"
            style={{ boxShadow: "0px 4px 4px 0 rgba(0,0,0,0.25), 0px 4px 4px 0 rgba(0,0,0,0.25)" }}
        >
            <p className="text-xl text-center text-black inline-block inset-y-1/2">
                이제 이블린의 선택이 필요합니다. 이블린은 브랜든의 제안을 받아들일까요?
            </p>
        </div>
        <div className='flex flex-col space-y-1'>
            <SelectBox />
            <SelectBox />
            <SelectBox />
            <SelectBox />
        </div>
    </div>
    );
}