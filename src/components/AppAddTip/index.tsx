import * as React from 'react';
import {View, Text, Button} from 'remax/wechat';
import './index.css';

type AppAddTipProps = {
    showTip: boolean;
    showButton?: boolean;
    tip?: string;
}

const AppAddTip:React.FC<AppAddTipProps> = ({showTip,showButton,tip='点击「添加小程序」，下次访问更便捷'}) =>{
    return (
        <View className="data-v-277b43c1">
            {
                showTip ? (
                    <View className="tips-box">
                        <View className="tips-content">
                            {
                                showButton ? (
                                    <Button className="tips-button" openType="share" size="mini" type="default" >{tip}</Button>
                                ) : (<Text className="tips-content-text">{tip}</Text>)
                            }
                        </View>
                    </View>
                ) : null
            }
        </View>

    )
}

export default AppAddTip;