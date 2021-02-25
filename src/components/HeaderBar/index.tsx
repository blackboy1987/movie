import * as React from 'react';


type HeaderBarProps = {
    theme: string;
    Max?: boolean;
}

const HeaderBar:React.FC<HeaderBarProps> = ({Max=false,theme,children}) =>{
    return (
        <view className={Max?theme+'-detailBgMax':theme+'-detailBg'}>
            {children}
        </view>

    )
}

export default HeaderBar;