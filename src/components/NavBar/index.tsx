import * as React from 'react';
import {Image, View} from 'remax/wechat';
// @ts-ignore
import classNames from 'classnames';
import './index.css';

type NavBarProps = {
    fixed?: boolean;
    bgColor?: string;
    barStyle?: React.CSSProperties;
    bar?: React.CSSProperties;
    Button?: React.CSSProperties;
    type?: string;
    search?: boolean;
    searchView?: React.CSSProperties;
    textView?: React.CSSProperties;
    customBar?: React.CSSProperties;
    table?: string;
    text?: string;
    switchTheme?: (theme:string) => void;
}

const NavBar:React.FC<NavBarProps> = (
    {
        switchTheme,
        fixed,
        bgColor='rgba(255, 255, 255, 0);',
        barStyle={height:24},
        bar={height:32,width:271,marginLeft: 10,},
        Button,
        type,
        search,
        text,
        textView,
        customBar,
        table,
        searchView
    }) =>{
    return (
        <View>
            <View className={classNames('custom',fixed?'fixedView':'')} style={{background: bgColor}}>
                <View style={barStyle} />
                <View className="bar" style={bar}>
                    {
                        type == 'index' ? (
                            <View className="backTwo" style={Button}>
                                <View className="back cuIcon" onClick={()=>switchTheme&&switchTheme("black")}>
                                    <Image src='/images/back.png' style={{width:40,height:40}} />
                                </View>
                                <View className="line" />
                                <View className="back cuIcon" onClick={()=>switchTheme&&switchTheme("white")}>
                                    <Image src='/images/white.png' style={{width:40,height:40}} />
                                </View>
                            </View>
                        ) : null
                    }
                    {
                        type == 'home' ? (
                            <View className="backTwo" style={Button}>
                                <View className="back cuIcon">
                                    <Image src='/images/left.png' style={{width:40,height:40}} />
                                </View>
                                <View className="line" />
                                <View className="back cuIcon">
                                    <Image src='/images/home.png' style={{width:40,height:40}} />
                                </View>
                            </View>
                        ) : null
                    }
                    {
                        type == 'back' ? (
                            <View className="backOne" style={Button}>
                                <View className="back" style={{height:'100%'}}>
                                    <Image mode='widthFix' src='/images/left.png' style={{width:40,height:40}} />
                                </View>
                            </View>
                        ) : null
                    }
                    {
                        type == 'top' ? (
                            <View className="backOne" style={Button}>
                                <View className="back cuIcon">
                                    <Image mode='widthFix' style={{width:60}} src='/images/top.png' />
                                </View>
                            </View>
                        ) : null
                    }
                    {
                        search ? (
                            <View className="search" style={searchView}>
                                <View className="searchBox">
                                    <View className="search-t">请输入关键字搜索</View>
                                </View>
                            </View>
                        ) : null
                    }
                    {
                        text !=='' ? (
                            <View className="search" style={textView}>
                                <View className="text ellipsis" style={{height:'100%'}}>{text}</View>
                            </View>
                        ) : null
                    }
                </View>
                <View style={{height:20}} />
            </View>
            {
                fixed&&!table ? (<View style={customBar} />) : null
            }
        </View>


    )
}

export default NavBar;