/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';

export type IconFontNames = 'wechat' | 'alipay' | 'baidu' | 'logout' | 'user';

export interface IconFontProps {
  name: IconFontNames;
  size?: number;
  color?: string | string[];
}

const IconFont: FunctionComponent<IconFontProps> = () => {
  return null;
};

export default IconFont;
