import React from 'react';
import NavigationBarBtn from './NavigationBarBtn';

export default function Header() {
    return(
        <>
            <div className="w-[1312px] h-16 absolute left-[99.5px] top-[13.5px] rounded-bl-20 rounded-br-20 bg-[#BCBAB8]" />
            <div className="w-screen h-3.5 absolute left-[-0.5px] top-0 bg-beige" />
            <div className="w-[251px] h-16 absolute left-[100px] top-[13.5px] rounded-bl-20 bg-beige" />
            <div className="w-[251px] h-16 absolute left-[1160.5px] top-[13.5px] rounded-br-20 bg-beige" />

            <div className="w-[1160px] h-15">
                <p className="absolute left-[184px] top-15 text-3xl font-medium text-center text-white">
                    MyW
                </p>
                <div className="absolute left-[452px]">
                    <NavigationBarBtn link='/'>
                        Home
                    </NavigationBarBtn>
                </div>
                <div className="absolute left-[607px]">
                    <NavigationBarBtn link='/mypage'>
                        My page
                    </NavigationBarBtn>
                </div>
                <div className="absolute left-[791px]">
                    <NavigationBarBtn link='/bookshelf'>
                        Bookshelf
                    </NavigationBarBtn>
                </div>
                <div className="absolute left-[996px]">
                    <NavigationBarBtn link='/login'>
                        Log in
                    </NavigationBarBtn>
                </div>
                <div className="absolute w=[114px] left-[1230px] top-2.5 text-2xl font-medium text-right text-white">
                        Make your<br/>
                        World
                </div>
            </div>
        </>
    );
}