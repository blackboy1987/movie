export interface SystemInfo {
    SDKVersion: string;
    batteryLevel: number;
    benchmarkLevel: number;
    brand: string;
    deviceOrientation: string;
    devicePixelRatio: number;
    enableDebug: boolean;
    fontSizeSetting: number;
    language: string;
    model: string;
    pixelRatio: number;
    platform: string;
    safeArea: {
        bottom: number;
        height: number;
        left: number;
        right: number;
        top: number;
        width: number;
    }
    screenHeight: number;
    screenWidth: number;
    statusBarHeight: number;
    system: string;
    version: string;
    windowHeight: number;
    windowWidth: number;
}

export interface MenuButtonBoundingClientRect {
    width: number;
    height: number;
    top: number;
    right	: number;
    left: number;
}

export type ResponseInfo={
    code: number;
    msg: string;
    data: any;
}

export type PlayUrl = {
    title: string;
    urls: string[];
}

export type Movie={
    id: number;
    pic: string;
    score: number;
    remarks: string;
    movieCategory_id: number;
    title: string;
    actor: string;
    serial: number;
    index: number;
    area: string;
    movieCategoryName: string
    typeName: string;
    year: string;
    blurb: string;
    playUrls:PlayUrl[];
    content: string;



}

export type SiteInfo = {
    appId?: number;
    bannerAdId?: string;
    carousels?: string[];
    createdDate?: Date;
    everyMinuteToPoint?: number;
    gridAdId?: string;
    id?: number;
    interstitialAdId?: string;
    jumpAdDiscoutPoint?: number;
    lastModifiedDate?: Date;
    logo?: null
    minVisitMinute?: number;
    name?: string;
    nativeAdId?: string;
    new?: false
    openAd?: null
    openPoint?: true
    rewardedVideoAdId?: string;
    status?: 0  | 1 | 2;
    version?: number;
    videoAdId?: string;
    videoFrontAdId?: string;
}