import * as React from 'react';
import {OpenData, View, Text, Ad, Button, Video} from 'remax/wechat';
import classNames from 'classnames';
import './index.css';
import {themeMode} from "@/util/wxUtils";
import HeaderBar from "@/components/HeaderBar";
import {Icon} from "annar";
import NavBar from "@/components/NavBar";
import {useState} from "react";
import {usePageEvent} from "remax/macro";
import {createInterstitialAd, createRewardedVideoAd} from "@/util/wxAdUtils";

const  mylist=[ {
    text: "历史",
    icon: <Icon type='time' color='#55aaff' size={50} />,
    color: "#55aaff"
}, {
    text: "收藏",
    icon: <Icon type='favorfill' color='#FFCC40' size={50} />,
    color: "#FFCC40"
}, {
    text: "海报",
    icon: <Icon type='creative' color='#3fbd5c' size={50} />,
    color: "#3fbd5c"
}, {
    text: "客服",
    icon: <Icon type='service' color='#ff007f' size={50} />,
    color: "#ff007f"
} ];

const My = () =>{

    const [interstitialAd,setInterstitialAd] = useState<any>();

    usePageEvent("onLoad",()=>{
        const interstitialAd = createRewardedVideoAd('adunit-d06d530e38aaba45',{
            onLoad:()=>console.log("onLoad"),
            onError:(err)=>console.log("onError",err),
            onClose:(res)=>console.log("onClose",res),
        });
        setInterstitialAd(interstitialAd);
    })



    return (
        <View className={classNames(themeMode()+'-page')}>
            <HeaderBar theme={themeMode()} Max={false}>
                <NavBar />
                <View className={classNames('userInfo',themeMode()+'-title-color')}>
                    <View className="userInfo-pic" style={{overflow:'hidden'}}>
                        <OpenData lang='zh_CN' type='userAvatarUrl' />
                    </View>
                    <OpenData style={{color:'red'}} lang='zh_CN' type='userNickName' />
                </View>
            </HeaderBar>
            <View className={classNames('mylist',themeMode()+'-title-color')}>
                {
                    mylist.map((data,index)=>(
                        <View className="mylist-data" key={index}>
                            <View className="mylist-data-icon">{data.icon}</View>
                            <Text className="mylist-data-text">{data.text}</Text>
                        </View>
                    ))
                }
            </View>
            <adCustom unit-id="adunit-0bf49dd0064f27b1" />
        </View>
    )
}

export default My;