import * as React from 'react';
import {View,Ad} from "remax/wechat";
import {SiteInfo} from "@/data";
import {getStorage, themeMode} from "@/util/wxUtils";

import './index.css';

const siteInfo:SiteInfo = getStorage("siteInfo");
type HeaderBarProps = {
    min?: number;
    type:'banner'|'video'|'grid'
}
const CustomAd:React.FC<HeaderBarProps> = ({type='banner',min=680}) =>{

    return (
        <>
            <View className="ad-ys-view" style={{width:min}}>
                {
                    type==='banner' ? (<Ad adTheme={themeMode()} adType='custom' unitId={siteInfo.bannerAdId} />) : null
                }
                {
                    type==='video' ? (<Ad adTheme={themeMode()} adType='custom' unitId={siteInfo.videoAdId} />) : null
                }
                {
                    type==='grid' ? (<Ad adTheme={themeMode()} adType='custom' unitId={siteInfo.gridAdId} />) : null
                }
            </View>
        </>


    )
}

export default CustomAd;