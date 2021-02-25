import { AppConfig } from "remax/wechat";

const config: AppConfig = {
  pages: [
    'pages/index/index',
    'pages/my/index',
    'pages/art/index',
    'pages/topic/index',
    'pages/search/index',
    'pages/fenlei/index',
    'pages/play/index',
    'pages/detail/index',
  ],
  window: {
    navigationStyle: 'custom',
  },
  tabBar: {
    color:'#898E8A',
    selectedColor:'#FFD524',
    backgroundColor:'#323232',
    list: [
      {
        pagePath: 'pages/index/index',
        text:'首页',
        iconPath:'/images/index1.png',
        selectedIconPath:'/images/index2.png',
      },
      {
        pagePath: 'pages/fenlei/index',
        text:'分类',
        iconPath:'/images/fenlei1.png',
        selectedIconPath:'/images/fenlei2.png',
      },
      {
        pagePath: 'pages/search/index',
        text:'搜索',
        iconPath:'/images/sousuo1.png',
        selectedIconPath:'/images/sousuo2.png',
      },
      {
        pagePath: 'pages/topic/index',
        text:'专题',
        iconPath:'/images/faxian1.png',
        selectedIconPath:'/images/faxian2.png',
      },
      {
        pagePath: 'pages/my/index',
        text:'我的',
        iconPath:'/images/wode1.png',
        selectedIconPath:'/images/wode2.png',
      },
    ]
  }
};

export default config;
