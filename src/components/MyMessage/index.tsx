import * as React from 'react';
import classNames from 'classnames';
import './index.css';
import {Text, View,Button} from "remax/wechat";
import MyPopup from "@/components/MyPopup";

type MyMessageProps = {

}

const checked = true;
const sendNum = 3;
const userLogin = true;

const MyMessage:React.FC<MyMessageProps> = ({children}) =>{
    return (
        <View>
            <View className={classNames('message ',checked?'cuIcon-iconzhuiju':'cuIcon-iconguanbi')} />
            <MyPopup type="center">
                <View className="send">
                    <View style={{height:80}} />
                    <View className="send-message">
                        <Text className="send-num">{'剩余提醒数量：'+sendNum + '条'}</Text>
                        <Text className="send-add zwyHover1 cuIcon" />
                    </View>
                    <Text className="send-tis  cuIcon">数量3条为3天每天提醒1次，点击右上角  添加提醒</Text>
                    {
                        userLogin ? (
                            <View className="send-button">
                                <Button className="send-button-view cuIcon">关闭</Button>
                                <Button className="send-button-view cuIcon">订阅</Button>
                            </View>
                        ) : (
                            <View className="send-button">
                                <Button className="send-button-login" openType="getUserInfo">登录后使用</Button>
                            </View>
                        )
                    }
                    <Text className="send-note">每天仅提醒一次，不会造成打扰哦!</Text>
                    <Text className="send-note">注：订阅消息务必选择总是允许，否则可能收不到更新通知</Text>
                </View>
                <View className="send-img" />
            </MyPopup>
        </View>
    )
}

export default MyMessage;