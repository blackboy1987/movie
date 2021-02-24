import {MenuButtonBoundingClientRect, ResponseInfo, SiteInfo, SystemInfo} from "@/data";
import {request, showModal} from 'remax/wechat';
import constants from "@/util/constants";
import {post} from "@/util/wxUtils";

export const siteInfo = (callback:(siteInfo:SiteInfo)=>void) =>{
    post('config',{},data=>callback(data));
}