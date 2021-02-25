import * as React from 'react';
import {Image} from "remax/wechat";

type MyIconProps = {
    size?: number;
    type: string;
    styles?: React.CSSProperties;
}

const MyIcon:React.FC<MyIconProps> = ({type,size=50,styles}) =>{
    return (
        <Image src={`/images/${type}.png`} mode='widthFix' style={{width:size,height:size,...styles}}   />
    )
}

export default MyIcon;