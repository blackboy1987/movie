import * as React from 'react';
import {View,Text,Image} from 'remax/wechat';
import classNames from 'classnames';
import './index.css';
import {Property} from "csstype";

const text = '小姐姐爱追剧-免费VIP电影-小姐姐追剧神器-快来吧！';

type NoticeProps = {
    show?: boolean;
    backgroundColor?:string;
    showClose?: boolean;
    showIcon?: boolean;
    showGetMore?: boolean;
    moreText?: string;
    moreColor?: string;
    scrollable?: boolean;
    single?: string;
    color?: string;
    wrapWidth?: number;
    animationDuration?: Property.AnimationDuration;
    webviewHide?:boolean;
    animationPlayState?: string;
    animationDelay?:Property.AnimationDuration;
}

const Notice:React.FC<NoticeProps> = ({animationDelay,animationPlayState,webviewHide,animationDuration,wrapWidth,color,single,scrollable,showClose,moreText,moreColor,showGetMore,show,showIcon,backgroundColor,children}) =>{
    return (
        <>
            {
                show ? (
                    <View className="uni-noticebar" style={{backgroundColor: backgroundColor}}>
                        {
                            showClose ? (<Image className='uni-noticebar-close cuIcon' mode='widthFix' src='/images/close.png' style={{width:40}} />) : null
                        }
                        {
                            showIcon ? (<Image className="uni-noticebar-icon cuIcon" mode='widthFix' src='/images/notice.png' style={{width:40}}  />) : null
                        }
                        <View
                            className={classNames(
                                'uni-noticebar__content-wrapper',
                                scrollable?'uni-noticebar__content-wrapper--scrollable':'',
                                !scrollable&&(single||moreText)?'uni-noticebar__content-wrapper--single':''
                            )}
                        >
                            <View className={classNames(
                                'uni-noticebar__content',
                                scrollable?'uni-noticebar__content--scrollable':'',
                                !scrollable&&(single||moreText)?'uni-noticebar__content--single':''
                            )}>
                                <Text
                                    className={classNames(
                                        'uni-noticebar__content-text vue-ref',
                                        scrollable?'uni-noticebar__content-text--scrollable':'',
                                        !scrollable&&(single||moreText)?'uni-noticebar__content-text--single':''
                                    )}
                                    style={{
                                        color:color,
                                        width: wrapWidth,
                                        animationDuration:animationDuration,
                                        animationPlayState:(webviewHide?'paused':animationPlayState),
                                        animationDelay:animationDelay,

                                    }}
                                    >{text}</Text>
                            </View>
                        </View>

                        {
                            showGetMore ? (
                            <View className="uni-noticebar__more">
                            <Text className="uni-noticebar__more-text data-v-75b5dee9" style={{color:moreColor}}>{moreText}</Text>
                            </View>
                            ) : null
                        }
                    </View>
                ) : null
            }
        </>

    )
}

export default Notice;