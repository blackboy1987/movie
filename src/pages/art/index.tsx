import * as React from 'react';
import {View, Text, Image, Button} from 'remax/wechat';
import classNames from 'classnames';
import {themeMode} from "@/util/wxUtils";

import './index.css';
import NavBar from "@/components/NavBar";
import CustomAd from "@/components/CustomAd";
import VodItem from "@/pages/art/VodItem";

const artData = {
    "topic_id":21,
    "topic_name":"美剧推荐",
    "topic_pic":"http://i1.letvimg.com/lc06_iscms/201606/27/13/45/f58d434ad7e2494b97bcb06a1a1c8838.jpg",
    "topic_time":1602931859,
    "topic_rel_vod":"42669,71271,80489,71996,80696,76095,43896,71455,43490,69385,97141,86468,87269",
    "topic_blurb":"美剧推荐",
    "topic_tag":"美剧",
    "list":[
        {
            "vod_id":71455,
            "type_id":2,
            "vod_name":"异星灾变第一季",
            "vod_actor":"阿曼达·科林,崔维斯·费米尔,阿布巴卡尔·萨利姆,文塔·麦格拉斯,妮娅姆·阿尔格,马蒂亚斯·瓦雷拉,费利克斯·杰米森,伊桑·哈扎德,乔丹·洛克伦,阿西娅·沙阿,王玮雯,苏珊·丹福特,珍娜·厄普顿,柯斯莫·贾维斯,史蒂夫·沃尔,勃朗特·卡迈克尔,布雷特·威廉姆斯,克莱德·伯宁,布兰登·默雷,坦娅·范·格拉恩,乔·瓦兹",
            "vod_pic":"https://img.444662.cn/upload/vod/20200907-1/70e49dea107076ef2ce90f23ef292110.jpg",
            "vod_remarks":"10集全",
            "vod_area":"美国",
            "vod_year":"2020",
            "vod_score":"8.1",
            "vod_content":"&lt;p&gt;故事讲述两个机器人授命在一个神秘星球抚育人类后代，随着宗教差异导致的分崩离析，机器人发现控制人类信仰是一件极度危险的事情。斯科特表示：“我一直在寻找科幻题材的新疆界，这部剧集将展现一个与众不同、充满想象力的世界，同时这部剧也提出了这样的问题：是什么让我们成为了人类？是什么构成了一个家庭？如果我们能重新来过、消除我们所在星球的混乱会怎么样？我们能幸存下去吗？我们能做得更好吗？”&lt;/p&gt;",
            "vod_class":"剧情,科幻",
            "vod_level":0,
            "vod_hits":54
        },
        {
            "vod_id":42669,
            "type_id":2,
            "vod_name":"地球百子第七季",
            "vod_actor":"伊莉萨·泰勒-科特尔,鲍勃·莫雷,玛莉·艾格洛蒲露丝,琳赛·摩根,理查德·哈蒙,塔斯亚·特莱斯,山农·库克,卓库·莫度,JR·波恩,路易莎·德奥维拉,萝拉·弗兰纳里,塔蒂·加布里埃,杰西卡·哈蒙,阿莱娜·霍夫曼,加洛德·约瑟夫,李·马贾道布,阿迪纳·波特,查德·洛克,萨钦·萨赫勒",
            "vod_pic":"https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2603455013.jpg",
            "vod_remarks":"更新至13集",
            "vod_area":"美国",
            "vod_year":"2020",
            "vod_score":"8.2",
            "vod_content":"CW科幻剧集《#地球百子#》宣布未播出的第7季将是最后一季。",
            "vod_class":"剧情,科幻,悬疑",
            "vod_level":0,
            "vod_hits":33
        },
        {
            "vod_id":71271,
            "type_id":2,
            "vod_name":"黑袍纠察队第二季",
            "vod_actor":"卡尔·厄本,杰克·奎德,安东尼·斯塔尔,艾琳·莫里亚蒂,多米妮克·麦克艾丽戈特,杰西·厄舍,拉兹·阿隆索,切斯·克劳福,托默·卡蓬,凯伦·福原,内森·米切尔,蔻碧·米纳菲,珊特尔·范圣滕,妮卡·埃利奥特,阿雅·卡什,莱拉·罗宾斯,乔丹娜·拉茹瓦,吉姆·比弗,周豪,卡梅伦·克罗维蒂,克劳迪娅·多米特,贾森·加里-斯坦福德,肖恩·阿什莫",
            "vod_pic":"https://img.444662.cn/upload/vod/20200905-1/7161ab5e55cfc9571f7c7c841f3e766d.jpg",
            "vod_remarks":"更新至8集",
            "vod_area":"美国",
            "vod_year":"2020",
            "vod_score":"8.6",
            "vod_content":"&lt;p&gt;剧中讲述一群被旁人称为「The Boys」的义警，他们专门对付因为自身能力而腐败﹑黑化的超级英雄。而他们的大目标就是金玉其外，败絮其中的英雄团队「The Seven」，以及管理团队﹑掩盖黑料的企业「Vought」。&lt;/p&gt;",
            "vod_class":"喜剧,动作,科幻",
            "vod_level":0,
            "vod_hits":25
        },
        {
            "vod_id":71996,
            "type_id":2,
            "vod_name":"行尸走肉第十季",
            "vod_actor":"诺曼·瑞杜斯,丹娜·奎里拉,梅丽莎·麦克布莱德,乔什·麦克德米特,克里斯蒂·瑟拉图斯,塞斯·吉列姆,罗斯·马昆德,卡里·佩顿,卡兰·麦克奥利菲,Avi,Nash,瑞恩·赫斯特,萨曼莎·莫顿,杰弗里·迪恩·摩根,库珀·安德鲁斯,索拉·伯奇,克里·卡希尔,凯文·卡罗尔,约翰·芬,凯莱·弗莱明,丹·福勒,纳迪娅·希尔克,大卫·L·马斯顿,埃莉诺·松浦,卡萨迪·麦克林西,西德尼·帕克,琳赛·雷吉斯特,劳伦·利德洛夫,艾莉克斯·斯甘巴蒂,大卫·莫拉蒂,玛丽亚·Z·威尔逊",
            "vod_pic":"https://ae03.alicdn.com/kf/H84287fcc278546c78d1af171d939a77c4.png",
            "vod_remarks":"16集全/已完结",
            "vod_area":"美国",
            "vod_year":"2019",
            "vod_score":"7.7",
            "vod_content":"&lt;p&gt;美剧《行尸走肉》主演安德鲁·林肯退出的消息才发布没多久，今天，安德鲁·林肯就对媒体发声，他说：“我还是会回归《行尸走肉》的，就是第十季，并且还会以导演的身份回归，成为第十季的导演之一。”演员升级成为导演，在《行尸走肉》中是有先例的，之前的科尔曼·多明戈、迈克尔·库立兹都是先出演了《行尸走肉》，然后又升级为导演。&lt;/p&gt;",
            "vod_class":"剧情,科幻,惊悚",
            "vod_level":0,
            "vod_hits":13
        },
        {
            "vod_id":69385,
            "type_id":2,
            "vod_name":"爱死亡和机器人第一季",
            "vod_actor":"安东尼奥·阿尔瓦雷斯,海伦·萨德勒,伊兰妮·谭,斯蒂芬·卡皮契奇",
            "vod_pic":"https://img.444662.cn/upload/vod/20200826-1/91b6211f522d37449890e764062512c1.jpg",
            "vod_remarks":"18集全",
            "vod_area":"美国",
            "vod_year":"2019",
            "vod_score":"0.0",
            "vod_content":"&lt;p&gt;这部名为《爱，死亡和机器人》的动画短片合集由18部分组成，每部分时长5-15分钟。这些短片涵盖多种类型，包括科幻、奇幻、恐怖和喜剧；这些短片也将包含多种形式，包括传统2D和3DCGI短片。&lt;/p&gt;&lt;p&gt;18部短片导演列表： &lt;br/&gt;　　1.桑尼的优势 Dave Wilson &lt;br/&gt;　　2.三个机器人 Víctor Maldonado&amp;Alfredo Torres &lt;br/&gt;　　3.证人 Alberto Mielgo &lt;br/&gt;　　4.机动装甲 Franck Balson &lt;br/&gt;　　5.噬魂者 Owen Sullivan &lt;br/&gt;　　6.当酸奶统治世界 Victor Maldonado &amp; Alfredo Torres &lt;br/&gt;　　7.裂缝以外 Leon Berlue,Dominique Boidin,Remi Kozyra,Maxime Luere &lt;br/&gt;　　8.祝有好的收获 Oliver Thomas &lt;br/&gt;　　9.垃圾场 Javier Recio Gracia &lt;br/&gt;　　10.变形者 Gabriele Pennacchioli &lt;br/&gt;　　11.帮手 Jon Yeo &lt;br/&gt;　　12.古鱼复苏 Damian Nenow &lt;br/&gt;　　13.新运十三 Jerome Chen &lt;br/&gt;　　14.齐马的作品 Robert Valley &lt;br/&gt;　　15.盲点 Vitality Shushko &lt;br/&gt;　　16.冰河时代 Tim Miller &lt;br/&gt;　　17.不一样的历史 Victor Maldonado &amp; Alfredo Torres &lt;br/&gt;　　18.秘密战争 Istvan Zorkoczy&lt;br/&gt;&lt;/p&gt;",
            "vod_class":"欧美剧",
            "vod_level":0,
            "vod_hits":11
        },
        {
            "vod_id":80489,
            "type_id":2,
            "vod_name":"致命女人第一季",
            "vod_actor":"刘玉玲,金妮弗·古德温,,瑞德·斯科特,山姆·贾格,亚历珊德拉·达达里奥,柯尔比·豪威尔-巴普蒂斯特,赛迪·卡尔瓦诺,杰克·达文波特,里奥·霍华德,艾丽莎·科波拉,凯蒂·芬内朗",
            "vod_pic":"https://img.huishij.com/upload/vod/20201003-1/dcf409c210b623142acfec8a3814268a.jpg",
            "vod_remarks":"更新至10集",
            "vod_area":"美国",
            "vod_year":"2019",
            "vod_score":"9.4",
            "vod_content":"&lt;p&gt;三位生活在不同年代的女性：60年代的家庭主妇，80年代的社交名媛和2018年的律师，处理着婚姻中的不忠行为。&lt;/p&gt;",
            "vod_class":"剧情,喜剧,犯罪",
            "vod_level":0,
            "vod_hits":6
        },
        {
            "vod_id":76095,
            "type_id":2,
            "vod_name":"艾米丽在巴黎第一季",
            "vod_actor":"莉莉·柯林斯,阿什利·朴,菲利平·勒鲁瓦-博利约,卡米尔·拉萨特,凯特·沃什,让-克里斯托夫·布维,克里斯多夫·泰克,克洛德·佩隆",
            "vod_pic":"https://pic.szjal.cn/img/d8872cbde0d1789b1b58809f399e3a8b.jpg",
            "vod_remarks":"更新至10集",
            "vod_area":"美国",
            "vod_year":"2020",
            "vod_score":"7.3",
            "vod_content":"在巴黎拍摄的《艾米丽闯巴黎》讲述来自中西部的20多岁女主Emily（Lily Collins饰演），意外地获得在巴黎工作的机会，她的任务是把美国观念带进一间享誉法国的营销公司。Emily得适应文化上的新冲击，同时还得兼顾事业、新友谊及爱情生活。",
            "vod_class":"喜剧,爱情",
            "vod_level":0,
            "vod_hits":5
        },
        {
            "vod_id":43490,
            "type_id":2,
            "vod_name":"浴血黑帮第五季",
            "vod_actor":"基里安·墨菲,海伦·麦克洛瑞,安雅·泰",
            "vod_pic":"https://ae03.alicdn.com/kf/Hc90cd0fa08ed48a3858abc1dc9e3a71fj.png",
            "vod_remarks":"6集全/已完结",
            "vod_area":"欧美",
            "vod_year":"2019",
            "vod_score":"9.3",
            "vod_content":"When Tommy Shelby MP (Cillian Murphy) is approached by a charismatic politician with a bold vision for Britain, he realises that his response will affect not just his familys future but that of the entire nation.",
            "vod_class":"剧情,犯罪,人性",
            "vod_level":0,
            "vod_hits":2
        },
        {
            "vod_id":86468,
            "type_id":2,
            "vod_name":"太空先锋",
            "vod_actor":"帕特里克·J·亚当斯,派特里克·费斯克勒,埃里克·拉丁,詹姆斯·拉夫尔提,香侬·卢西奥,更多...",
            "vod_pic":"https://pic.szjal.cn/img/99060008058b7c22ea22eb11aec93fef.jpg",
            "vod_remarks":"更新至8集",
            "vod_area":"美国",
            "vod_year":"2020",
            "vod_score":"7.8",
            "vod_content":"来自《诉讼双雄》（Suits）的Patrick J. Adams将主演国家地理频道的新剧《太空先锋》（The Right Stuff），饰演第一个进入地球轨道的美国宇航员约翰·格伦。1983年曾出过同名电影版，描绘了美国太空计划的诞生过程以及第一批航天员诞生的历史故事。 　　该剧是由小李子的制片公司亚壁古道公司（Appian Way）出品的，李奥纳多·迪卡普里奥本人也将担任总制片人之一，预计2020年播出。",
            "vod_class":"剧情",
            "vod_level":0,
            "vod_hits":2
        },
        {
            "vod_id":97141,
            "type_id":2,
            "vod_name":"星际迷航：发现号第三季",
            "vod_actor":"索尼夸·马丁-格林,布鲁·德尔·巴里奥,大卫·阿贾拉,伊恩·亚历山大",
            "vod_pic":"https://img.huishij.com/upload/vod/20201016-1/1b31b9c6c4f7d3ddd2e8836f4e727dc2.jpg",
            "vod_remarks":"更新至01集",
            "vod_area":"美国",
            "vod_year":"2020",
            "vod_score":"8.3",
            "vod_content":"&lt;p&gt;《星际迷航：发现号》宣布续订第3季，并加入Michelle Paradise(《初代吸血鬼》《南国医恋》)，和Alex Kurtzman一起担任运作人。第3季2020年上线。&lt;/p&gt;",
            "vod_class":"剧情,科幻,冒险",
            "vod_level":0,
            "vod_hits":1
        },
        {
            "vod_id":80696,
            "type_id":2,
            "vod_name":"智能逆袭第一季",
            "vod_actor":"费尔南达·安德拉德,约翰·比灵斯列,伊芙·哈洛,迈克尔·莫斯利,约翰·斯拉特里,Aaron,Moten,Evan",
            "vod_pic":"https://pic.szjal.cn/img/db7c08968e394002266315611962a36a.jpg",
            "vod_remarks":"10集全",
            "vod_area":"美国",
            "vod_year":"2020",
            "vod_score":"7.8",
            "vod_content":"原定19-20年度播出的FOX新剧《智能逆袭 neXT》因疫情而延期，现在FOX确定它会离开原定的周一档，改为在周二档﹑美国时间10月6日首播。 AI题材惊悚剧《智能逆袭》由《24小时：遗产 24: Legacy》主创之一Manny Coto﹑《我们这一天 This Is Us》两位幕后John Requa及Glenn Ficarra联合开发。 《智能逆袭》剧情讲述一名聪明但偏执的前科技公司CEO Paul Leblanc加入美国国土安全部的网络安全特工部门，联手阻止一个足以威胁全世界人类的人工智能。 Fernanda Andrade饰演女主Shea﹑John Slattery饰演Paul Leblanc。",
            "vod_class":"剧情",
            "vod_level":0,
            "vod_hits":1
        },
        {
            "vod_id":87269,
            "type_id":2,
            "vod_name":"行尸之惧第六季",
            "vod_actor":"连尼·詹姆斯,克里斯汀·伊万格丽斯塔,德米垂斯·格罗斯",
            "vod_pic":"https://pic.szjal.cn/img/0721f7c1613cd0160b18af457c01b667.jpg",
            "vod_remarks":"更新至7集",
            "vod_area":"美国",
            "vod_year":"2020",
            "vod_score":"8.4",
            "vod_content":"Mortally wounded Morgan must decide whether to help a desperate stranger while a mysterious bounty hunter tries to finish what Ginny couldnt.",
            "vod_class":"剧情,科幻,恐怖",
            "vod_level":0,
            "vod_hits":1
        },
        {
            "vod_id":43896,
            "type_id":2,
            "vod_name":"真探第三季",
            "vod_actor":"马赫沙拉·阿里,卡门·艾乔戈,斯蒂芬·多尔夫,斯科特·麦克纳里,麦米·古默,莎拉·加顿,艾米丽·尼尔森,黛博拉·艾里德",
            "vod_pic":"https://ae03.alicdn.com/kf/H53ad51ce0fd6456892155c6cd1818e14C.png",
            "vod_remarks":"08",
            "vod_area":"美国",
            "vod_year":"2019",
            "vod_score":"8.2",
            "vod_content":"HBO诗选剧《真探 True Detective》第二季评价下挫后，事隔两年才获批准拍第三季，第三季由Nic Pizzolatto执笔﹑Jeremy Saulnier﹑Daniel Sackheim及Nic Pizzolatto负责执导，现定于美国时间19年1月13日首播。《真探》第三季讲述在Ozarks一个神秘﹑跨越数十年的犯罪故事，该季剧情会分成3个时间线。Mahershala Ali（凭《月光男孩 Moonlight》赢得奥斯卡最佳男配角）饰演主角Wayne Hays，阿肯色州西北区的州警探。其余主演包括Carmen Ejogo﹑Stephen Dorff﹑Ray Fisher﹑Michael Greyeyes﹑Jon Tenney﹑Deborah Ayorinde﹑Rhys Wakefield﹑Sarah Gadon﹑Emily Nelson﹑Brandon Flynn﹑Michael Graziadei﹑Josh Hopkins及Jodi Balfour。",
            "vod_class":"剧情,犯罪,悬疑",
            "vod_level":0,
             "vod_hits":0
        }
    ]
};

const Art = () =>{

    return (
        <View className={themeMode()+'-page'}>
            <NavBar fixed type="home" bgColor='rgba(255, 255, 255, 0)' barStyle={{height:48}} bar={{height:64,width:536,marginLeft:20}} Button={{width:174}} customBar={{height:132}} />
            <View className={classNames('topicTop',themeMode()+'-title-color')}>
                <View className="topicTop-img">
                    <Image className="topicTop-pic" mode="aspectFill" src={artData.topic_pic} />
                    <View className="topicTop-num">{'共'+artData.list.length + '部'}</View>
                    <View className="topicTop-tag ellipsis">{artData.topic_tag}</View>
                </View>
                <View className="topicTop-tilte">
                    <View className="topicTop-name ellipsis">{artData.topic_name}</View>
                    <Button className="cuIcon topicTop-share" hoverClassName='none' openType="share" style={{color:'#3fbe5d'}} />
                </View>
                <View className="topicTop-blurb">{artData.topic_blurb}</View>
            </View>
            <View className="vodlist">
                {
                    artData.list.map((item,index)=>(
                        <View key={index}>
                            {
                                index === 3 ? (<CustomAd show />) : null
                            }
                            <VodItem theme={themeMode()} values={item} />
                        </View>
                    ))
                }

            </View>
        </View>
    )
}

export default Art;