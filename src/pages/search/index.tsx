import * as React from 'react';
import {View, Text, Input, Image} from 'remax/wechat';
import classNames from 'classnames';
import './index.css';
import {useState} from "react";
import {usePageEvent} from "remax/macro";
import {getMenuButtonBoundingClientRect, getSystemInfo, post, themeMode} from "@/util/wxUtils";
import HeaderBar from "@/components/HeaderBar";
import VodItem from "@/pages/search/VodItem";
import {Icon} from "annar";
import {GenericEvent} from "@remax/wechat/esm/types/component";
import {Movie} from "@/data";
import CustomAd from "@/components/CustomAd";

const history = ['我是哈哈','b','c'];
const hotkeywordlist = [{
    title:'打法昆仑山地方就爱上是的饭卡上',

},{
    title:'1dsafa',

},{
    title:'sdfasfasdfasd',
}];

const noselection = false;
const selection: any[] = [];

const Search = () =>{
    const [theme,setTheme] = useState('white');
    const [keyword,setKeyword] = useState<string>('');
    const [page,setPage] = useState<number>(1);
    const [data,setData] = useState<Movie[]>([]);
    const [nokeyword,setNokeyword] = useState<boolean>(true);
    usePageEvent('onLoad',()=>{
        setTheme(themeMode());
        setKeyword('')
        setNokeyword(true);
    })
    const menuButtonBoundingClientRect = getMenuButtonBoundingClientRect();


    const search = (event: GenericEvent)=>{
        post('search',{
            keyword:event.detail.value,
            page,
        },data=>{
            setData(data);
            setNokeyword(false);
        });
    }

    return (
        <View className={theme+'-page'}>
            <HeaderBar theme={theme}>
                <View style={{height: menuButtonBoundingClientRect.top*getSystemInfo().pixelRatio}}/>
                <View className="barInput" style={{
                    width:(menuButtonBoundingClientRect.left-menuButtonBoundingClientRect.width/2)*getSystemInfo().pixelRatio,
                    height:menuButtonBoundingClientRect.height*getSystemInfo().pixelRatio,
                    lineHeight:menuButtonBoundingClientRect.height*getSystemInfo().pixelRatio,
                }}>
                    <Input className="barInput-input" confirmType="search" placeholder="输入搜索关键词" type="text" value={keyword} onConfirm={search} />
                    <Image src='/images/close1.png' style={{width:44,height:44}} mode='widthFix' onClick={()=>{
                        setKeyword('');
                        setNokeyword(true);
                    }} />
                </View>
                <View className={classNames('carousel-by',themeMode()+'-bg1')} />
            </HeaderBar>

            <View>
                {
                    nokeyword ? (
                        <View className={classNames('hotkeyword',themeMode()+'-title-color')}>
                            {
                                history.length>0? (
                                    <>
                                        <View className="hottitle">
                                            <Image src='/images/history.png' style={{width:45}} mode='widthFix' />
                                            <text className="icon" style={{fontSize:35}}> 历史搜索</text>
                                        </View>
                                        <View className="history-div">
                                            {
                                                history.map((item,index)=>(
                                                    <View className={classNames('history-data',themeMode()+'-bg3')} key={index}>
                                                        <View className="history-title">
                                                            <text className="history-title-title">{item}</text>
                                                        </View>
                                                    </View>
                                                ))
                                            }
                                        </View>
                                    </>
                                ) : null
                            }
                            <View className="hottitle">
                                <Icon type='hot' size={45} color='#ff8080' />
                                <text className="hottitle-title " style={{fontSize:35}}> 热门搜索</text>
                            </View>
                            <View className="hotkeyword-div">
                                {
                                    hotkeywordlist.map((list,index)=>(
                                        <View className={classNames('hotkeyword-data',themeMode()+'-bg3')} key={index}>
                                            <text className="hotkeyword-title">{list.title}</text>
                                        </View>
                                    ))
                                }

                            </View>
                        </View>
                    ) : (
                        <View className="vodlist">
                            {
                                data.map((item,index)=>(
                                    <View key={item.id}>
                                        <CustomAd show={index===2} />
                                        <VodItem values={item} theme={themeMode()} />
                                    </View>
                                ))
                            }
                        </View>
                    )
                }
            </View>

            {
                noselection ? (
                    <View className="selection">
                        {
                            selection.map(item=>(
                                <View className="selection-item" key={item.id}>
                                    <View className="selection-data">
                                        <Text className="selection-name">{item.name}</Text>
                                        <Text className="cuIcon" style={{fontSize:35,color:'#666666'}} />
                                    </View>
                                </View>
                            ))
                        }

                    </View>
                ) : null
            }

        </View>
    )
}

export default Search;