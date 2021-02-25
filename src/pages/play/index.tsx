import * as React from 'react';
import {View, ScrollView, Text, Image,Button,Video} from 'remax/wechat';
import {Icon, Popup} from 'annar';
import classNames from 'classnames';

import './index.css';
import {post, themeMode} from "@/util/wxUtils";
import HeaderBar from "@/components/HeaderBar";
import NavBar from "@/components/NavBar";
import {useState} from "react";
import {usePageEvent} from "remax/macro";
import ReverseList from "@/pages/play/ReverseList";
import {Movie, PlayUrl, SiteInfo} from "@/data";
import {siteInfo} from "@/util/utils";
import {GenericEvent} from "@remax/wechat/esm/types/component";
import CustomAd from "@/components/CustomAd";
import MyPopup from "@/components/MyPopup";
import AppAddTip from "@/components/AppAddTip";

type PlayProps = {
    theme:string;
    values:{
        [key: string]: any
    }
}
const isPlay = true;
const showControls = true;
const flag = false;
const danmuList= [ {
        text: "请勿相信视频内广告",
        color: "#ff0000",
        time: 1
    }, {
        text: "本软件永久免费,为避免小程序被封,请关注下方备用小程序!",
        color: "#ff00ff",
        time: 3
    } ];
const initialTime = 0;

// "加载成功,即将播放"  "正在解析影片"    "加载失败,正在切换线路"   "加载失败,切换线路试试"   "即将播放下一集..."
const tipText= "正在解析影片";
const tipShow = true;
const vodxuanji = true;
const vod_tip = true;
const fullscreen = false;
const isSc = true;

const playList = (vodData: Movie) =>{
    const myList: {[key: string]: any} = {};
    const playArr:PlayUrl[] = vodData.playUrls;
    for (let i=0;i<playArr.length;i+=1){
        let list:{
            title: string;
            url: string;
        }[] = [];
        const jiShus = playArr[i].urls;
        for (let j=0;j<jiShus.length;j++){
            const result = jiShus[j].split('@@@');
            list.push({
                title: result[0],
                url: result[1],
            })
        }
        myList[`${playArr[i].title}`] = list;
    }
    return myList;
}

const mylist= [ {
    text: "选集列表",
    icon: <Icon color='#55aaff' type='circle' size={60} />,
    color: "#55aaff"
}, {
    text: "倍速播放",
    icon: <Image src='/images/beisu.png' mode='widthFix' style={{width:60,height:60}} />,
    color: "#ff8e3d"
}, {
    text: "播放链接",
    icon: <Icon color='#aa007f' type='link' size={60} />,
    color: "#aa007f"
}, {
    text: "客服反馈",
    icon: <Icon color='#ff007f' type='service' size={60} />,
    color: "#ff007f"
} ];

const statement="免责声明:本软件资源均来源于网络整理,不储存任何资源,版权属于原作者,如无意侵犯您的版权,请反馈告知,我们给予删除,谢谢!";

let timer: NodeJS.Timeout;

const Play:React.FC<PlayProps> = ({}) =>{

    const [myList,setMyList] = useState<{[key: string]: any}>([]);
    const [currentPlayFrom,setCurrentPlayFrom] = useState<string>('');
    const [currentIndex,setCurrentIndex] = useState<number>(0);
    const [showContent,setShowContent] = useState<boolean>(false);
    const [openXuanJi,setOpenXuanJi] = useState<boolean>(false);
    const [vodData,setvodData] = useState<Movie>();
    const [siteInfos,setSiteInfos] = useState<SiteInfo>({});
    const [tipText,setTipText] = useState<string>('');
    const [objectFit,setObjectFit] = useState<'contain'|'fill'|'cover'>('contain');
    const [showTip,setShowTip] = useState<boolean>(true);

    const hideShowTip=()=>{
        const timer = setTimeout(()=>{
            setShowTip(false);
            clearTimeout(timer);
        },5e3);
    }

    usePageEvent("onLoad",(e)=>{
        siteInfo((data:SiteInfo)=>setSiteInfos(data));
        post("detail",e,(data:Movie)=>{
            setvodData(data);
            setMyList(playList(data));
            setCurrentPlayFrom(data.playUrls[0].title);
            setCurrentIndex(0);
        });
        hideShowTip();
    })

    const updateTipText=(text: string)=>{
        setTipText(text);
        if(timer){
            clearTimeout(timer);
        }
        timer = setTimeout(()=>{
            setTipText("");
            clearTimeout(timer);
        },3e3);
    }

    /**
     * 当开始/继续播放时触发play事件
     */
    const onPlay = (event: GenericEvent) =>{
        updateTipText("视频加载完成，即将播放")
    }

    /**
     * 当暂停播放时触发 pause 事件
     */
    const onPause = (event: GenericEvent) =>{
    }

    /**
     * 当播放到末尾时触发 ended 事件
     */
    const onEnded = (event: GenericEvent) =>{
        updateTipText('本视频播放完成，即将为你播放下一集');
    }

    /**
     * 播放进度变化时触发，event.detail = {currentTime, duration} 。触发频率 250ms 一次
     */
    const onTimeUpdate = (event: GenericEvent) =>{

    }

    /**
     * 视频进入和退出全屏时触发，event.detail = {fullScreen, direction}，direction 有效值为 vertical 或 horizontal
     */
    const onFullScreenChange = (event: GenericEvent) =>{

    }

    /**
     * 视频出现缓冲时触发
     */
    const onWaiting = (event: GenericEvent) =>{
        updateTipText('正在缓冲...');
    }

    /**
     * 视频播放出错时触发
     */
    const onError = (event: GenericEvent) =>{
        updateTipText('加载失败,正在切换线路');
    }

    /**
     * 加载进度变化时触发，只支持一段加载。event.detail = {buffered}，百分比
     */
    const onProgress = (event: GenericEvent) =>{

    }

    const bindcontrolstoggle = ()=>{
        console.log('bindcontrolstoggle');
    }
    return (
        <>
            {
                isPlay ? (
                    <View className={classNames(
                        'detailBox',
                        themeMode()+'-page'
                    )}>
                        <HeaderBar theme='black'>
                            <NavBar Button={{width:87, height:64,lineHeight:64}} barStyle={{height:48}} bgColor='rgba(255, 255, 255, 0)' bar={{height:64,width:536,marginLeft:20}} text={vodData?.title} type='back' textView={{width:449,height:64,lineHeight:64}}/>
                        </HeaderBar>
                        <View style={{width:750,height:450,backgroundColor:'#333333'}}>
                            <Video
                                adUnitId={siteInfos.videoFrontAdId}
                                autoplay
                                className="video"
                                controls={showControls}
                                danmuList={danmuList}
                                enableDanmu
                                id="myVideo"
                                initialTime={initialTime}
                                objectFit={objectFit}
                                playBtnPosition="center"
                                showCastingButton
                                showCenterPlayBtn
                                src={myList[`${currentPlayFrom}`]&&myList[`${currentPlayFrom}`].length>currentIndex ? myList[`${currentPlayFrom}`][currentIndex].url : ''}
                                onPlay={onPlay}
                                onPause={onPause}
                                onEnded={onEnded}
                                onTimeUpdate={onTimeUpdate}
                                onFullScreenChange={onFullScreenChange}
                                onWaiting={onWaiting}
                                onError={onError}
                                onProgress={onProgress}
                                showFullscreenBtn
                            >
                                {
                                    tipText ? (<View className="vodTip">{tipText}</View>) : null
                                }
                                <View className="seekLeft"><Image src='/images/seekLeft.png' style={{width:70,height:70}} mode='widthFix' /> </View>
                                <View className="seekRight"><Image src='/images/seekRight.png' style={{width:80,height:80}} mode='widthFix' /> </View>
                            </Video>
                        </View>
                        <View className="detail">
                            <View className="detail-title">
                                <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',flexWrap:'nowrap'}}>
                                    <Text className={classNames('detail-title-title',themeMode()+'-title-color')}>{vodData?.title}1234</Text>
                                    <Text className="detail-list-pingfen ellipsis" style={{color:'rgba(255, 0, 4, 1)',fontSize:22,marginLeft:20}}>{vodData?.remarks||''}</Text>
                                </View>
                                <Text className={classNames('big_button_sc', isSc?'big_button_issc':'cuIcon-iconicon-test20')} />
                            </View>
                        </View>
                        <View className="play_xj">
                            <View className="works">
                                <View className="works-item">
                                    <Button className="cuIcon works-button" openType="share" style={{color:'#3fbe5d'}}>
                                        <Image src='/images/wechat.png' style={{width:60,height:60}} />
                                    </Button>
                                    <View className="works-tilie">分享提速</View>
                                </View>
                                {
                                    mylist.map((data,index)=>(
                                        <View className="works-item" key={index}>
                                            <View className="cuIcon works-button" style={{color:data.color}}>{data.icon}</View>
                                            <View className="works-tilie">{data.text}</View>
                                        </View>
                                    ))
                                }

                            </View>
                            <View className="playArr">
                                <View className="playArr-tilie" onClick={()=>setOpenXuanJi(true)}>
                                    <Icon type='sort' size={28} color='red' />选集</View>
                                <View className="laiyuan">
                                    <ScrollView className={classNames('laiyuan-list', themeMode()+'-title-color')} enableFlex scrollX>
                                        {
                                            (vodData?.playUrls||[]).map(item=>(
                                                <View onClick={()=>{setCurrentPlayFrom(item.title);setCurrentIndex(0);}} className="laiyuan-list-fenge" key={item.title} id={item.title}>
                                                    <View className={classNames('laiyuan-list-txt', item.title===currentPlayFrom?'laiyuanon':'laiyuan-list-txt')}>{item.title}</View>
                                                </View>
                                            ))
                                        }
                                    </ScrollView>
                                </View>
                            </View>
                            <View className="xuanji">
                                <ScrollView className="xuanji-list" enableFlex scrollIntoView={`g${currentIndex}`} scrollX>
                                    {
                                        (myList[`${currentPlayFrom}`]||[]).map((item:{title:string,url:string},index:number)=>(
                                            <View onClick={()=>setCurrentIndex(index)} className="xuanji-list-fenge" id={index} key={item.title}>
                                                <View className={classNames('xuanji-list-txt', currentIndex==index?'xuanjion':'xuanji-list-txt')}>{item.title}</View>
                                            </View>
                                        ))
                                    }

                                </ScrollView>
                            </View>
                        </View>
                        <View>
                            <CustomAd show />
                        </View>
                        <View className="vod_content">
                            <View className={classNames('vod_content_title', themeMode()+'-title-color')}>影片简介</View>
                            <View className="vod_content_text">
                                {
                                    showContent ? (
                                        <View>
                                            {vodData?.content}
                                            {
                                                vodData?.blurb ? (<View className="vod_content_full" onClick={()=>setShowContent(false)}>收起<Icon type='fold' color='#999999' /></View>) : null
                                            }
                                        </View>
                                    ) : (
                                        <View>
                                            <Text>{vodData?.blurb}</Text>
                                            {
                                                vodData?.content ? (<View className="vod_content_full" onClick={()=>setShowContent(true)}>展开<Icon type='unfold' color='#999999' /></View>) : null
                                            }
                                        </View>
                                    )
                                }
                                <Text style={{fontSize:28}}>{statement}</Text>
                            </View>
                        </View>
                        <AppAddTip showTip={showTip} showButton />
                        <Popup
                            position="bottom"
                            closeable
                            open={openXuanJi}
                            curve='ease'
                            style={{background:themeMode()==='black'?'#323232':''}}
                            onClose={()=>setOpenXuanJi(false)}
                        >
                            <ReverseList theme={themeMode()} list={(myList[currentPlayFrom]||[])} currentIndex={currentIndex} />
                        </Popup>
                        {
                            flag ? (
                                <MyPopup>
                                    <View className="adPopup">
                                        <View className="adPopup-button">
                                            <Button className="adPopup-button-view" openType="share">分享群后就能免费观看哦~</Button>
                                            <Button className="adPopup-button-view zwyHeightSec">看广告支持一下我们也能免费观看~</Button>
                                            <Button className="adPopup-button-view">我在看看其它的吧~</Button>
                                        </View>
                                        <View className="adPopup-text">
                                            <Text className="adPopup-text-text">重要申明：本站自身不存储、控制编辑或修改任何资源，对资源内容不拥有任何权利，也不负任何责任！请勿相信观看时里面的任何广告！
                                            </Text>
                                        </View>
                                    </View>
                                </MyPopup>
                            ) : null
                        }
                    </View>
                ) : null
            }
        </>

    )
}

export default Play;