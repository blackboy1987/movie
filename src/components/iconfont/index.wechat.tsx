/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
// @ts-ignore
import Iconfont_wechat from './wechat/wechat';

interface Props {
  name: 'fenxiang1' | 'ping1' | 're1' | 'xin1' | 'dingbu' | 'ic_history' | 'guanbi' | 'lianjie' | 'kefu' | 'xuanji' | 'beisu20' | 'weixin' | 'beisu10' | 'beisu12' | 'beisu15' | 'xing' | 'houtuimiao' | 'houtuis' | 'zuoyoujiantou' | 'zuoyoujiantou1' | 'xingxing' | 'taiyang' | 'jianjie1' | 'shouye' | 'houtui' | 'bofang' | 'pengyouquan' | 'icon-moon-fill' | 'tongzhi' | '161jiarehuoyan' | 'jianjie';
  size?: number;
  color?: string | string[];
}

const IconFont: FunctionComponent<Props> = (props) => {
  const { name, size, color } = props;

  // FIXME: RemaxJs doesn't support pxTransform()
  // @ts-ignore
  return <Iconfont_wechat name={name} size={size} color={color} />;
};

IconFont.defaultProps = {
  size: 18,
};

export default IconFont;
