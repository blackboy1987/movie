import * as React from 'react';
import {Image, Button, Text, View,previewImage,ScrollView} from 'remax/wechat';
import { Rate,Icon  } from 'annar';
import classNames from 'classnames';
import {themeMode} from "@/util/wxUtils";
import './index.css';
import {useState} from "react";

import HeaderBar from "@/components/HeaderBar";
import NavBar from "@/components/NavBar";
import VodItem from "@/components/VodItem";

const voddata ={
    "vod_id":67813,
    "type_id":13,
    "type_id_1":2,
    "group_id":0,
    "vod_name":"正青春",
    "vod_sub":"标化女王/标化人生",
    "vod_en":"zhengqingchun",
    "vod_status":1,
    "vod_letter":"Z",
    "vod_color":"",
    "vod_tag":"",
    "vod_class":"国产剧",
    "vod_pic":"https://images.cnblogsc.com/pic/upload/vod/2021-01/1611494665.jpg",
    "vod_pic_thumb":"",
    "vod_pic_slide":"",
    "vod_actor":"吴谨言,殷桃,何润东,左小青,刘敏涛,洪尧,章涛,张楠,王秀竹,徐洁儿,欧阳佳",
    "vod_director":"牟晓杰",
    "vod_writer":"",
    "vod_behind":"",
    "vod_blurb":"国际知名化妆品公司SW大中华区业绩蒸蒸日上，但总经理舒婉婷却面临严重的“被替”危机：一直庇护她的“靠山”上司即将退休，而自己一手提拔的得力干将华东区总监林睿迅猛的势头已经引起了总部的注意，成为顶替她的",
    "vod_remarks":"更新至41集",
    "vod_pubdate":"",
    "vod_total":0,
    "vod_serial":"41",
    "vod_tv":"",
    "vod_weekday":"",
    "vod_area":"大陆",
    "vod_lang":"国语",
    "vod_year":"2021",
    "vod_version":"",
    "vod_state":"",
    "vod_author":"",
    "vod_jumpurl":"",
    "vod_tpl":"",
    "vod_tpl_play":"",
    "vod_tpl_down":"",
    "vod_isend":0,
    "vod_lock":0,
    "vod_level":0,
    "vod_copyright":0,
    "vod_points":0,
    "vod_points_play":0,
    "vod_points_down":0,
    "vod_hits":0,
    "vod_hits_day":0,
    "vod_hits_week":0,
    "vod_hits_month":0,
    "vod_duration":"",
    "vod_up":0,
    "vod_down":0,
    "vod_score":3.5,
    "vod_score_all":0,
    "vod_score_num":0,
    "vod_time":"2021-02-19 20:36:24",
    "vod_time_add":1611494828,
    "vod_time_hits":0,
    "vod_time_make":0,
    "vod_trysee":0,
    "vod_douban_id":0,
    "vod_douban_score":"0.0",
    "vod_reurl":"",
    "vod_rel_vod":"",
    "vod_rel_art":"",
    "vod_pwd":"",
    "vod_pwd_url":"",
    "vod_pwd_play":"",
    "vod_pwd_play_url":"",
    "vod_pwd_down":"",
    "vod_pwd_down_url":"",
    "vod_mincontent":"国际知名化妆品公司SW大中华区业绩蒸蒸日上，但总经理舒婉婷却面临严重的“被替”危机：一直庇护她的“靠山”上司即将退休，而自己一手提拔的得力干将华东区总",
    "vod_content":"国际知名化妆品公司SW大中华区业绩蒸蒸日上，但总经理舒婉婷却面临严重的“被替”危机：一直庇护她的“靠山”上司即将退休，而自己一手提拔的得力干将华东区总监林睿迅猛的势头已经引起了总部的注意，成为顶替她的最大威胁。舒婉婷为赢得时机，从华南区调来同为总监的方静以制衡林睿。职场“白骨精”的三国大战徐徐展开，不料斜刺里冒出个双商开挂的职场愣头青章小鱼横冲直撞加入战局。这个巨大的变量无时不刻影响着结果。本就成王败寇，如今更是草木皆兵，凶险至极。谁将赢得职位，谁将获得救赎，谁又终将找到自己……硝烟之下，剑拔弩张，扑朔迷离！",
    "vod_play_from":"kuyun$$$ckm3u8",
    "vod_play_server":"no$$$no",
    "vod_play_note":"$$$",
    "vod_play_url":"第01集$https://iqiyi.cdn9-okzy.com/share/7c581b412887d3ddcf188128ec7d7cd5#第02集$https://iqiyi.cdn9-okzy.com/share/a42c6d96e478f1d17de4125dd591e306#第03集$https://iqiyi.cdn9-okzy.com/share/d42d69e7f0bd978777cca54687d3f1b7#第04集$https://iqiyi.cdn9-okzy.com/share/fc1027164548d0abe0f897f083c29dd6#第05集$https://iqiyi.cdn9-okzy.com/share/9eec67a7083de7ce59a9e898049a065e#第06集$https://iqiyi.cdn9-okzy.com/share/17de40aac6ef19073756e1237c8c0cb0#第07集$https://iqiyi.cdn9-okzy.com/share/90797bef9ef6175e04f3c9383568f9e4#第08集$https://iqiyi.cdn9-okzy.com/share/7effe368dace6405ddee825c0707c434#第09集$https://iqiyi.cdn9-okzy.com/share/0174a6d48b2b6c3d8c1928c759583f40#第10集$https://iqiyi.cdn9-okzy.com/share/94f311c1d065e993d81c1cdc9f658bb1#第11集$https://iqiyi.cdn9-okzy.com/share/690db34e0d336cce376b5b73b7d39f3d#第12集$https://iqiyi.cdn9-okzy.com/share/3939e1a6347fb39e7ad765f88bf33a14#第13集$https://iqiyi.cdn9-okzy.com/share/e44b3e88cae690fa9ceed8c7289da52b#第14集$https://iqiyi.cdn9-okzy.com/share/ba0c3a8d191e1921f963c1ac3edcb044#第15集$https://iqiyi.cdn9-okzy.com/share/45a2317a76448dd49776a9d0495631cc#第16集$https://iqiyi.cdn9-okzy.com/share/ec3dd4dc9a1084b24b736a18994e0bd6#第17集$https://iqiyi.cdn9-okzy.com/share/d4469ef60d8c2f45230bdb7ca7e3e053#第18集$https://iqiyi.cdn9-okzy.com/share/48fb20ee25f8ec60949e66e5ebb46600#第19集$https://iqiyi.cdn9-okzy.com/share/009b43fb969ff1c89f0a919d33b70ecf#第20集$https://iqiyi.cdn9-okzy.com/share/459cd7c0d6a30fe025892b2f443a8edf#第21集$https://iqiyi.cdn9-okzy.com/share/4f529984eccb6ebdc4795ee0cf154f5a#第22集$https://iqiyi.cdn9-okzy.com/share/502245f60c1fedd126195f9b70fff32a#第23集$https://iqiyi.cdn9-okzy.com/share/2bec3f7f8208e144c8fa1484d642eb47#第24集$https://youku.cdn4-okzy.com/share/26fcf9e127023b55bc1dab3feacf45a8#第25集$https://youku.cdn4-okzy.com/share/6968240043185f65f22097299b865f6b#第26集$https://iqiyi.cdn9-okzy.com/share/a2154298cca8ef88d1af027b622c4813#第27集$https://iqiyi.cdn9-okzy.com/share/38f0db9ef29020483020043156f8009d#第28集$https://iqiyi.cdn9-okzy.com/share/b3b9b7febd4be079b884e7c47f55f1ab#第29集$https://iqiyi.cdn9-okzy.com/share/02c027cdcb67dcd4d033940e372408e2#第30集$https://iqiyi.cdn9-okzy.com/share/3e4ad5698e12b6ac4241a6c144dc822e#第31集$https://iqiyi.cdn9-okzy.com/share/ad7a56645fcfda9b3436271850604962#第32集$https://iqiyi.cdn9-okzy.com/share/11f64a21a22a548559e4edfbdd8e0397#第33集$https://iqiyi.cdn9-okzy.com/share/5a211ba771eef85828a0a9299467ea19#第34集$https://iqiyi.cdn9-okzy.com/share/b043669a0987b6823e450053158ab98b#第35集$https://iqiyi.cdn9-okzy.com/share/a6bb531747c325334c7c0990eb8768f4#第36集$https://iqiyi.cdn9-okzy.com/share/3e5f370ac4b574fbf4c10f16d112919f#第37集$https://iqiyi.cdn9-okzy.com/share/2edc8ba7ff417abef3ae5ae12ca63796#第38集$https://iqiyi.cdn9-okzy.com/share/6afb69ea0a51d08167e4a3edb0f295a9#第39集$https://iqiyi.cdn9-okzy.com/share/d479d9a70cc8ef8d85152c28a1619b69#第40集$https://iqiyi.cdn9-okzy.com/share/7a8d63122e7a60daa2fc89fb0ab231bb#第41集$https://iqiyi.cdn9-okzy.com/share/c16117de1309f508633dae03c0804a0b$$$第01集$https://iqiyi.cdn9-okzy.com/20210124/21387_698f81a5/index.m3u8#第02集$https://iqiyi.cdn9-okzy.com/20210125/21429_00fbba7e/index.m3u8#第03集$https://iqiyi.cdn9-okzy.com/20210125/21431_fb6b096a/index.m3u8#第04集$https://iqiyi.cdn9-okzy.com/20210126/21473_9864109f/index.m3u8#第05集$https://iqiyi.cdn9-okzy.com/20210126/21476_b206e706/index.m3u8#第06集$https://iqiyi.cdn9-okzy.com/20210127/21521_62856bd7/index.m3u8#第07集$https://iqiyi.cdn9-okzy.com/20210127/21524_d9f0c5ae/index.m3u8#第08集$https://iqiyi.cdn9-okzy.com/20210128/21575_671c094f/index.m3u8#第09集$https://iqiyi.cdn9-okzy.com/20210128/21577_78080479/index.m3u8#第10集$https://iqiyi.cdn9-okzy.com/20210129/21645_90b3d5d2/index.m3u8#第11集$https://iqiyi.cdn9-okzy.com/20210130/21712_a942a75a/index.m3u8#第12集$https://iqiyi.cdn9-okzy.com/20210131/21753_9b3979a8/index.m3u8#第13集$https://iqiyi.cdn9-okzy.com/20210131/21755_5039e33c/index.m3u8#第14集$https://iqiyi.cdn9-okzy.com/20210201/21798_84ae2d48/index.m3u8#第15集$https://iqiyi.cdn9-okzy.com/20210201/21800_448b108c/index.m3u8#第16集$https://iqiyi.cdn9-okzy.com/20210202/21835_9d388e99/index.m3u8#第17集$https://iqiyi.cdn9-okzy.com/20210202/21838_4724defc/index.m3u8#第18集$https://iqiyi.cdn9-okzy.com/20210203/21884_872dc67d/index.m3u8#第19集$https://iqiyi.cdn9-okzy.com/20210203/21886_1e0c70c1/index.m3u8#第20集$https://iqiyi.cdn9-okzy.com/20210204/21924_50c9e82d/index.m3u8#第21集$https://iqiyi.cdn9-okzy.com/20210204/21925_393b71d7/index.m3u8#第22集$https://iqiyi.cdn9-okzy.com/20210205/21972_80c2ad75/index.m3u8#第23集$https://iqiyi.cdn9-okzy.com/20210206/22026_5711c32d/index.m3u8#第24集$https://youku.cdn4-okzy.com/20210207/13775_8718a743/index.m3u8#第25集$https://youku.cdn4-okzy.com/20210207/13776_c592b936/index.m3u8#第26集$https://iqiyi.cdn9-okzy.com/20210208/22133_4fcb5808/index.m3u8#第27集$https://iqiyi.cdn9-okzy.com/20210208/22135_48a022fe/index.m3u8#第28集$https://iqiyi.cdn9-okzy.com/20210209/22170_c971bd93/index.m3u8#第29集$https://iqiyi.cdn9-okzy.com/20210209/22173_aa5d7d62/index.m3u8#第30集$https://iqiyi.cdn9-okzy.com/20210213/22340_a4c17e25/index.m3u8#第31集$https://iqiyi.cdn9-okzy.com/20210214/22393_0f77cd26/index.m3u8#第32集$https://iqiyi.cdn9-okzy.com/20210214/22394_ef8a226f/index.m3u8#第33集$https://iqiyi.cdn9-okzy.com/20210215/22446_1e0a309f/index.m3u8#第34集$https://iqiyi.cdn9-okzy.com/20210215/22449_43d1fd87/index.m3u8#第35集$https://iqiyi.cdn9-okzy.com/20210216/22505_f52b305b/index.m3u8#第36集$https://iqiyi.cdn9-okzy.com/20210216/22511_d9c91860/index.m3u8#第37集$https://iqiyi.cdn9-okzy.com/20210217/22547_46a9b990/index.m3u8#第38集$https://iqiyi.cdn9-okzy.com/20210217/22550_b228d68b/index.m3u8#第39集$https://iqiyi.cdn9-okzy.com/20210218/22589_2872fed3/index.m3u8#第40集$https://iqiyi.cdn9-okzy.com/20210218/22591_ff1d1f46/index.m3u8#第41集$https://iqiyi.cdn9-okzy.com/20210219/22635_8f105897/index.m3u8",
    "vod_down_from":"xunlei",
    "vod_down_server":"no",
    "vod_down_note":"",
    "vod_down_url":"第01集$http://down5.okdown10.com/20210124/21387_698f81a5/正青春01.mp4#第02集$http://down5.okdown10.com/20210125/21429_00fbba7e/正青春02.mp4#第03集$http://down5.okdown10.com/20210125/21431_fb6b096a/正青春03.mp4#第04集$http://down5.okdown10.com/20210126/21473_9864109f/正青春04.mp4#第05集$http://down5.okdown10.com/20210126/21476_b206e706/正青春05.mp4#第06集$http://down5.okdown10.com/20210127/21521_62856bd7/正青春06.mp4#第07集$http://down5.okdown10.com/20210127/21524_d9f0c5ae/正青春07.mp4#第08集$http://down5.okdown10.com/20210128/21575_671c094f/正青春08.mp4#第09集$http://down5.okdown10.com/20210128/21577_78080479/正青春09.mp4#第10集$http://down5.okdown10.com/20210129/21645_90b3d5d2/正青春10.mp4#第11集$http://down5.okdown10.com/20210130/21712_a942a75a/正青春11.mp4#第12集$http://down5.okdown10.com/20210131/21753_9b3979a8/正青春12.mp4#第13集$http://down5.okdown10.com/20210131/21755_5039e33c/正青春13.mp4#第14集$http://down5.okdown10.com/20210201/21798_84ae2d48/正青春14.mp4#第15集$http://down5.okdown10.com/20210201/21800_448b108c/正青春15.mp4#第16集$http://down5.okdown10.com/20210202/21835_9d388e99/正青春16.mp4#第17集$http://down5.okdown10.com/20210202/21838_4724defc/正青春17.mp4#第18集$http://down5.okdown10.com/20210203/21884_872dc67d/正青春18.mp4#第19集$http://down5.okdown10.com/20210203/21886_1e0c70c1/正青春19.mp4#第20集$http://down5.okdown10.com/20210204/21924_50c9e82d/正青春20.mp4#第21集$http://down5.okdown10.com/20210204/21925_393b71d7/正青春21.mp4#第22集$http://down5.okdown10.com/20210205/21972_80c2ad75/正青春22.mp4#第23集$http://down5.okdown10.com/20210206/22026_5711c32d/正青春23.mp4#第24集$http://down5.okdown6.com/20210207/13775_8718a743/正青春24.mp4#第25集$http://down5.okdown6.com/20210207/13776_c592b936/正青春25.mp4#第26集$http://down5.okdown10.com/20210208/22133_4fcb5808/正青春26.mp4#第27集$http://down5.okdown10.com/20210208/22135_48a022fe/正青春27.mp4#第28集$http://down5.okdown10.com/20210209/22170_c971bd93/正青春28.mp4#第29集$http://down5.okdown10.com/20210209/22173_aa5d7d62/正青春29.mp4#第30集$http://down5.okdown10.com/20210213/22340_a4c17e25/正青春30.mp4#第31集$http://down5.okdown10.com/20210214/22393_0f77cd26/正青春31.mp4#第32集$http://down5.okdown10.com/20210214/22394_ef8a226f/正青春32.mp4#第33集$http://down5.okdown10.com/20210215/22446_1e0a309f/正青春33.mp4#第34集$http://down5.okdown10.com/20210215/22449_43d1fd87/正青春34.mp4#第35集$http://down5.okdown10.com/20210216/22505_f52b305b/正青春35.mp4#第36集$http://down5.okdown10.com/20210216/22511_d9c91860/正青春36.mp4#第37集$http://down5.okdown10.com/20210217/22547_46a9b990/正青春37.mp4#第38集$http://down5.okdown10.com/20210217/22550_b228d68b/正青春38.mp4#第39集$http://down5.okdown10.com/20210218/22589_2872fed3/正青春39.mp4#第40集$http://down5.okdown10.com/20210218/22591_ff1d1f46/正青春40.mp4#第41集$http://down5.okdown10.com/20210219/22635_8f105897/正青春41.mp4",
    "type_name":"国产剧"
};

const WxVerify = true;
const likeShow = true;
const photos: string[] = [
    'https://img1.doubanio.com/view/photo/s/public/p2623050287.jpg',
    'https://img9.doubanio.com/view/photo/s/public/p2623050285.jpg',
    'https://img2.doubanio.com/view/photo/s/public/p2624671872.jpg',
    'https://img3.doubanio.com/view/photo/s/public/p2624671871.jpg',
    'https://img1.doubanio.com/view/photo/s/public/p2623050287.jpg',
    'https://img9.doubanio.com/view/photo/s/public/p2623050285.jpg',
    'https://img2.doubanio.com/view/photo/s/public/p2624671872.jpg',
    'https://img3.doubanio.com/view/photo/s/public/p2624671871.jpg',
    'https://img1.doubanio.com/view/photo/s/public/p2623050287.jpg',
    'https://img9.doubanio.com/view/photo/s/public/p2623050285.jpg',
    'https://img2.doubanio.com/view/photo/s/public/p2624671872.jpg',
    'https://img3.doubanio.com/view/photo/s/public/p2624671871.jpg',
];
const likedata: any[] = [];


const Detail = ()=>{
    const [showContent,setShowContent] = useState<boolean>(false);

    const preview = (url: string) =>{
        previewImage({
            current: url,
            urls: photos,
            longPressActions: {
                itemList: [ "发送给朋友", "保存图片", "收藏" ],
            }
        }).then(response=>{
            console.log(response);
        });
    }
    return (
        <View className={themeMode()+'-page'}>
            <HeaderBar theme={themeMode()}>
                <NavBar fixed type="home" bgColor='rgba(255, 255, 255, 0)' barStyle={{height:48}} bar={{height:64,width:536,marginLeft:20}} Button={{width:174}} customBar={{height:132}} />

                <view className={classNames(
                    'bigContent',
                    themeMode()+'-title-color'
                )}>
                    <Image className="bigImg" lazyLoad src={voddata.vod_pic} webp />
                    <View className="bigClass">
                        <Text className="big_name ellipsis">{voddata.vod_name}</Text>
                        {
                            voddata.vod_remarks.length>3 ? (
                                <Text className="big_year ellipsis" style={{color:'rgba(255, 0, 4, 1)',fontSize:22}}>{voddata.type_id == 2 ? voddata.vod_remarks : '更新至' + voddata.vod_serial + '集'}</Text>
                            ) : null
                        }
                        <Text className="big_year ellipsis">{'类型 : '+(voddata.vod_class ? voddata.vod_class : '未知')}</Text>
                        <Text className="big_year ellipsis">{'演员 : '+(voddata.vod_actor ? voddata.vod_actor : '未知')}</Text>
                        <Text className="big_year ellipsis">{voddata.vod_year + ' / ' + (voddata.vod_area ? voddata.vod_area : '未知') + ' / ' + (voddata.vod_director ? voddata.vod_director : '未知')}</Text>
                        <View className="big_button">
                            <Button className="big_fx" openType="share">
                                <View className="big_button_fx">
                                    <Image style={{width:24,marginRight:2}} mode='widthFix' src='/images/share1.png' />
                                    分享
                                </View>
                            </Button>
                            <View className="big_button_sc" >
                                <Image style={{width:28,marginRight:2}} mode='widthFix' src='/images/haibao.png' />
                                海报
                            </View>
                        </View>
                    </View>
                </view>
            </HeaderBar>
            {
                WxVerify ? (
                    <View className="playView">
                        <View className="vodMsg">
                            <View className="vodScore">
                                <Text className="vodScore_text">{voddata.vod_score > 0 ? '豆瓣:' + voddata.vod_score : '暂无评分'}</Text>
                                <Rate value={3.8} readOnly size={44} color='#f4d13a' style={{marginRight:0}} />
                            </View>
                            <View className="vodWebkit" />
                            <View className="vodPlay">
                                <Image mode='widthFix' style={{width:45}} src='/images/start.png' />
                                <view className="vodSc">开始播放</view>
                            </View>
                        </View>
                    </View>
                ) : null
            }
            <view className="vod_content">
                <view className={classNames(
                    'vod_content_title',
                    themeMode()+'-title-color'
                )}>影片简介</view>
                <view className="vod_content_text">
                    {
                        showContent ? (
                            <View>
                                {voddata.vod_content}
                                {
                                    voddata.vod_content!==null&&voddata.vod_content.length>85 ? (<View className="vod_content_full" onClick={()=>setShowContent(false)}>收起<Icon type='fold' color='#999999' /></View>) : null
                                }
                            </View>
                        ) : (
                            <View>
                                <Text>{voddata.vod_content.substr(0,85)}</Text>
                                {
                                    voddata.vod_content.length > 85 ? (<View className="vod_content_full" onClick={()=>setShowContent(true)}>展开<Icon type='unfold' color='#999999' /></View>) : null
                                }
                            </View>
                        )
                    }
                </view>
            </view>
            {
                likeShow ? (
                    <View className="douban">
                        {
                            photos.length>0 ? (
                                <View style={{width:'94%',margin:'0 auto'}}>
                                    <View className={classNames(
                                        'vod_content_title',
                                        themeMode()+'-title-color'
                                    )}>精彩剧照</View>
                                    <View className="functionaryJob" style={{height:340,display:'flex',overflow:'auto'}}>
                                        {
                                            photos.map((item,index)=>(
                                                <View className="directors" style={{display:'flex',width:'auto'}} key={index}>
                                                    <View style={{width:430,height:272,position:'relative',marginRight:20}}>
                                                        <Image onClick={()=>preview(item)} lazyLoad src={item} style={{width:430,height:272,borderRadius:10}} webp />
                                                    </View>
                                                </View>
                                            ))
                                        }

                                    </View>
                                </View>
                            ) : null
                        }
                    </View>
                ) : null
            }
            {
                likedata.length>0 ? (
                    <View>
                        <View className={classNames(
                            'vod_content_title ',
                            themeMode()+'-title-color'
                        )} style={{marginLeft:20}}>精彩推荐
                        </View>
                        <View className="like">
                            <ScrollView className="likelist " enableFlex scrollX showScrollbar={false}>
                                {
                                    likedata.map(item=>( <View className="likeitem" key={item.vod_id}><VodItem theme={themeMode()} values={item} /></View>))
                                }
                            </ScrollView>
                        </View>
                    </View>
                ) : null
            }
        </View>
    )
}

export default Detail;