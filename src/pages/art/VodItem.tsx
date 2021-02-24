import * as React from 'react';
import {View,Text,Image} from 'remax/wechat';
import classNames from 'classnames';
import {usePageEvent} from 'remax/macro';

import './VodItem.css';
import {useState} from "react";
import {Movie} from "@/data";
import {getStorage} from "@/util/wxUtils";

type VodItemProps = {
    theme:string;
    values:Movie;
}

const lishi = true;
const WxVerify = getStorage("siteInfo").status==2;
const vod_content = 'asfdasfas的撒发生是单独发但是大师傅撒';
const VodItem:React.FC<VodItemProps> = ({theme,values}) =>{
    const [item,setItem] = useState(values);
    const [picError,setPicError] = useState<boolean>(false);
    const [showImg,setShowImg]  = useState<boolean>(true);
    const [imgLoading,setImgLoading]  = useState<boolean>(true);

    usePageEvent("onLoad",()=>{
        setItem({
            ...values,
        })
    })

    return (
        <View className="vodlist-div">
            <View className="moiveItem">
                <View className={classNames('vodlist-item',theme+'-bg3')}>
                    {
                        !picError ? ( <Image className="vodlist-image" hidden={!showImg} lazyLoad src={item.vod_pic} webp />) : (
                            <View className="loadfail-img" />)
                    }
                    <View className="loading-img" hidden={!(!showImg&&!picError)} />
                    {
                        lishi ? (
                            <View className="vodlist-content">
                                <View className="vodlist-content-div ">
                                    <Text className={classNames('vodlist-content-title',theme+'-title-color')}>{item.vod_name}</Text>
                                    <Text className="vodlist-content-remarks">{item.vod_serial > 1 ? '连载至' + item.vod_serial + '集' : item.vod_remarks}</Text>
                                </View>
                                <Text className="vodlist-content-area">{item.vod_year + '/' + item.vod_area}</Text>
                                <Text className="vodlist-content-actor">{item.vod_actor}</Text>
                                <Text className="vodlist-content-content">{vod_content}</Text>
                                <View className="vodlist-content-play">
                                    <Text />
                                    {
                                        WxVerify ? (
                                            <View  className="vodlist-content-play-play">
                                                <View className="vodlist-content-play-icon cuIcon"></View>
                                                <View className="vodlist-content-play-title">立即播放</View>
                                            </View>
                                        ) : null
                                    }

                                </View>
                            </View>
                        ) : (
                            <View className="vodlist-content">
                                <View className="vodlist-content-div ">
                                    <Text className="vodlist-content-title" style={{width:350}}>{item.vod_name}</Text>
                                </View>
                                <Text className="vodlist-content-area">{'上次播放至:'+item.index + 1 + '集'}</Text>
                                <View className="vodlist-content-play">
                                    {
                                        !WxVerify ? (
                                            <View className="vodlist-content-play-play">
                                                <Text className="vodlist-content-play-icon cuIcon"></Text>
                                                <Text className="vodlist-content-play-title">继续播放</Text>
                                            </View>
                                        ) : null
                                    }
                                </View>
                            </View>
                        )
                    }
                </View>
            </View>
        </View>
    )
}

export default VodItem;