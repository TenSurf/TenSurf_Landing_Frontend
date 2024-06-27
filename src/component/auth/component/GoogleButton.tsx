import SocialAuthButton from "@/component/auth/component/SocialAuthButton";
import React from "react";

export const GoogleButton = ({onClick}: {onClick: () => void}) => {
    return (
        <SocialAuthButton onClick={onClick}>
            <svg className={'group-hover:fill-white transition-all fill-gray-600'} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1"
                 id="Capa_1" x="0px" y="0px" viewBox="0 0 24 24"
                 xmlSpace="preserve" width="24" height="24">
                <style>
                    {'enable-background:new 0 0 24 24;'}
                </style>
                <g>
                    <path
                        d="M12.479,14.265v-3.279h11.049c0.108,0.571,0.164,1.247,0.164,1.979c0,2.46-0.672,5.502-2.84,7.669   C18.744,22.829,16.051,24,12.483,24C5.869,24,0.308,18.613,0.308,12S5.869,0,12.483,0c3.659,0,6.265,1.436,8.223,3.307L18.392,5.62   c-1.404-1.317-3.307-2.341-5.913-2.341C7.65,3.279,3.873,7.171,3.873,12s3.777,8.721,8.606,8.721c3.132,0,4.916-1.258,6.059-2.401   c0.927-0.927,1.537-2.251,1.777-4.059L12.479,14.265z"/>
                </g>
            </svg>
            <p>Google</p>
        </SocialAuthButton>
    );
};

export default GoogleButton