import * as React from 'react';
import {View, Text, Image,ScrollView,stopPullDownRefresh} from 'remax/wechat';
import classNames from 'classnames';
import './index.css';
import {useState} from "react";
import {themeMode} from "@/util/wxUtils";
import HeaderBar from "@/components/HeaderBar";
import NavBar from "@/components/NavBar";
import {usePageEvent} from "remax/macro";
import {Icon} from "annar";

const topicList = [
    {
        "topic_id":16,
        "topic_name":"一周华语口碑剧集",
        "topic_pic":"http://img.lingxinfm.com/images/2020-09/fqsndtk.jpg",
        "topic_time":1602475468,
        "topic_tag":"好看的电视剧,热播电视剧,电视剧排行榜",
        "topic_blurb":"喜欢看剧的朋友就不要错过咯！",
        "topic_rel_vod":"84128,71521,72610,74718,72870,75238,72312,71350,60383,71173,75515,74718,86174,86388,86389"
    },
    {
        "topic_id":20,
        "topic_name":"超人气网络小说改编成动漫，本本都是经典，部部都是精品",
        "topic_pic":"http://img.lingxinfm.com/images/2020-10/dldl.jpg",
        "topic_time":1602475833,
        "topic_tag":"小说,动漫,动画",
        "topic_blurb":"随着网络小说IP全版权运营的风潮，人气网络小说改编成电影、电视剧、动漫的情况层出不穷，经典的作品也在不断的出现，这里给大家盘点十本被改编成动漫的超人气网络小说，希望您能喜欢。",
        "topic_rel_vod":"570,62728,69833,216,72929,69834,15165,70317,74852,44551,44706,42219,77812,75058,73818,10778,73819,69996,14855"
    },
    {
        "topic_id":19,
        "topic_name":"宫崎骏的那些经典动画电影",
        "topic_pic":"https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=1567704158,3686641068&amp;fm=173&amp;app=25&amp;f=JPG?w=640&amp;h=429&amp;s=66C000F15C124ECC6984D17903006075",
        "topic_time":1602475119,
        "topic_tag":"宫崎骏,动画电影",
        "topic_blurb":"走进宫崎骏的梦想世界",
        "topic_rel_vod":"80332,82910,81861,87311,87312,87313,86971,87314,87315"
    },
    {
        "topic_id":21,
        "topic_name":"美剧推荐",
        "topic_pic":"http://i1.letvimg.com/lc06_iscms/201606/27/13/45/f58d434ad7e2494b97bcb06a1a1c8838.jpg",
        "topic_time":1602931859,
        "topic_tag":"美剧",
        "topic_blurb":"美剧推荐",
        "topic_rel_vod":"42669,71271,80489,71996,80696,76095,43896,71455,43490,69385,97141,86468,87269"
    },
    {
        "topic_id":15,
        "topic_name":"迷雾剧场片单推荐",
        "topic_pic":"https://256vimg2.xpghost.cn/uploads/2020/0520/20200520021253696.jpg",
        "topic_time":1602353051,
        "topic_tag":"好看的电视剧,热播电视剧,电视剧排行榜",
        "topic_blurb":"迷雾剧场即将开启！黑暗与救赎，谎言与真心，层层包裹下的灵魂如何窥见天光？ 头脑风暴，王炸阵容，燃爆盛夏，敬请期待！ ​",
        "topic_rel_vod":"72695,77613,42590,60919,43301"
    },
    {
        "topic_id":14,
        "topic_name":"国内外经典文艺片推荐",
        "topic_pic":"https://256vimg4.xpghost.cn/uploads/2020/0602/20200602115543224.jpg",
        "topic_time":1602352611,
        "topic_tag":"",
        "topic_blurb":"许多观众对于文艺片情有独钟，它不需要跌宕起伏的剧情，舒缓的节奏、干净的配乐、动人的故事就能让人沉醉其中。好看的文艺片不仅将文艺电影里的温情融化进人们的心中，还在影片温暖的同时，教会我们感悟人生。今天小编就为大家推荐一些好看的文艺电影吧！",
        "topic_rel_vod":"83450,37911,73398,43681,63737,38269,35934,80565"
    },
    {
        "topic_id":6,
        "topic_name":"以暴制暴热血复仇电影推荐 ",
        "topic_pic":"http://www.mvcat.com/upload/images/2020/e10cf182a1dc471b89718b56b20ed23e.jpeg",
        "topic_time":1602352259,
        "topic_tag":"男人,暴力",
        "topic_blurb":" 朋友聚会必备佳片，热闹又刺激的电影。",
        "topic_rel_vod":"71904,77082,74934,2015,24850,71298,70099,59110,43318"
    },
    {
        "topic_id":5,
        "topic_name":"真实事件改编的现代战争电影",
        "topic_pic":"http://www.mvcat.com/upload/images/10%E9%83%A8%E7%9C%9F%E5%AE%9E%E6%94%B9%E7%BC%96%E7%9A%84%E7%8E%B0%E4%BB%A3%E6%88%98%E4%BA%89%E7%94%B5%E5%BD%B1_005.JPEG",
        "topic_time":1602352252,
        "topic_tag":"现代战争电影,战争电影,真实电影",
        "topic_blurb":"基于真实故事的现代战争片",
        "topic_rel_vod":"39006,39524,36480,29892,72642,37522,37318,85736"
    },
    {
        "topic_id":13,
        "topic_name":"高分病毒感染电影",
        "topic_pic":"https://256vimg2.xpghost.cn/uploads/2020/0603/20200603105424489.jpg",
        "topic_time":1602352235,
        "topic_tag":"科幻,病毒,丧尸",
        "topic_blurb":"2020年开年的新冠肺炎病毒，引起了全世界的高度重视。看不见摸不着的病毒总是令人恐慌的，远比你想象中的还要可怕。那么在电影中，有哪些关于病毒感染类电影推荐？一起来看看。",
        "topic_rel_vod":"42783,58675,77239,81047,73873,39099,81472,36048,86434,61464,61465,61462,61463"
    }
];
const tags: any[] = [];
const Topic = () =>{

    const [tagIndex,setTagIndex] = useState<number>(0);
    const [hasMore,setHasMore] = useState<boolean>(true);
    const [loading,setLoading] = useState<boolean>(true);
    const [loadingText,setLoadingText] = useState<'加载中...'|'加载完成'|'我是有底线的'>('加载中...');

    usePageEvent('onReachBottom',()=>{
        if(!hasMore){
            return;
        }
        console.log("下一页");

        stopPullDownRefresh().then(()=>{
            console.log("结束")
        });
    });
    usePageEvent('onPullDownRefresh',()=>{
        console.log("第一页");
        stopPullDownRefresh().then(()=>{
            console.log("结束")
        });
    })

    return (
        <View className={themeMode()+'-page'}>
            <HeaderBar theme={themeMode()}>
                <NavBar
                    fixed
                    type='top'
                    bgColor='rgba(255, 255, 255, 0)'
                    barStyle={{height:48}}
                    bar={{height:64,width:542, marginLeft:20}}
                    customBar={{height:132}}
                />
                {
                    tags.length>0 ? (
                        <ScrollView className="MinTabItem" enableFlex scrollAnchoring scrollX showScrollbar={false}>
                            {
                                tags.map((tag,index)=>(
                                    <View className={classNames('MinTabItem-item',index===tagIndex?'MinClick':'')} key={index}>
                                        <Text className={classNames('MinTabItem-text',index===tagIndex?'MinClick-text':'')}>{{tag}}</Text>
                                    </View>
                                ))
                            }
                        </ScrollView>
                    ): null
                }
            </HeaderBar>
            {
                topicList.map((item,index)=>(
                    <View className={classNames('topic',themeMode()+'-title-color')} key={index}>
                        <View className="topicItem">
                            <Image className="topicItem-pic" mode="aspectFill" src={item.topic_pic} />
                            <View className="topicItem-text ellipsis">{item.topic_name}</View>
                            <View className="topicItem-blurb ellipsis">{item.topic_blurb}</View>
                        </View>
                    </View>
                ))
            }
            {
                loading ? (
                    <View className={classNames('loading',themeMode()+'-loading')}>
                        <Image src='/images/loading.png' style={{width:30,height:30}} mode='widthFix' />
                        <Text>{loadingText}</Text>
                    </View>
                ) : null
            }

        </View>
    )
}

export default Topic;