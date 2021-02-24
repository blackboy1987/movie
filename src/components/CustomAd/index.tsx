import * as React from 'react';
import {View,Ad} from "remax/wechat";
import {SiteInfo} from "@/data";
import {getStorage} from "@/util/wxUtils";

import './index.css';

const siteInfo:SiteInfo = getStorage("siteInfo");
type HeaderBarProps = {
    show: boolean;
    min?: number;
}

const CustomAd:React.FC<HeaderBarProps> = ({show,min=680}) =>{


    return (
        <>
            {
                show ? (
                    <View className="ad-ys-view" style={{width:min}}>
                        <Ad adTheme='black' adType='custom' unitId={siteInfo.nativeAdId} />
                    </View>
                ) : null
            }
        </>


    )
}

export default CustomAd;