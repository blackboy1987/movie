import * as React from 'react';
import {View,ScrollView} from 'remax/wechat';
import classNames from 'classnames';
import './ReverseList.css';

type ReverseListProps = {
    theme: string;
    list:{
        title: string;
        url: string;
    }[];
    currentIndex: number;
}

const ReverseList:React.FC<ReverseListProps> = ({currentIndex,list,theme,children}) =>{
    return (
        <View className={classNames('tanchuxuanji',theme+'-bg2')}>
            <ScrollView enableFlex scrollIntoView='scrollViewId' scrollY showScrollbar={false} style={{height:700}}>
                <view className="tanchuxuanji-list-scroll">
                    {
                        list.map((item,index)=>(
                            <view className="tanchuxuanji-list-fenge" key={index}>
                                <view className={classNames('tanchuxuanji-list-txt ellipsis',currentIndex===index?'xuanjion':'')}>{item.title}</view>
                            </view>
                        ))
                    }
                </view>
            </ScrollView>
        </View>

    )
}

export default ReverseList;