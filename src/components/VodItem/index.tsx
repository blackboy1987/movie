import * as React from 'react';
import {View,Text,Image} from 'remax/wechat';
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
        <View className="movieList">
            <View className="moiveItem">
                <View className="moviePic">
                    {
                        picError ? (
                            <View className="loadfail-img"  />
                        ) : (
                            <Image style={{display: showImg?'hidden':''}} onError={()=>{
                                setPicError(true);
                                setImgLoading(false);
                            }} onLoad={()=>{
                                setImgLoading(false);
                                setPicError(false)
                            }} className="movieImg" lazyLoad={true} src={item.pic} webp={true} />
                        )
                    }
                    {
                        !picError&&imgLoading&&showImg ? (<View className="loading-img"/>): null
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