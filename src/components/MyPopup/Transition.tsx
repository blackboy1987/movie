import * as React from 'react';
import classNames from 'classnames';
import './index.css';
import {View} from "remax/wechat";
import {useEffect, useState} from "react";
import {usePageEvent} from "remax/macro";

type TransitionProps = {
    transform?: string;
    show?: boolean;
    modeClass?: string[];
    duration?: number;
    styles?: {
        [key: string]: any
    }
}

type Ani = {
    in: string;
    active: string;
}

const Transition:React.FC<TransitionProps> = ({show=false,modeClass=[],duration=300,styles={},transform,children}) =>{
    const [ani,setAni] = useState<Ani>({
        in: "",
        active: ""
    });
    const [stylesObject,setStylesObject] = useState<React.CSSProperties>({});

    usePageEvent('onLoad',()=>{
       setStylesObject(styles);
    });

    return (
        <>
            {
                show ? (
                    <View className={classNames('uni-transition vue-ref',ani.in)} style={{transform:transform,...stylesObject}}>
                        <View className="uni-popup__wrapper-box">
                            {children}
                        </View>
                    </View>
                ) : null
            }
        </>
    )
}

export default Transition;