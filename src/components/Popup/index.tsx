import * as React from 'react';
import './index.css';
import {View} from "remax/wechat";
import Transition from "@/components/Popup/Transition";

type PopupProps = {

}

const Popup:React.FC<PopupProps> = ({children}) =>{
    return (
        <View className='uni-popup'>
            <View />
            <Transition stylesObject={{position:'fixed',left:0,right:0,top:0,display:'flex',flexDirection:'column',bottom:0,justifyContent:'center',alignItems:'center',transitionDuration:'0.3s'}} transform='scale(1) '>
                {children}
            </Transition>
        </View>
    )
}

export default Popup;