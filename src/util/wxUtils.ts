import {MenuButtonBoundingClientRect, ResponseInfo, SystemInfo} from "@/data";
import {request, showModal} from 'remax/wechat';
import constants from "@/util/constants";

/**
 * 获取菜单按钮（右上角胶囊按钮）的布局位置信息。坐标信息以屏幕左上角为原点。
 */
export const getMenuButtonBoundingClientRect = (): MenuButtonBoundingClientRect =>{
    return wx.getMenuButtonBoundingClientRect();
}

export const getSystemInfo = (): SystemInfo =>{
    return wx.getSystemInfoSync();
}

export const getStorage = (key: string) =>{
    if(!key){
        return null;
    }
    return wx.getStorageSync(key);
}

export const setStorage = (key: string, value: any) =>{
   wx.setStorageSync(key,value);
}

export const themeMode=() =>{
    const themeMode = getStorage("themeMode");
    if(themeMode){
        return themeMode;
    }
    return "white";
}

export const post = (url:string,data:{[key:string]:any},callback:(response:any)=>void) =>{

    request({
        url:constants.baseUrl+"v2/"+url,
        header: {
            "Content-Type": "application/x-www-form-urlencoded",
            "token":getStorage("token"),
        },
        data:{
          ...data,
            appCode:constants.appCode,
            appSecret: constants.appSecret,
        },
        method: 'POST',
    }).then((response)=>{
        console.log("post",response);
        const {data} = response;
        if(data.code===0){
            callback&&callback(data.data);
        }else{
            wx.showToast({
                title: data.msg,
                icon: 'none',
                image: '/images/error.png',
                duration: 5000,
                mask: true
            })
        }
    })
}
export const get = (url:string) =>{
    request({
        url,
        method: 'GET',
    }).then(response=>{
        console.log("post",response);
    })
}