import SocialAuthButton from "@/component/auth/component/SocialAuthButton";
import React from "react";

export const MicrosoftButton = ({onClick}: {onClick: () => void}) => {
    return (
        <SocialAuthButton onClick={onClick}>
            <svg className={'group-hover:fill-white transition-all fill-gray-600'} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1"
                 x="0px" y="0px" viewBox="0 0 24 24" xmlSpace="preserve"
                 width="24" height="24">
                <g>
                    <rect x="0.046" width="11.386" height="11.428"/>
                    <rect x="12.639" width="11.315" height="11.428"/>
                    <rect x="0.046" y="12.572" width="11.386" height="11.428"/>
                    <rect x="12.639" y="12.572" width="11.315" height="11.428"/>
                </g>
            </svg>
            <p>Microsoft</p>
        </SocialAuthButton>
    );
};

export default MicrosoftButton