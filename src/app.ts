import * as React from 'react';

import 'annar/dist/annar.css';
import './app.css';
import './black.css'
import './white.css'
import './common.css';
import {siteInfo} from "@/util/utils";
import {setStorage} from "@/util/wxUtils";

const App: React.FC = props => {

    // 加载系统配置
    siteInfo(data=>{
        setStorage("siteInfo",data);
    });

    return props.children as React.ReactElement;
}

export default App;
