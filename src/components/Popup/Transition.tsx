import * as React from 'react';
import './index.css';
import {View} from "remax/wechat";

type TransitionProps = {
    stylesObject: React.CSSProperties;
    transform: string
}

const Transition:React.FC<TransitionProps> = ({transform,stylesObject,children}) =>{
    return (
        <View className="{{['uni-transition vue-ref',ani.in]}}" style={{transform:transform,...stylesObject}}>
            <View className="uni-popup__wrapper-box">
                {children}
            </View>
        </View>
    )
}

export default Transition;