
export const createRewardedVideoAd=(adUnitId:string,callback:{
    onLoad:()=>void;
    onError:(err)=>void;
    onClose:(res)=>void;
})=>{
    const {onLoad,onError,onClose} = callback;
    if (wx.createRewardedVideoAd) {
        const videoAd = wx.createRewardedVideoAd({
            adUnitId
        })
        videoAd.onLoad((e) => {
            onLoad&&onLoad(e);
        })
        videoAd.onError((err) => {
            onError&&onError(err);
        })
        videoAd.onClose((res) => {
            onClose&&onClose(res);
        })
    }
    return null;
}


export const createInterstitialAd = (adUnitId:string,callback:{
    onLoad:()=>void;
    onError:(err)=>void;
    onClose:(res)=>void;
}) =>{
    if (wx.createInterstitialAd) {
        const {onLoad,onError,onClose} = callback;
        const interstitialAd = wx.createInterstitialAd({
            adUnitId
        })
        interstitialAd.onLoad((e) => {
            onLoad&&onLoad(e);
        })
        interstitialAd.onError((err) => {
            onError&&onError(err);
        })
        interstitialAd.onClose((res) => {
            onClose&&onClose(res);
        })

        return interstitialAd;
    }
    return null;
}