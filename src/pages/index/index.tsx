import * as React from 'react';
import { View, Text, Image,Button,Swiper,SwiperItem,OfficialAccount } from 'remax/wechat';
import classNames from 'classnames';

import './index.css';
import {post, setStorage, themeMode} from "@/util/wxUtils";
import {useState} from "react";
import {usePageEvent} from 'remax/macro';
import {GenericEvent} from "@remax/wechat/esm/types/component";

import HeaderBar from "@/components/HeaderBar";
import NavBar from "@/components/NavBar";
import VodItem from "@/components/VodItem";
import Notice from "@/components/Notice";
import Popup from "@/components/Popup";
import AppAddTip from "@/components/AppAddTip";

const items = [
    {
        vod_pic:'http://rpg.pic-imges.com/pic/upload/vod/2021-02/1612198508.jpg',
        vod_name:'觉醒年代',
        id:1,
    },
    {
        vod_pic:'http://rpg.pic-imges.com/pic/upload/vod/2021-02/1612198508.jpg',
        vod_name:'觉醒年代',
        id:2,
    },
    {
        vod_pic:'http://rpg.pic-imges.com/pic/upload/vod/2021-02/1612198508.jpg',
        vod_name:'觉醒年代',
        id:3,
    },
    {
        vod_pic:'http://rpg.pic-imges.com/pic/upload/vod/2021-02/1612198508.jpg',
        vod_name:'觉醒年代',
        id:4,
    },
];

export default () => {
    const [cardCur,setCardCur] = useState<number>(0);
    const [theme,setTheme] = useState('white');
    const [data,setData] = useState<any[]>([]);
    const [showTanChuang,setShowTanChuang] = useState<boolean>(true);
    const [showTip,setShowTip] = useState<boolean>(true);

    const load = ()=>{
        post("index",{},(response)=>{
            console.log("response",response);
            setData(response);
        })
    }


    usePageEvent('onLoad',()=>{
        console.log("usePageEvent onLoad",themeMode());
        setTheme(themeMode());
        load();
        setTimeout(()=>{
            setShowTip(false);
        },5e3);
    })


    const cardSwiper = (e: GenericEvent) =>{
        setCardCur(e.detail.current);
    }
    const switchTheme=(theme:string)=>{
        setTheme(theme);
        setStorage("themeMode",theme);
    }
  return (
    <View className={classNames(theme+'-page')}>
        <HeaderBar theme={theme}>
            <NavBar switchTheme={switchTheme} fixed type="index" bgColor='rgba(255, 255, 255, 0)' barStyle={{height:48}} bar={{height:64,width:536,marginLeft:20}} Button={{width:174}} customBar={{height:132}} />
            <view className="swiperView" />
            <Swiper autoplay={true} onChange={cardSwiper} circular={true} className={classNames('swiper',theme+'-title-color')} nextMargin='100px' previousMargin='100px'>
                {
                    items.map((item,index)=>(
                        <SwiperItem key={item.id} >
                            <Image className={classNames('le-img',cardCur==index?'le-active':'')} lazyLoad={true} src={item.vod_pic} webp={true} />
                            <view className={classNames('le-name ellipsis',cardCur==index?'le-names':'')}>{item.vod_name}</view>
                        </SwiperItem>
                    ))
                }
            </Swiper>
        </HeaderBar>
        <View className="box-shadow" />
        <Notice show showClose={false} showIcon backgroundColor={theme==='white'?'#fffbe8':'#323232'} scrollable color='#de8c17' animationDuration='100' animationPlayState='running' animationDelay='10'/>
        <Button className="shareButton" hoverClassName="none" openType="share">
            <Image mode='widthFix' className="shareImage" src="https://www.ttqbaby.com/777/fx_gongyong.png" />
        </Button>
        <View style={{width:750}}>
            <OfficialAccount />
        </View>
        {
            data.map(item=>(
                <View key={item.tag}>
                    <View className='movieH'>
                        <text className="webkit-text">{item.tag}</text>
                        <text className="cuIcon webkit-text" style={{fontSize:28}}>查看更多&gt;</text>
                    </View>
                    <View className="movieBox">
                        {
                            item.list.map(movie=><VodItem key={movie.id} values={movie} theme={theme} />)
                        }
                    </View>
                </View>
            ))
        }
        <AppAddTip showTip={showTip} showButton />
        {
            showTanChuang ? (
                <Popup>
                    <View className="tanchuang">
                        <Image className="tanchuang-img" showMenuByLongpress src="https://666.ttqbaby.com/upload/vod/20210219-1/a9f10bf153abcf6a90f0fee58a851811.jpg" />
                        <Button className="tanchuang-button" onClick={()=>setShowTanChuang(false)}>关闭</Button>
                    </View>
                </Popup>
            ) : null
        }

    </View>
  );
};
