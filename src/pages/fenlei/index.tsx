import * as React from 'react';
import {ScrollView, View, Text, Image} from 'remax/wechat';
import classNames from 'classnames';
import './index.css';
import {useState} from "react";
import {usePageEvent} from "remax/macro";
import {post, themeMode} from "@/util/wxUtils";

import HeaderBar from "@/components/HeaderBar";
import NavBar from "@/components/NavBar";
import VodItem from "@/components/VodItem";
import MyIcon from "@/components/MyIcon";

const wxverify = false;

type MovieCategory = {
    name: string;
    id: number;
    category?: MovieCategory[];
    area:{
        name: string;
        count: number;
    }[];
    year:{
        name: string;
        count: number;
    }[];
}

const sortlist = [ {
    id: 0,
    title: <MyIcon type='re1' color='#f4d13a' />,
    active: <MyIcon type='re1' color='#f49c36' />,
}, {
    id: 1,
    title: <MyIcon type='xin1' color='#f4d13a' />,
    active: <MyIcon type='xin1' color='#f49c36' />,
}, {
    id: 3,
    title: <MyIcon type='ping1' color='#f4d13a' size={50} />,
    active: <MyIcon type='ping1' color='#f49c36' size={50} />,
} ];

const loadingText = '加载中...';

const FenLei = () =>{
    const [tabList,setTabList] = useState<MovieCategory[]>([]);
    const [tabListIndex,setTabListIndex] = useState<number>(0);
    const [tabListId,setTabListId] = useState<number|string>('');
    const [categoryId,setCategoryId] = useState<number|string>('');
    const [areaName,setAreaName] = useState<string|number>('');
    const [yearName,setYearName] = useState<string|number>('');
    const [shuaixuan,setShuaixuan] = useState<boolean>(true);
    const [sortIndex,setSortIndex] = useState<number>(0);
    const [data,setData] = useState<any[]>([]);
    const [loading,setLoading] = useState<boolean>(false);
    const [page,setPage] = useState<number>(1);
    const [hasMore,setHasMore] = useState<boolean>(true);

    const load = (params:{tabListId:number|string,categoryId:number|string,areaName:number|string,yearName:number|string,sortIndex: number,page:number}) =>{
        post("search",params,(data1: any[])=>{
            if(data1.length===0){
                setHasMore(false);
            }else{
                setHasMore(true);
                if(page===1){
                    setData(data1);
                }else{
                    setData([
                        ...data,
                        ...data1,
                    ]);
                }
            }
            setLoading(false);
        });
    }

    usePageEvent('onLoad',()=>{
        post('search/category',{},(data:MovieCategory[])=>{
            setTabList(data);
            setTabListId(data[0].id);
            load({
                tabListId:data[0].id,
                categoryId,
                areaName,
                yearName,
                sortIndex,
                page:1,
            });
        });
    });

    usePageEvent('onReachBottom',()=>{
        if(!hasMore){
            return;
        }
        const newPage = page+1;
        setLoading(true);
        setPage(newPage);
        load({
            tabListId,
            categoryId,
            areaName,
            yearName,
            sortIndex,
            page:newPage,
        });
    })

    const handleChange=(type: 'tabList'|'categoryId'|'areaName'|'yearName',index: number,tag:string|number)=>{
        if(type==='tabList'){
            setYearName('');
            setAreaName('');
            setCategoryId('');
            setTabListId(tag);
            setTabListIndex(index);
            setTabListId(tag);

            setHasMore(true);
            setData([]);

            load({
                tabListId:tag,
                categoryId:'',
                areaName:'',
                yearName:'',
                sortIndex,
                page:1,
            });
        }else if(type==='categoryId'){
            setCategoryId(tag);
            load({
                tabListId,
                categoryId:tag,
                areaName,
                yearName,
                sortIndex,
                page:1,
            });
        }else if(type==='areaName'){
            setAreaName(tag);
            load({
                tabListId,
                categoryId,
                areaName:tag,
                yearName,
                sortIndex,
                page:1,
            });
        }else if(type==='yearName'){
            setYearName(tag);
            load({
                tabListId,
                categoryId,
                areaName,
                yearName:tag,
                sortIndex,
                page:1,
            });
        }
    }

    const handleSort = (sort: number) =>{
        setSortIndex(sort);
        load({
            tabListId,
            categoryId,
            areaName,
            yearName,
            sortIndex:sort,
            page:1,
        });
    }

    return (
        <View className={themeMode()+'-page'}>
            <HeaderBar theme={themeMode()}>
                <NavBar
                    fixed
                    type='top'
                    bgColor='rgba(255, 255, 255, 0)'
                    barStyle={{height:48}}
                    bar={{height:64,width:236, marginLeft:20}}
                    customBar={{height:132}}
                />
                {
                    !wxverify ? (
                        <View className="Maxtab">
                            {
                                tabList.map((item,index)=>(
                                    <View className="Maxtab-Item-Item" style={{width:'30%'}} key={item.id} onClick={()=>handleChange('tabList',index,item.id)}>
                                        <Text className={classNames('Maxtab-Item-text',index===tabListIndex?'MaxClick':'')}>{item.name}</Text>
                                    </View>
                                ))
                            }
                        </View>
                    ) : null
                }
                {
                    shuaixuan ? (
                        <view className="MinTablist">
                            <view className="MinTab">
                                <ScrollView className="MinTabItem" enableFlex scrollAnchoring scrollX showScrollbar={false}>
                                    <view className={classNames('MinTabItem-item',categoryId===''?'MinClick':'')} key='' onClick={()=>handleChange('categoryId',-1,'')}>
                                        <Text className={classNames('MinTabItem-text',categoryId===''?'MinClick-text':'')}>全部</Text>
                                    </view>
                                    {
                                        (tabList[tabListIndex]?.category||[]).map((item,index)=>(
                                            <view className={classNames('MinTabItem-item',categoryId===item.id?'MinClick':'')} key={index} onClick={()=>handleChange("categoryId",index,item.id)}>
                                                <Text className={classNames('MinTabItem-text',categoryId===item.id?'MinClick-text':'')}>{item.name}</Text>
                                            </view>
                                        ))
                                    }
                                </ScrollView>
                                <ScrollView className="MinTabItem" enableFlex scrollAnchoring scrollX showScrollbar={false}>
                                    <view className={classNames('MinTabItem-item',areaName===''?'MinClick':'')} key='' onClick={()=>handleChange("areaName",-1,'')}>
                                        <Text className={classNames('MinTabItem-text',areaName===''?'MinClick-text':'')}>全部</Text>
                                    </view>
                                    {
                                        (tabList[tabListIndex]?.area||[]).map((item,index)=>(
                                            <view className={classNames('MinTabItem-item',areaName===item.name?'MinClick':'')} key={index} onClick={()=>handleChange("areaName",index,item.name)}>
                                                <Text className={classNames('MinTabItem-text',areaName===item.name?'MinClick-text':'')}>{item.name}</Text>
                                            </view>
                                        ))
                                    }
                                </ScrollView>
                                <ScrollView className="MinTabItem" enableFlex scrollAnchoring scrollX showScrollbar={false}>
                                    <view className={classNames('MinTabItem-item',yearName===''?'MinClick':'')} key='' onClick={()=>handleChange("yearName",-1,'')}>
                                        <Text className={classNames('MinTabItem-text',yearName===''?'MinClick-text':'')}>全部</Text>
                                    </view>
                                    {
                                        (tabList[tabListIndex]?.year||[]).map((item,index)=>(
                                            <view className={classNames('MinTabItem-item',yearName===item.name?'MinClick':'')} key={index} onClick={()=>handleChange("yearName",index,item.name)}>
                                                <Text className={classNames('MinTabItem-text',yearName===item.name?'MinClick-text':'')}>{item.name}</Text>
                                            </view>
                                        ))
                                    }
                                </ScrollView>
                            </view>
                        </view>
                    ) : null
                }
                <View className={classNames('carousel-by',themeMode()+'-bg2')}>
                    <View className={classNames('switch',themeMode()+'-title-color')} onClick={()=>{setShuaixuan(!shuaixuan);}}>
                        <Text className="cuIcon" style={{fontSize:30}} />
                        <Text className="switch-text cuIcon">筛选</Text>
                    </View>
                    <View className="paixun">
                        {
                            sortlist.map(item=>(
                                <View className="paixunlist" key={item.id} onClick={()=>handleSort(item.id)}>
                                    <View className={classNames('paixunlist-text',sortIndex===item.id?'MinClick-text':'')}>
                                        {
                                            sortIndex==item.id ? (item.active) : (item.title)
                                        }
                                    </View>
                                </View>
                            ))
                        }

                    </View>
                </View>
            </HeaderBar>
            <View className="movlist">
                {
                    data.map(item=>(
                        <VodItem theme={themeMode()} key={item.id} values={item} />
                    ))
                }
            </View>
            {
                loading ? (
                    <View className={classNames('loading',themeMode()+'-loading')}>
                        <Text className="cuIcon" style={{fontSize:30}} />
                        <Text>{loadingText}</Text>
                    </View>
                ) : null
            }
            {
                !hasMore ? (
                    <View className={classNames('loading',themeMode()+'-loading')}>
                        <Text className="cuIcon" style={{fontSize:30}} />
                        <Text>无更多数据</Text>
                    </View>
                ) : null
            }
        </View>
    )
}

export default FenLei;