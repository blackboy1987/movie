import * as React from 'react';
import {Image} from "remax/wechat";
import IconFont, {IconFontNames} from '@/components/iconfont';

type MyIconProps = {
    size?: number;
    type: IconFontNames;
    styles?: React.CSSProperties;
    tag?: 0|1
    color?: string | string[];
}

const MyIcon:React.FC<MyIconProps> = ({color,tag=0,type,size=40,styles}) =>{
    return (
        <>
            {
                tag===0 ? (
                    <IconFont name={type} color={color} size={size}/>
                ) : (
                    <Image src={`/images/${type}.png`} mode='widthFix' style={{width:size,height:size,...styles}}/>
                    )
            }
        </>

    )
}

export default MyIcon;