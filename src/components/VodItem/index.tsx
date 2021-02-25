import * as React from 'react';
import {View,Image} from 'remax/wechat';
// @ts-ignore
import classNames from 'classnames';
import {usePageEvent} from 'remax/macro';

import './index.css';
import {useState} from "react";
import {Movie} from "@/data";

type VodItemProps = {
    theme:string;
    values:Movie;
}

const VodItem:React.FC<VodItemProps> = ({theme,values}) =>{
    const [item,setItem] = useState<Movie>(values);
    /**
     * 图片加载状态。0：正在加载 1：加载失败 2： 加载成功
     */
    const [loadImgStatus,setLoadImgStatus] = useState<number>(0);
    const [picError,setPicError] = useState<boolean>(false);
    const [showImg,setShowImg]  = useState<boolean>(true);
    const [imgLoading,setImgLoading]  = useState<boolean>(true);

    usePageEvent("onLoad",()=>{
        setItem({
            ...values,
        })
    })

    return (
        <View className="movieList">
            <View className="moiveItem">
                <View className="moviePic">
                    <Image style={{display: loadImgStatus!==2?'hidden':''}} onError={()=>{
                        setLoadImgStatus(1);
                    }} onLoad={()=>{
                        setLoadImgStatus(2)
                    }} className="movieImg" lazyLoad={true} src={item.pic} webp={true} />
                    {
                        loadImgStatus===0 ? (<View className="loading-img"/>) : null
                    }
                    {
                        loadImgStatus===1 ? (<View className="loadfail-img"  />) : null
                    }
                    {
                        item.score ? (
                            <View className="movieDb">{item.score}</View>
                        ) : null
                    }
                    {
                        item.movieCategory_id>1 ? (
                            <View className="movieRemarks ellipsis">{item.remarks}</View>
                        ) : null
                    }
                    <View className={classNames('moiveName ellipsis',theme+'-title-color')}>{item.title}</View>
                    <View className={classNames('moiveActor ellipsis',theme+'-subtitle-color')}>{item.actor ? item.actor : '未知'}</View>
                </View>
            </View>
        </View>
    )
}

export default VodItem;