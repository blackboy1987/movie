import * as React from 'react';
import './index.css';
import {View} from "remax/wechat";
import Transition from "@/components/MyPopup/Transition";
import {useState} from "react";

type MyPopupProps = {
    type?: 'top'|'bottom'|'center'|'position',
    animation?: boolean;
    top?: number;
    left?: number;
    maskClick?: boolean;

}

type TransClass = {
    position: string;
    left: number;
    right: number;
    top: number;
}
type MaskClass = {
    position: string;
    bottom: number;
    left: number;
    right: number;
    top: number;
    backgroundColor: string;
}

const MyPopup:React.FC<MyPopupProps> = ({type='center',animation=true,top=0,left=0,maskClick=true,children}) =>{
    const [ani,setAni] = useState<string[]>();
    const [duration,setDuration] = useState<number>(300);
    const [showTrans,setShowTrans] = useState<boolean>(false);
    const [showPopup,setShowPopup] = useState<boolean>(false);
    const [maskClass,setMaskClass] = useState<MaskClass>({
        position: "fixed",
        bottom: 0,
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)"
    });
    const [transClass,setTransClass] = useState<TransClass>({
        position: "fixed",
        left: 0,
        right: 0,
        top: 0
    });


    return (
        <>
            {
                showPopup ? (
                    <View className='uni-popup'>
                        <Transition duration={duration} modeClass={['fade']} show={showTrans} styles={maskClass} />
                        <Transition styles={{position:'fixed',left:0,right:0,top:0,display:'flex',flexDirection:'column',bottom:0,justifyContent:'center',alignItems:'center',transitionDuration:'0.3s'}} transform='scale(1) '>
                            {children}
                        </Transition>
                    </View>
                ) : null
            }
        </>
    )
}

export default MyPopup;