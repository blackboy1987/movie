import * as React from 'react';
import {Button, View, Text, Input, Image} from 'remax/wechat';
import classNames from 'classnames';
import './VodItem.css';
import {Movie} from "@/data";
import {useState} from "react";
import {usePageEvent} from "remax/macro";
import {getStorage} from "@/util/wxUtils";

type VodItemProps = {
    theme: string;
    values: Movie;
}
const vod_content = '';
const WxVerify = getStorage('siteInfo').status===2;
const VodItem:React.FC<VodItemProps> = ({values,theme}) =>{
    const [item,setItem] = useState(values);
    const [picError,setPicError] = useState<boolean>(false);
    const [showImg,setShowImg]  = useState<boolean>(true);
    const [imgLoading,setImgLoading]  = useState<boolean>(true);
    const [lishi,setLishi] = useState<boolean>(false);
    usePageEvent("onLoad",()=>{
        setItem({
            ...values,
        });
        setLishi(false);
    })

    return (
        <View className="vodlist-div">
            <View className={classNames('vodlist-item',theme+'-bg3')}>

                {
                    picError ? (
                        <View className="loadfail-img" />
                    ) : null
                }
                {
                    !picError&&showImg ? (
                        <Image className="vodlist-image" lazyLoad src={item.pic} webp />
                    ) : null
                }

                {
                    !(!showImg&&!picError) ? null : (
                        <View className="loading-img" />
                    )
                }
                {
                    lishi ? (
                        <View className="vodlist-content">
                            <View className="vodlist-content-div ">
                                <text className={classNames('vodlist-content-title',theme+'-title-color')}>{item.title}</text>
                                <Text className="vodlist-content-remarks">{item.serial > 1 ? '连载至' + item.serial + '集' : item.remarks}</Text>
                            </View>
                            <text className="vodlist-content-area">{item.year + '/' + item.area}</text>
                            <text className="vodlist-content-actor">{item.actor}</text>
                            <text className="vodlist-content-content">{vod_content}</text>
                            <View className="vodlist-content-play">
                                <Text />
                                {
                                    WxVerify ? (
                                        <View className="vodlist-content-play-play">
                                            <Text className="vodlist-content-play-icon cuIcon"></Text>
                                            <Text className="vodlist-content-play-title">立即播放</Text>
                                        </View>
                                    ) : null
                                }

                            </View>
                        </View>
                    ) : (
                        <View className="vodlist-content">
                            <View className="vodlist-content-div ">
                                <text className="vodlist-content-title" style={{width:350}}>{item.title}</text>
                            </View>
                            <Text className="vodlist-content-area">{'上次播放至:'+item.index + 1 + '集'}</Text>
                            <View className="vodlist-content-play">
                                {
                                    WxVerify ? (
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

    )
}

export default VodItem;